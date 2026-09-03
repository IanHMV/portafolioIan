"use client";

/*
 * GUARDADO PARA REUSO — ahora mismo no se monta en ningún sitio.
 *
 * Era el fondo animado del hero (malla de olas en canvas 2D). Se retiró al
 * pasar el hero a fondo plano oscuro, pero se conserva entero: para volver
 * a usarlo, importarlo y envolverlo en un div con `position: absolute` e
 * `inset: 0` — la clase `.backdrop` de HeroSection.module.css ya hace eso y
 * añade la viñeta.
 */

import { useEffect, useRef } from "react";

interface WireTerrainProps {
  className?: string;
}

const COLS = 110;
const ROWS = 38;
const NEAR = 1;
const FAR = 9;
const FOCAL = 1.1;
const WORLD_HALF_WIDTH = 9;
const CAM_HEIGHT = 1.8;
const DRIFT_SPEED = 0.15;

/* Ocean-like surface from layered sine waves: one long swell, one medium
   ripple and a fine detail wave. Time inside each phase makes the crests
   rise, fall and roll like slow sea waves. */
const surfaceHeight = (x: number, z: number, t: number) =>
  Math.sin(x * 0.45 + z * 0.28 + t * 0.3) * Math.cos(z * 0.35 - t * 0.24) * 1.05 +
  Math.sin(x * 1.35 + z * 0.6 - t * 0.42) * Math.cos(z * 0.9 + t * 0.18) * 0.4 +
  Math.sin(x * 3.1 + z * 1.7 + t * 0.6) * 0.1;

const lineAlpha = (row: number) =>
  0.07 + 0.45 * Math.pow(1 - row / ROWS, 1.5);

const WireTerrain = ({ className = "" }: WireTerrainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let lastTime = 0;

    const draw = (timeMs: number) => {
      lastTime = timeMs;
      const t = timeMs * 0.001;
      const drift = t * DRIFT_SPEED;
      const horizon = height * 0.4;

      ctx.clearRect(0, 0, width, height);

      const pts: { x: number; y: number }[][] = [];
      for (let i = 0; i <= ROWS; i++) {
        const wz = NEAR + ((FAR - NEAR) * i) / ROWS;
        const scale = FOCAL / wz;
        const row: { x: number; y: number }[] = [];
        for (let j = 0; j <= COLS; j++) {
          const wx = ((j / COLS) * 2 - 1) * WORLD_HALF_WIDTH;
          const wy = surfaceHeight(wx, wz + drift, t);
          row.push({
            x: width / 2 + wx * scale * (width / 2),
            y: horizon + (CAM_HEIGHT - wy) * scale * (height * 0.4),
          });
        }
        pts.push(row);
      }

      ctx.lineWidth = 1;

      for (let i = ROWS; i >= 0; i--) {
        ctx.beginPath();
        for (let j = 0; j <= COLS; j++) {
          const p = pts[i][j];
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha(i)})`;
        ctx.stroke();
      }

      for (let i = ROWS - 1; i >= 0; i--) {
        ctx.beginPath();
        for (let j = 0; j <= COLS; j++) {
          ctx.moveTo(pts[i][j].x, pts[i][j].y);
          ctx.lineTo(pts[i + 1][j].x, pts[i + 1][j].y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha(i + 0.5)})`;
        ctx.stroke();
      }
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(lastTime);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion) {
      const loop = (timeMs: number) => {
        draw(timeMs);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`block ${className}`} />;
};

export default WireTerrain;
