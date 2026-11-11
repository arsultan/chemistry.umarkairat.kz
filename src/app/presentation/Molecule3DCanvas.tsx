"use client";

import React, { useEffect, useRef } from "react";

export type MolAtom = { el: "H" | "C" | "O" | "N"; x: number; y: number; z: number };
export type Molecule = { name: string; formula: string; atoms: MolAtom[]; bonds: [number, number][] };

const STYLE: Record<string, { color: string; r: number }> = {
  H: { color: "#f5f5f4", r: 0.55 },
  C: { color: "#57534e", r: 0.8 },
  O: { color: "#e0533d", r: 0.78 },
  N: { color: "#3b6fd4", r: 0.78 },
};

const benzene = (): Molecule => {
  const atoms: MolAtom[] = [];
  const bonds: [number, number][] = [];
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3;
    atoms.push({ el: "C", x: Math.cos(a) * 1.4, y: Math.sin(a) * 1.4, z: 0 });
  }
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3;
    atoms.push({ el: "H", x: Math.cos(a) * 2.5, y: Math.sin(a) * 2.5, z: 0 });
    bonds.push([k, (k + 1) % 6], [k, 6 + k]);
  }
  return { name: "╨С╨╡╨╜╨╖╨╛╨╗", formula: "CтВЖHтВЖ", atoms, bonds };
};

export const MOLECULES: Molecule[] = [
  {
    name: "╨Т╨╛╨┤╨░", formula: "HтВВO",
    atoms: [{ el: "O", x: 0, y: 0, z: 0 }, { el: "H", x: 1.5, y: 1.1, z: 0 }, { el: "H", x: -1.5, y: 1.1, z: 0 }],
    bonds: [[0, 1], [0, 2]],
  },
  {
    name: "╨Ь╨╡╤В╨░╨╜", formula: "CHтВД",
    atoms: [
      { el: "C", x: 0, y: 0, z: 0 },
      { el: "H", x: 1.3, y: 1.3, z: 1.3 }, { el: "H", x: -1.3, y: -1.3, z: 1.3 },
      { el: "H", x: -1.3, y: 1.3, z: -1.3 }, { el: "H", x: 1.3, y: -1.3, z: -1.3 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
  },
  {
    name: "╨Р╨╝╨╝╨╕╨░╨║", formula: "NHтВГ",
    atoms: [
      { el: "N", x: 0, y: 0.5, z: 0 },
      { el: "H", x: 1.6, y: -0.4, z: 0 }, { el: "H", x: -0.8, y: -0.4, z: 1.4 }, { el: "H", x: -0.8, y: -0.4, z: -1.4 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3]],
  },
  {
    name: "╨г╨│╨╗╨╡╨║╨╕╤Б╨╗╤Л╨╣ ╨│╨░╨╖", formula: "COтВВ",
    atoms: [{ el: "C", x: 0, y: 0, z: 0 }, { el: "O", x: 2.2, y: 0, z: 0 }, { el: "O", x: -2.2, y: 0, z: 0 }],
    bonds: [[0, 1], [0, 2]],
  },
  benzene(),
  {
    name: "╨н╤В╨░╨╜╨╛╨╗", formula: "CтВВHтВЕOH",
    atoms: [
      { el: "C", x: -1.3, y: 0, z: 0 }, { el: "C", x: 0.2, y: 0.6, z: 0 }, { el: "O", x: 1.4, y: -0.3, z: 0.3 },
      { el: "H", x: -2.1, y: 0.7, z: 0.3 }, { el: "H", x: -1.4, y: -0.9, z: 0.6 }, { el: "H", x: -1.5, y: -0.3, z: -1 },
      { el: "H", x: 0.3, y: 1.3, z: 0.9 }, { el: "H", x: 0.3, y: 1.2, z: -0.9 }, { el: "H", x: 2.2, y: 0.2, z: 0.2 },
    ],
    bonds: [[0, 1], [1, 2], [0, 3], [0, 4], [0, 5], [1, 6], [1, 7], [2, 8]],
  },
];

/** Dependency-free canvas 3D viewer: auto-rotates, drag to rotate manually. */
export const Molecule3DCanvas: React.FC<{ molecule: Molecule; className?: string; scale?: number }> = ({ molecule, className, scale = 1 }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const state = useRef({ ax: 0.4, ay: 0, drag: false, lx: 0, ly: 0 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let t = 0;

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
      const s = state.current;
      if (!s.drag) s.ay += 0.008;
      t += 0.02;
      const cy = Math.cos(s.ay), sy = Math.sin(s.ay), cx = Math.cos(s.ax), sx = Math.sin(s.ax);
      const unit = (Math.min(w, h) / 7.5) * scale;

      const pts = molecule.atoms.map((a) => {
        const x1 = a.x * cy + a.z * sy;
        const z1 = -a.x * sy + a.z * cy;
        const y2 = a.y * cx - z1 * sx;
        const z2 = a.y * sx + z1 * cx;
        const p = 1 / (1 - z2 * 0.08);
        return { sx: w / 2 + x1 * unit * p, sy: h / 2 - y2 * unit * p, z: z2, p, el: a.el };
      });

      type Item = { z: number; draw: () => void };
      const items: Item[] = [];

      molecule.bonds.forEach(([a, b]) => {
        const A = pts[a], B = pts[b];
        items.push({
          z: (A.z + B.z) / 2 - 0.01,
          draw: () => {
            const g = ctx.createLinearGradient(A.sx, A.sy, B.sx, B.sy);
            g.addColorStop(0, "rgba(168,162,158,0.95)");
            g.addColorStop(1, "rgba(120,113,108,0.95)");
            ctx.strokeStyle = g;
            ctx.lineWidth = unit * 0.2 * ((A.p + B.p) / 2);
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(A.sx, A.sy);
            ctx.lineTo(B.sx, B.sy);
            ctx.stroke();
          },
        });
      });

      pts.forEach((p) => {
        items.push({
          z: p.z,
          draw: () => {
            const st = STYLE[p.el];
            const r = st.r * unit * 0.62 * p.p;
            // glow
            const glow = ctx.createRadialGradient(p.sx, p.sy, r * 0.5, p.sx, p.sy, r * 2.2);
            glow.addColorStop(0, st.color + "55");
            glow.addColorStop(1, st.color + "00");
            ctx.fillStyle = glow;
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 2.2, 0, Math.PI * 2); ctx.fill();
            // sphere
            const g = ctx.createRadialGradient(p.sx - r * 0.35, p.sy - r * 0.4, r * 0.1, p.sx, p.sy, r);
            g.addColorStop(0, "#ffffff");
            g.addColorStop(0.25, st.color);
            g.addColorStop(1, "#18181b");
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill();
          },
        });
      });

      items.sort((a, b) => a.z - b.z).forEach((i) => i.draw());
      raf = requestAnimationFrame(draw);
    };
    draw();

    const down = (e: PointerEvent) => { state.current.drag = true; state.current.lx = e.clientX; state.current.ly = e.clientY; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      const s = state.current;
      if (!s.drag) return;
      s.ay += (e.clientX - s.lx) * 0.01;
      s.ax += (e.clientY - s.ly) * 0.01;
      s.lx = e.clientX; s.ly = e.clientY;
    };
    const up = () => { state.current.drag = false; };
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
