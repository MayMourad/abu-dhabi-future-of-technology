import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';

export function supportsWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export function isLowPower(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4;
}

class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(err: unknown) {
    console.warn('3D scene failed, showing fallback', err);
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

interface Props {
  children: ReactNode;
  fallback: ReactNode;
  label: string;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
}

/**
 * A WebGL canvas that:
 *  - only renders frames while it is on screen (saves battery)
 *  - respects prefers-reduced-motion (renders on demand only)
 *  - falls back to a static illustration if WebGL is missing or throws
 */
export function SceneCanvas({ children, fallback, label, className, camera }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [ok] = useState(supportsWebGL);
  const [low] = useState(isLowPower);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '80px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!ok) return <div className={className}>{fallback}</div>;

  return (
    <div ref={ref} className={className} role="img" aria-label={label}>
      <Boundary fallback={fallback}>
        <Canvas
          dpr={[1, low ? 1.25 : 2]}
          frameloop={visible && !reduced ? 'always' : 'demand'}
          camera={{ position: camera?.position ?? [0, 3, 11], fov: camera?.fov ?? 35 }}
          gl={{ alpha: true, antialias: !low, powerPreference: 'default' }}
          style={{ touchAction: 'pan-y' }}
        >
          {children}
        </Canvas>
      </Boundary>
    </div>
  );
}
