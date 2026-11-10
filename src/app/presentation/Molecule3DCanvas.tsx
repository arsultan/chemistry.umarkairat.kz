"use client";

import React, { useEffect, useRef } from "react";

export type MolAtom = { el: string; x: number; y: number; z: number };
export type Molecule = {
  name: string;
  formula: string;
  geometry: string;
  atoms: MolAtom[];
  /** [a, b, order] — order defaults to 1 */
  bonds: [number, number, number?][];
  /** shrink atoms and bonds (used for crystal lattices) */
  atomScale?: number;
  bondScale?: number;
};

type Style = { color: string; r: number };
const STYLE: Record<string, Style> = {
  H: { color: "#f1f5f9", r: 0.5 },
  C: { color: "#94a3b8", r: 0.78 },
  N: { color: "#818cf8", r: 0.76 },
  O: { color: "#fb7185", r: 0.74 },
  Na: { color: "#c084fc", r: 0.95 },
  Cl: { color: "#4ade80", r: 0.95 },
};

/* ------------------------- molecule library ------------------------- */

const benzene = (): Molecule => {
  const atoms: MolAtom[] = [];
  const bonds: Molecule["bonds"] = [];
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3;
    atoms.push({ el: "C", x: Math.cos(a) * 1.4, y: Math.sin(a) * 1.4, z: 0 });
  }
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3;
    atoms.push({ el: "H", x: Math.cos(a) * 2.48, y: Math.sin(a) * 2.48, z: 0 });
    bonds.push([k, (k + 1) % 6, k % 2 === 0 ? 2 : 1], [k, 6 + k, 1]);
  }
  return { name: "Бензол", formula: "C₆H₆", geometry: "плоский шестиугольник, углы 120°", atoms, bonds };
};

const caffeine = (): Molecule => {
  const atoms: MolAtom[] = [];
  const bonds: Molecule["bonds"] = [];
  const add = (el: string, x: number, y: number, z = 0) => { atoms.push({ el, x, y, z }); return atoms.length - 1; };
  const bond = (a: number, b: number, o = 1) => bonds.push([a, b, o]);
  const methyl = (from: number, cx: number, cy: number, dx: number, dy: number) => {
    const c = add("C", cx, cy);
    bond(from, c);
    const px = -dy, py = dx; // in-plane perpendicular
    [0, 120, 240].forEach((deg) => {
      const t = (deg * Math.PI) / 180;
      const h = add("H", cx + dx * 0.45 + px * 0.9 * Math.cos(t), cy + dy * 0.45 + py * 0.9 * Math.cos(t), 0.9 * Math.sin(t));
      bond(c, h);
    });
  };
  // six-membered ring
  const C6 = add("C", 0, 1.4), C5 = add("C", 1.21, 0.7), C4 = add("C", 1.21, -0.7);
  const N3 = add("N", 0, -1.4), C2 = add("C", -1.21, -0.7), N1 = add("N", -1.21, 0.7);
  bond(C6, C5, 1); bond(C5, C4, 2); bond(C4, N3, 1); bond(N3, C2, 1); bond(C2, N1, 1); bond(N1, C6, 1);
  // five-membered ring
  const N7 = add("N", 2.45, 1.1), C8 = add("C", 3.2, 0), N9 = add("N", 2.45, -1.1);
  bond(C5, N7); bond(N7, C8); bond(C8, N9, 2); bond(N9, C4);
  // carbonyls
  const O6 = add("O", 0, 2.65); bond(C6, O6, 2);
  const O2 = add("O", -2.3, -1.3); bond(C2, O2, 2);
  // methyl groups
  methyl(N1, -2.45, 1.45, -0.86, 0.5);
  methyl(N3, 0, -2.85, 0, -1);
  methyl(N7, 2.9, 2.4, 0.4, 0.9);
  const H8 = add("H", 4.25, 0); bond(C8, H8);
  return { name: "Кофеин", formula: "C₈H₁₀N₄O₂", geometry: "плоская бициклическая структура (пурин)", atoms, bonds, atomScale: 0.85 };
};

