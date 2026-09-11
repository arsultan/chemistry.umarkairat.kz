"use client";

import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import * as THREE from "three";
import { Molecule3D, Atom3D, Bond3D, ELEMENT_CPK } from "@/data/molecule3dData";

export type RenderMode = "ball-and-stick" | "space-filling" | "wireframe" | "electron-cloud";

export interface MoleculeViewer3DRef {
  takeSnapshot: () => string | null;
  resetCamera: () => void;
}

interface MoleculeViewer3DProps {
  molecule: Molecule3D;
  mode: RenderMode;
  autoRotate: boolean;
  temperature: number; // in Kelvin (0 - 1000)
  onHoverAtom?: (atom: Atom3D | null) => void;
  onSelectAtom?: (atom: Atom3D) => void;
  selectedAtomIds?: number[];
  theme?: "dark" | "light";
}

export const MoleculeViewer3D = forwardRef<MoleculeViewer3DRef, MoleculeViewer3DProps>(({
  molecule,
  mode,
  autoRotate,
  temperature,
  onHoverAtom,
  onSelectAtom,
  selectedAtomIds = [],
  theme = "dark"
}, ref) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const moleculeGroupRef = useRef<THREE.Group | null>(null);
  const atomMeshesRef = useRef<Map<number, { mesh: THREE.Mesh; basePos: THREE.Vector3; phase: THREE.Vector3 }>>(new Map());

  // Camera Orbit State
  const isDraggingRef = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const cameraAngle = useRef({ theta: 0.4, phi: 0.3 });
  const cameraDistance = useRef(7.5);
  const targetCameraDistance = useRef(7.5);
  const currentAngle = useRef({ theta: 0.4, phi: 0.3 });

  // Raycasting
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2(-1000, -1000));
  const hoveredAtomIdRef = useRef<number | null>(null);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    takeSnapshot: () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return null;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      return rendererRef.current.domElement.toDataURL("image/png");
    },
    resetCamera: () => {
      targetCameraDistance.current = 7.5;
      cameraAngle.current = { theta: 0.4, phi: 0.3 };
    }
  }));

  // Initialize Three.js Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    cameraRef.current = camera;
    camera.position.set(0, 0, 7.5);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === "dark" ? 0.7 : 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight1.position.set(6, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7c6ff6, 0.8);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xa59bfb, 1.2, 15);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 5. Molecule Root Group
    const molGroup = new THREE.Group();
    scene.add(molGroup);
    moleculeGroupRef.current = molGroup;

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      if (autoRotate && !isDraggingRef.current) {
        cameraAngle.current.theta += delta * 0.45;
      }

      currentAngle.current.theta += (cameraAngle.current.theta - currentAngle.current.theta) * 0.1;
      currentAngle.current.phi += (cameraAngle.current.phi - currentAngle.current.phi) * 0.1;
      cameraDistance.current += (targetCameraDistance.current - cameraDistance.current) * 0.1;

      // Clamp phi to prevent flip
      currentAngle.current.phi = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, currentAngle.current.phi));

      // Calculate spherical coordinates for camera
      const r = cameraDistance.current;
      const phi = currentAngle.current.phi;
      const theta = currentAngle.current.theta;

      camera.position.x = r * Math.cos(phi) * Math.sin(theta);
      camera.position.y = r * Math.sin(phi);
      camera.position.z = r * Math.cos(phi) * Math.cos(theta);
      camera.lookAt(0, 0, 0);

      // Thermal vibration physics simulation
      if (temperature > 0 && atomMeshesRef.current.size > 0) {
        const tempFactor = (temperature / 300) * 0.05; // 300K is room temp
        atomMeshesRef.current.forEach(({ mesh, basePos, phase }) => {
          const vx = Math.sin(elapsed * 12 + phase.x) * tempFactor;
          const vy = Math.cos(elapsed * 14 + phase.y) * tempFactor;
          const vz = Math.sin(elapsed * 16 + phase.z) * tempFactor;
          mesh.position.set(basePos.x + vx, basePos.y + vy, basePos.z + vz);
        });
      } else if (atomMeshesRef.current.size > 0) {
        atomMeshesRef.current.forEach(({ mesh, basePos }) => {
          mesh.position.copy(basePos);
        });
      }

      // Raycasting for Hover & Click
      if (raycaster.current && cameraRef.current && moleculeGroupRef.current) {
        raycaster.current.setFromCamera(mouse.current, cameraRef.current);
        const atomMeshList: THREE.Mesh[] = [];
        atomMeshesRef.current.forEach(item => atomMeshList.push(item.mesh));
        const intersects = raycaster.current.intersectObjects(atomMeshList);

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const hitAtomId = hitMesh.userData.atomId;
          if (hoveredAtomIdRef.current !== hitAtomId) {
            hoveredAtomIdRef.current = hitAtomId;
            const atomData = molecule.atoms.find(a => a.id === hitAtomId) || null;
            if (onHoverAtom) onHoverAtom(atomData);
          }
        } else {
          if (hoveredAtomIdRef.current !== null) {
            hoveredAtomIdRef.current = null;
            if (onHoverAtom) onHoverAtom(null);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  // Re-build 3D Meshes whenever molecule or mode changes
  useEffect(() => {
    const group = moleculeGroupRef.current;
    if (!group) return;

    // Clear previous objects
    while (group.children.length > 0) {
      const child = group.children[0] as THREE.Mesh;
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else if (child.material) {
        child.material.dispose();
      }
    }

    atomMeshesRef.current.clear();

    // Shared Materials Cache
    const materialsCache = new Map<string, THREE.Material>();

    // 1. Compute bounding box and center molecule
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    molecule.atoms.forEach(atom => {
      minX = Math.min(minX, atom.x);
      maxX = Math.max(maxX, atom.x);
      minY = Math.min(minY, atom.y);
      maxY = Math.max(maxY, atom.y);
      minZ = Math.min(minZ, atom.z);
      maxZ = Math.max(maxZ, atom.z);
    });

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const centerZ = (minZ + maxZ) / 2;

    const maxSpan = Math.max(maxX - minX, maxY - minY, maxZ - minZ, 1);
    const scaleFactor = Math.min(3.5 / maxSpan, 1.4);

    // 2. Build Atoms
    molecule.atoms.forEach(atom => {
      const cpk = ELEMENT_CPK[atom.element] || ELEMENT_CPK.C;
      const isSelected = selectedAtomIds.includes(atom.id);

      let atomRadius = 0.45;
      if (mode === "space-filling") {
        atomRadius = cpk.vdwRadius * 0.72;
      } else if (mode === "wireframe") {
        atomRadius = 0.22;
      } else {
        atomRadius = cpk.radius * 0.95;
      }

      const sphereGeo = new THREE.SphereGeometry(atomRadius, 32, 32);

      let atomMat: THREE.Material;
      if (mode === "wireframe") {
        atomMat = new THREE.MeshBasicMaterial({
          color: cpk.hex,
          wireframe: true
        });
      } else if (mode === "electron-cloud") {
        atomMat = new THREE.MeshPhysicalMaterial({
          color: isSelected ? 0xec4899 : cpk.hex,
          roughness: 0.15,
          metalness: 0.1,
          transmission: 0.4,
          transparent: true,
          opacity: 0.85,
          emissive: isSelected ? 0xec4899 : cpk.hex,
          emissiveIntensity: isSelected ? 0.4 : 0.15
        });
      } else {
        atomMat = new THREE.MeshStandardMaterial({
          color: isSelected ? 0xec4899 : cpk.hex,
          roughness: 0.25,
          metalness: 0.15,
          emissive: isSelected ? 0xec4899 : 0x000000,
          emissiveIntensity: isSelected ? 0.35 : 0
        });
      }

      const mesh = new THREE.Mesh(sphereGeo, atomMat);
      const posX = (atom.x - centerX) * scaleFactor;
      const posY = (atom.y - centerY) * scaleFactor;
      const posZ = (atom.z - centerZ) * scaleFactor;

      mesh.position.set(posX, posY, posZ);
      mesh.userData = { atomId: atom.id, element: atom.element };
      group.add(mesh);

      // Random phase vector for thermal oscillation
      const phase = new THREE.Vector3(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      atomMeshesRef.current.set(atom.id, {
        mesh,
        basePos: new THREE.Vector3(posX, posY, posZ),
        phase
      });

      // If mode is electron-cloud, add an outer transparent orbital cloud sphere
      if (mode === "electron-cloud") {
        const cloudGeo = new THREE.SphereGeometry(atomRadius * 1.85, 24, 24);
        const cloudMat = new THREE.MeshBasicMaterial({
          color: cpk.hex,
          transparent: true,
          opacity: 0.12,
          wireframe: false
        });
        const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
        mesh.add(cloudMesh);
      }
    });

    // 3. Build Bonds (Only in Ball-and-stick, Wireframe, Electron-cloud)
    if (mode !== "space-filling") {
      molecule.bonds.forEach(bond => {
        const a1 = molecule.atoms.find(a => a.id === bond.from);
        const a2 = molecule.atoms.find(a => a.id === bond.to);
        if (!a1 || !a2) return;

        const p1 = new THREE.Vector3(
          (a1.x - centerX) * scaleFactor,
          (a1.y - centerY) * scaleFactor,
          (a1.z - centerZ) * scaleFactor
        );
        const p2 = new THREE.Vector3(
          (a2.x - centerX) * scaleFactor,
          (a2.y - centerY) * scaleFactor,
          (a2.z - centerZ) * scaleFactor
        );

        const distance = p1.distanceTo(p2);
        const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
        const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        // Cylinder radius based on bond order
        const bondRadius = mode === "wireframe" ? 0.04 : 0.09;
        const bondOrder = bond.order;

        if (bondOrder === 1 || bondOrder === "aromatic") {
          const bondGeo = new THREE.CylinderGeometry(bondRadius, bondRadius, distance, 16);
          const bondMat = new THREE.MeshStandardMaterial({
            color: bondOrder === "aromatic" ? 0xa855f7 : 0x94a3b8,
            roughness: 0.4,
            metalness: 0.2
          });
          const bondMesh = new THREE.Mesh(bondGeo, bondMat);

          bondMesh.position.copy(midPoint);
          bondMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
          group.add(bondMesh);

          // Aromatic ring indicator torus or extra ring cylinder
          if (bondOrder === "aromatic") {
            const auraGeo = new THREE.CylinderGeometry(bondRadius * 1.6, bondRadius * 1.6, distance * 0.9, 12);
            const auraMat = new THREE.MeshBasicMaterial({
              color: 0xc084fc,
              transparent: true,
              opacity: 0.25
            });
            const auraMesh = new THREE.Mesh(auraGeo, auraMat);
            auraMesh.position.copy(midPoint);
            auraMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            group.add(auraMesh);
          }
        } else if (bondOrder === 2) {
          // Double bond: two parallel cylinders
          const offset = 0.1;
          const up = new THREE.Vector3(0, 1, 0);
          const perp = new THREE.Vector3().crossVectors(dir, up).normalize();
          if (perp.lengthSq() < 0.001) perp.crossVectors(dir, new THREE.Vector3(1, 0, 0)).normalize();

          [-offset, offset].forEach(off => {
            const bondGeo = new THREE.CylinderGeometry(bondRadius * 0.75, bondRadius * 0.75, distance, 12);
            const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 });
            const bondMesh = new THREE.Mesh(bondGeo, bondMat);

            const shiftedMid = midPoint.clone().addScaledVector(perp, off);
            bondMesh.position.copy(shiftedMid);
            bondMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            group.add(bondMesh);
          });
        } else if (bondOrder === 3) {
          // Triple bond: three cylinders
          const offset = 0.12;
          const perp1 = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
          if (perp1.lengthSq() < 0.001) perp1.crossVectors(dir, new THREE.Vector3(1, 0, 0)).normalize();
          const perp2 = new THREE.Vector3().crossVectors(dir, perp1).normalize();

          [
            new THREE.Vector3().addScaledVector(perp1, offset),
            new THREE.Vector3().addScaledVector(perp1, -offset * 0.5).addScaledVector(perp2, offset * 0.866),
            new THREE.Vector3().addScaledVector(perp1, -offset * 0.5).addScaledVector(perp2, -offset * 0.866)
          ].forEach(shiftVec => {
            const bondGeo = new THREE.CylinderGeometry(bondRadius * 0.7, bondRadius * 0.7, distance, 12);
            const bondMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.4 });
            const bondMesh = new THREE.Mesh(bondGeo, bondMat);

            bondMesh.position.copy(midPoint.clone().add(shiftVec));
            bondMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            group.add(bondMesh);
          });
        }
      });
    }

  }, [molecule, mode, selectedAtomIds]);

  // Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevMousePos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // Update normalized mouse coordinates for raycasting
    const rect = mountRef.current?.getBoundingClientRect();
    if (rect) {
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }

    if (!isDraggingRef.current) return;

    const dx = e.clientX - prevMousePos.current.x;
    const dy = e.clientY - prevMousePos.current.y;

    cameraAngle.current.theta += dx * 0.008;
    cameraAngle.current.phi += dy * 0.008;

    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    targetCameraDistance.current = Math.max(3.0, Math.min(18.0, targetCameraDistance.current + e.deltaY * 0.01));
  };

  const handleClick = () => {
    if (hoveredAtomIdRef.current !== null && onSelectAtom) {
      const atom = molecule.atoms.find(a => a.id === hoveredAtomIdRef.current);
      if (atom) onSelectAtom(atom);
    }
  };

  return (
    <div
      ref={mountRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      onClick={handleClick}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none"
    />
  );
});

MoleculeViewer3D.displayName = "MoleculeViewer3D";