const naclLattice = (): Molecule => {
  const atoms: MolAtom[] = [];
  const bonds: Molecule["bonds"] = [];
  const idx: Record<string, number> = {};
  const s = 1.5;
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) {
    idx[`${i},${j},${k}`] = atoms.length;
    atoms.push({ el: (i + j + k + 3) % 2 === 0 ? "Na" : "Cl", x: i * s, y: j * s, z: k * s });
  }
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) {
    const a = idx[`${i},${j},${k}`];
    [[1, 0, 0], [0, 1, 0], [0, 0, 1]].forEach(([dx, dy, dz]) => {
      const b = idx[`${i + dx},${j + dy},${k + dz}`];
      if (b !== undefined) bonds.push([a, b, 1]);
    });
  }
  return { name: "Поваренная соль", formula: "NaCl", geometry: "кубическая кристаллическая решётка", atoms, bonds, atomScale: 0.62, bondScale: 0.45 };
};

export const MOLECULES: Molecule[] = [
  {
    name: "Вода", formula: "H₂O", geometry: "угловая молекула, угол 104,5°",
    atoms: [{ el: "O", x: 0, y: -0.2, z: 0 }, { el: "H", x: 0.76, y: 0.39, z: 0 }, { el: "H", x: -0.76, y: 0.39, z: 0 }],
    bonds: [[0, 1], [0, 2]],
  },
  {
    name: "Углекислый газ", formula: "CO₂", geometry: "линейная молекула, угол 180°",
    atoms: [{ el: "C", x: 0, y: 0, z: 0 }, { el: "O", x: 1.16, y: 0, z: 0 }, { el: "O", x: -1.16, y: 0, z: 0 }],
    bonds: [[0, 1, 2], [0, 2, 2]],
  },
  {
    name: "Метан", formula: "CH₄", geometry: "тетраэдр, угол 109,5°",
    atoms: [
      { el: "C", x: 0, y: 0, z: 0 },
      { el: "H", x: 0.63, y: 0.63, z: 0.63 }, { el: "H", x: 0.63, y: -0.63, z: -0.63 },
      { el: "H", x: -0.63, y: 0.63, z: -0.63 }, { el: "H", x: -0.63, y: -0.63, z: 0.63 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
  },
  {
    name: "Аммиак", formula: "NH₃", geometry: "пирамидальная молекула",
    atoms: [
      { el: "N", x: 0, y: 0.35, z: 0 },
      { el: "H", x: 0.94, y: -0.1, z: 0 }, { el: "H", x: -0.47, y: -0.1, z: 0.81 }, { el: "H", x: -0.47, y: -0.1, z: -0.81 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3]],
  },
  {
    name: "Ацетилен", formula: "C₂H₂", geometry: "линейная молекула, тройная связь C≡C",
    atoms: [{ el: "H", x: -1.66, y: 0, z: 0 }, { el: "C", x: -0.6, y: 0, z: 0 }, { el: "C", x: 0.6, y: 0, z: 0 }, { el: "H", x: 1.66, y: 0, z: 0 }],
    bonds: [[0, 1], [1, 2, 3], [2, 3]],
  },
  {
    name: "Этанол", formula: "C₂H₅OH", geometry: "тетраэдрические атомы углерода",
    atoms: [
      { el: "C", x: -1.25, y: -0.1, z: 0 }, { el: "C", x: 0.2, y: 0.45, z: 0 }, { el: "O", x: 1.3, y: -0.45, z: 0.2 },
      { el: "H", x: -2.0, y: 0.55, z: 0.35 }, { el: "H", x: -1.35, y: -0.95, z: 0.6 }, { el: "H", x: -1.45, y: -0.35, z: -0.95 },
      { el: "H", x: 0.3, y: 1.1, z: 0.85 }, { el: "H", x: 0.3, y: 1.05, z: -0.85 }, { el: "H", x: 2.1, y: -0.05, z: 0.1 },
    ],
    bonds: [[0, 1], [1, 2], [0, 3], [0, 4], [0, 5], [1, 6], [1, 7], [2, 8]],
  },
  benzene(),
  caffeine(),
  naclLattice(),
];

/* ------------------------- 3D molecule viewer ------------------------- */

const hexA = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

export const Molecule3DCanvas: React.FC<{ molecule: Molecule; className?: string; scale?: number }> = ({ molecule, className, scale = 1 }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const st = useRef({ ax: 0.35, ay: 0.6, vy: 0.006, vx: 0, drag: false, lx: 0, ly: 0 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let t = 0;

    const maxR = Math.max(...molecule.atoms.map((a) => Math.hypot(a.x, a.y, a.z))) + 0.9;
    const dust = Array.from({ length: 36 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() * 1.6 + 0.4, v: Math.random() * 0.0004 + 0.0001 }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      const s = st.current;

      // floating dust
      dust.forEach((d) => {
        d.y -= d.v; if (d.y < 0) d.y = 1;
        ctx.fillStyle = `rgba(199,210,254,${0.15 + 0.15 * Math.sin(t * 2 + d.x * 9)})`;
        ctx.beginPath(); ctx.arc(d.x * w, d.y * h, d.s, 0, Math.PI * 2); ctx.fill();
      });

      if (!s.drag) {
        s.ay += s.vy; s.ax += s.vx;
        s.vx *= 0.95;
        s.vy += (0.006 - s.vy) * 0.03; // ease back to auto-rotation
        s.ax += (0.35 + Math.sin(t * 0.6) * 0.18 - s.ax) * 0.01;
      }
      const cy = Math.cos(s.ay), sy = Math.sin(s.ay), cx = Math.cos(s.ax), sx = Math.sin(s.ax);
      const unit = ((Math.min(w, h) * 0.46) / maxR) * scale;
      const bob = Math.sin(t * 1.2) * unit * 0.06;
      const aS = molecule.atomScale ?? 1;
      const bS = molecule.bondScale ?? 1;

      // ground shadow
      const gy = h / 2 + maxR * unit * 0.95;
      const sh = ctx.createRadialGradient(w / 2, gy, 2, w / 2, gy, maxR * unit * 0.9);
      sh.addColorStop(0, "rgba(165,180,252,0.28)");
      sh.addColorStop(1, "rgba(165,180,252,0)");
      ctx.save();
      ctx.translate(0, 0);
      ctx.fillStyle = sh;
      ctx.beginPath();
      ctx.ellipse(w / 2, gy, maxR * unit * 0.9, maxR * unit * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const pts = molecule.atoms.map((a) => {
        const x1 = a.x * cy + a.z * sy;
        const z1 = -a.x * sy + a.z * cy;
        const y2 = a.y * cx - z1 * sx;
        const z2 = a.y * sx + z1 * cx;
        const p = 1 / (1 - z2 * 0.07);
        return { sx: w / 2 + x1 * unit * p, sy: h / 2 - y2 * unit * p + bob, z: z2, p, el: a.el };
      });

      type Item = { z: number; draw: () => void };
      const items: Item[] = [];
      const depthShade = (z: number) => Math.min(0.55, Math.max(0, (maxR - z) / (maxR * 2)) * 0.6);

      molecule.bonds.forEach(([a, b, order = 1]) => {
        const A = pts[a], B = pts[b];
        const zMid = (A.z + B.z) / 2;
        items.push({
          z: zMid - 0.01,
          draw: () => {
            const dx = B.sx - A.sx, dy = B.sy - A.sy;
            const len = Math.hypot(dx, dy) || 1;
            const nx = -dy / len, ny = dx / len;
            const wBase = unit * 0.17 * bS * ((A.p + B.p) / 2);
            const lw = order === 1 ? wBase : wBase * (order === 2 ? 0.62 : 0.5);
            const gap = wBase * (order === 2 ? 0.75 : 1.0);
            const offs = order === 1 ? [0] : order === 2 ? [-gap, gap] : [-gap * 1.3, 0, gap * 1.3];
            offs.forEach((o) => {
              const x1 = A.sx + nx * o, y1 = A.sy + ny * o, x2 = B.sx + nx * o, y2 = B.sy + ny * o;
              const g = ctx.createLinearGradient(x1 - nx * lw, y1 - ny * lw, x1 + nx * lw, y1 + ny * lw);
              g.addColorStop(0, "rgba(255,255,255,0.95)");
              g.addColorStop(0.5, "rgba(203,213,225,0.9)");
              g.addColorStop(1, "rgba(100,116,139,0.9)");
              ctx.strokeStyle = g;
              ctx.lineWidth = lw;
              ctx.lineCap = "round";
              ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
            });
          },
        });
      });

      pts.forEach((p) => {
        items.push({
          z: p.z,
          draw: () => {
            const stl = STYLE[p.el] ?? { color: "#e2e8f0", r: 0.7 };
            const r = stl.r * unit * 0.5 * aS * p.p;
            // outer glow
            const glow = ctx.createRadialGradient(p.sx, p.sy, r * 0.6, p.sx, p.sy, r * 2.4);
            glow.addColorStop(0, hexA(stl.color, 0.35));
            glow.addColorStop(1, hexA(stl.color, 0));
            ctx.fillStyle = glow;
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 2.4, 0, Math.PI * 2); ctx.fill();
            // body (light from top-left)
            const g = ctx.createRadialGradient(p.sx - r * 0.38, p.sy - r * 0.42, r * 0.05, p.sx - r * 0.1, p.sy - r * 0.1, r * 1.15);
            g.addColorStop(0, "#ffffff");
            g.addColorStop(0.22, hexA(stl.color, 1));
            g.addColorStop(0.75, hexA(stl.color, 0.85));
            g.addColorStop(1, "#0f172a");
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill();
            // rim light (bottom-right)
            const rim = ctx.createRadialGradient(p.sx + r * 0.55, p.sy + r * 0.6, r * 0.1, p.sx + r * 0.55, p.sy + r * 0.6, r * 0.9);
            rim.addColorStop(0, hexA("#a5b4fc", 0.35));
            rim.addColorStop(1, "rgba(165,180,252,0)");
            ctx.fillStyle = rim;
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill();
            // specular
            ctx.fillStyle = "rgba(255,255,255,0.75)";
            ctx.beginPath(); ctx.ellipse(p.sx - r * 0.38, p.sy - r * 0.45, r * 0.2, r * 0.12, -0.6, 0, Math.PI * 2); ctx.fill();
            // depth fog
            const d = depthShade(p.z);
            if (d > 0.02) {
              ctx.fillStyle = `rgba(10,10,11,${d})`;
              ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill();
            }
          },
        });
      });

      items.sort((a, b) => a.z - b.z).forEach((i) => i.draw());
      raf = requestAnimationFrame(draw);
    };
    draw();

    const down = (e: PointerEvent) => { const s = st.current; s.drag = true; s.lx = e.clientX; s.ly = e.clientY; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      const s = st.current;
      if (!s.drag) return;
      const dx = e.clientX - s.lx, dy = e.clientY - s.ly;
      s.ay += dx * 0.01; s.ax += dy * 0.01;
      s.vy = dx * 0.002; s.vx = dy * 0.002;
      s.lx = e.clientX; s.ly = e.clientY;
    };
    const up = () => { st.current.drag = false; };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, [molecule, scale]);

  return <canvas ref={ref} className={`touch-none cursor-grab active:cursor-grabbing ${className ?? ""}`} />;
};

/* ------------------------- 3D Bohr atom ------------------------- */

export type AtomModel = { symbol: string; name: string; shells: number[]; color: string };

export const ATOMS: AtomModel[] = [
  { symbol: "H", name: "Водород", shells: [1], color: "#e2e8f0" },
  { symbol: "C", name: "Углерод", shells: [2, 4], color: "#94a3b8" },
  { symbol: "O", name: "Кислород", shells: [2, 6], color: "#fb7185" },
  { symbol: "Na", name: "Натрий", shells: [2, 8, 1], color: "#c084fc" },
  { symbol: "Cl", name: "Хлор", shells: [2, 8, 7], color: "#4ade80" },
  { symbol: "Fe", name: "Железо", shells: [2, 8, 14, 2], color: "#fdba74" },
];

export const BohrAtom3D: React.FC<{ atom: AtomModel; className?: string }> = ({ atom, className }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const st = useRef({ ax: 0.9, ay: 0, drag: false, lx: 0, ly: 0 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let t = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      const s = st.current;
      if (!s.drag) s.ay += 0.004;
      const cy = Math.cos(s.ay), sy = Math.sin(s.ay), cx = Math.cos(s.ax), sx = Math.sin(s.ax);
      const n = atom.shells.length;
      const R0 = Math.min(w, h) * 0.46;
      const proj = (x: number, y: number, z: number) => {
        const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
        const y2 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
        const p = 1 / (1 - z2 / (R0 * 5));
        return { x: w / 2 + x1 * p, y: h / 2 - y2 * p, z: z2, p };
      };

      type Item = { z: number; draw: () => void };
      const items: Item[] = [];

      // orbits (each tilted differently) + electrons
      atom.shells.forEach((count, si) => {
        const r = R0 * (0.3 + (0.7 * (si + 1)) / n);
        const tilt = (si * Math.PI) / (n + 0.5) + 0.35;
        const rotate = (x: number, y: number, z: number): [number, number, number] => [x, y * Math.cos(tilt) - z * Math.sin(tilt), y * Math.sin(tilt) + z * Math.cos(tilt)];
        // orbit ring as polyline segments with depth
        const seg = 72;
        for (let k = 0; k < seg; k++) {
          const a1 = (k / seg) * Math.PI * 2, a2 = ((k + 1) / seg) * Math.PI * 2;
          const p1 = proj(...rotate(Math.cos(a1) * r, Math.sin(a1) * r, 0));
          const p2 = proj(...rotate(Math.cos(a2) * r, Math.sin(a2) * r, 0));
          items.push({
            z: (p1.z + p2.z) / 2 - 1000,
            draw: () => {
              ctx.strokeStyle = hexA(atom.color, 0.18 + 0.22 * ((p1.z + r) / (2 * r)));
              ctx.lineWidth = 1.2;
              ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            },
          });
        }
        const speed = 1.1 / (si + 1) ** 0.7;
        for (let e = 0; e < count; e++) {
          const a = t * speed + (e / count) * Math.PI * 2;
          const p = proj(...rotate(Math.cos(a) * r, Math.sin(a) * r, 0));
          items.push({
            z: p.z,
            draw: () => {
              const er = 5.5 * p.p;
              const gl = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, er * 3.2);
              gl.addColorStop(0, "rgba(165,180,252,0.65)");
              gl.addColorStop(1, "rgba(165,180,252,0)");
              ctx.fillStyle = gl;
              ctx.beginPath(); ctx.arc(p.x, p.y, er * 3.2, 0, Math.PI * 2); ctx.fill();
              const g = ctx.createRadialGradient(p.x - er * 0.3, p.y - er * 0.3, 0.5, p.x, p.y, er);
              g.addColorStop(0, "#ffffff"); g.addColorStop(1, "#818cf8");
              ctx.fillStyle = g;
              ctx.beginPath(); ctx.arc(p.x, p.y, er, 0, Math.PI * 2); ctx.fill();
            },
          });
        }
      });

      // nucleus
      const nuc = proj(0, 0, 0);
      items.push({
        z: 0,
        draw: () => {
          const nr = R0 * 0.1;
          const pulse = 1 + Math.sin(t * 2.4) * 0.06;
          const gl = ctx.createRadialGradient(nuc.x, nuc.y, nr * 0.4, nuc.x, nuc.y, nr * 4.2 * pulse);
          gl.addColorStop(0, hexA(atom.color, 0.7));
          gl.addColorStop(1, hexA(atom.color, 0));
          ctx.fillStyle = gl;
          ctx.beginPath(); ctx.arc(nuc.x, nuc.y, nr * 4.2 * pulse, 0, Math.PI * 2); ctx.fill();
          const g = ctx.createRadialGradient(nuc.x - nr * 0.35, nuc.y - nr * 0.4, 1, nuc.x, nuc.y, nr * 1.1);
          g.addColorStop(0, "#ffffff"); g.addColorStop(0.3, hexA(atom.color, 1)); g.addColorStop(1, "#0f172a");
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(nuc.x, nuc.y, nr * pulse, 0, Math.PI * 2); ctx.fill();
        },
      });

      items.sort((a, b) => a.z - b.z).forEach((i) => i.draw());
      raf = requestAnimationFrame(draw);
    };
    draw();

    const down = (e: PointerEvent) => { const s = st.current; s.drag = true; s.lx = e.clientX; s.ly = e.clientY; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      const s = st.current; if (!s.drag) return;
      s.ay += (e.clientX - s.lx) * 0.01; s.ax += (e.clientY - s.ly) * 0.01;
      s.lx = e.clientX; s.ly = e.clientY;
    };
    const up = () => { st.current.drag = false; };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, [atom]);

  return <canvas ref={ref} className={`touch-none cursor-grab active:cursor-grabbing ${className ?? ""}`} />;
};
