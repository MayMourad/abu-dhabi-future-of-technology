import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { SceneKind } from '../data/centers';
import { sceneInfo } from './sceneText';
import { useI18n } from '../i18n/I18nProvider';

export interface MiniProps {
  kind: SceneKind;
  accent: string;
  accent2: string;
  onSelect: (key: string | null) => void;
}

const IVORY = '#FBF8F2';
const SAND = '#E8D9BE';
const GOLD = '#C5A46D';
const EMERALD = '#087F5B';
const TEAL = '#67B5AD';
const RED = '#D64747';

/**
 * Text label drawn into a canvas texture on a sprite. Uses the browser's text shaping, so Arabic
 * renders correctly, and avoids DOM overlays inside the WebGL canvas.
 */
function Label3D({ text, position, height = 0.34 }: { text: string; position: [number, number, number]; height?: number }) {
  const [fontsReady, setFontsReady] = useState(false);
  useEffect(() => {
    let live = true;
    document.fonts?.ready.then(() => live && setFontsReady(true));
    return () => {
      live = false;
    };
  }, []);
  const { tex, aspect } = useMemo(() => {
    const font = '800 40px "IBM Plex Sans Arabic","Plus Jakarta Sans",system-ui,sans-serif';
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d')!;
    ctx.font = font;
    const w = Math.ceil(ctx.measureText(text).width) + 48;
    const h = 72;
    c.width = w;
    c.height = h;
    ctx.font = font;
    ctx.fillStyle = 'rgba(255,255,255,0.96)';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(2, 2, w - 4, h - 4, 34);
    else ctx.rect(2, 2, w - 4, h - 4);
    ctx.fill();
    ctx.strokeStyle = 'rgba(8,127,91,0.35)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#075C48';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 2);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return { tex: t, aspect: w / h };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, fontsReady]);
  useEffect(() => () => tex.dispose(), [tex]);
  return (
    <sprite position={position} scale={[height * aspect, height, 1]} renderOrder={20}>
      <spriteMaterial map={tex} transparent depthTest={false} />
    </sprite>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <hemisphereLight args={['#ffffff', SAND, 0.8]} />
      <directionalLight position={[4, 6, 4]} intensity={2.2} color="#fff2d9" />
    </>
  );
}

function Controls({ auto = true }: { auto?: boolean }) {
  return <OrbitControls enableZoom={false} enablePan={false} autoRotate={auto} autoRotateSpeed={1.1} minPolarAngle={0.8} maxPolarAngle={2.1} />;
}

/* ---------------------------------------------------------- neural net */
function Neural({ accent, accent2, onSelect }: MiniProps) {
  const layers = [4, 6, 6, 3];
  const nodes = useMemo(() => {
    const out: { id: number; layer: number; p: THREE.Vector3 }[] = [];
    let id = 0;
    layers.forEach((n, li) => {
      for (let i = 0; i < n; i++) {
        const y = (i - (n - 1) / 2) * 0.6;
        const z = Math.sin(i * 1.7 + li) * 0.45;
        out.push({ id: id++, layer: li, p: new THREE.Vector3((li - 1.5) * 1.35, y, z) });
      }
    });
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const edges = useMemo(() => {
    const pts: number[] = [];
    for (const a of nodes) {
      for (const b of nodes) {
        if (b.layer === a.layer + 1) pts.push(a.p.x, a.p.y, a.p.z, b.p.x, b.p.y, b.p.z);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, [nodes]);

  const pulse = useRef(-10);
  const mats = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const clock = useRef(0);

  useFrame((s) => {
    clock.current = s.clock.elapsedTime;
    const t = clock.current - pulse.current;
    nodes.forEach((n, i) => {
      const m = mats.current[i];
      if (!m) return;
      const base = 0.12 + 0.05 * Math.sin(clock.current * 1.5 + i);
      const wave = Math.exp(-Math.pow((t - n.layer * 0.45) * 3, 2)) * 1.6;
      m.emissiveIntensity = base + wave;
    });
  });

  return (
    <>
      <Lights />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={accent2} transparent opacity={0.45} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh
          key={n.id}
          position={n.p}
          onClick={(e) => {
            e.stopPropagation();
            pulse.current = clock.current;
            onSelect('neural');
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = '')}
        >
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial ref={(m) => { mats.current[i] = m; }} color={n.layer === 3 ? GOLD : accent} emissive={n.layer === 3 ? GOLD : accent2} emissiveIntensity={0.15} />
        </mesh>
      ))}
      <Controls />
    </>
  );
}

/* ------------------------------------------------------------ lab */
function Lab({ accent, accent2 }: MiniProps) {
  const e1 = useRef<THREE.Mesh>(null);
  const e2 = useRef<THREE.Mesh>(null);
  const e3 = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime * 1.4;
    e1.current?.position.set(Math.cos(t) * 0.55, Math.sin(t) * 0.55, 0);
    e2.current?.position.set(Math.cos(t + 2.1) * 0.55, 0, Math.sin(t + 2.1) * 0.55);
    e3.current?.position.set(0, Math.sin(t + 4.2) * 0.55, Math.cos(t + 4.2) * 0.55);
  });
  const hex = useMemo(() => Array.from({ length: 6 }, (_, i) => [Math.cos((i / 6) * Math.PI * 2) * 0.5, Math.sin((i / 6) * Math.PI * 2) * 0.5] as const), []);
  return (
    <>
      <Lights />
      <group>
        {/* atom */}
        <Float speed={1.5} floatIntensity={0.6}>
          <group position={[-1.5, 0.5, 0]}>
            <mesh>
              <sphereGeometry args={[0.18, 24, 24]} />
              <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.25} />
            </mesh>
            {[0, 1, 2].map((i) => (
              <mesh key={i} rotation={[i === 0 ? 0 : Math.PI / 2, i === 2 ? Math.PI / 2 : 0, 0]}>
                <torusGeometry args={[0.55, 0.01, 8, 64]} />
                <meshBasicMaterial color={accent2} />
              </mesh>
            ))}
            <mesh ref={e1}><sphereGeometry args={[0.07, 16, 16]} /><meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} /></mesh>
            <mesh ref={e2}><sphereGeometry args={[0.07, 16, 16]} /><meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} /></mesh>
            <mesh ref={e3}><sphereGeometry args={[0.07, 16, 16]} /><meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} /></mesh>
          </group>
        </Float>
        {/* flask */}
        <Float speed={1.2} floatIntensity={0.8} rotationIntensity={0.4}>
          <group position={[0.2, -0.1, 0]}>
            <mesh position={[0, 0.9, 0]}>
              <cylinderGeometry args={[0.13, 0.13, 0.7, 24, 1, true]} />
              <meshStandardMaterial color={TEAL} transparent opacity={0.45} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.13, 0.62, 0.9, 32, 1, true]} />
              <meshStandardMaterial color={TEAL} transparent opacity={0.45} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, -0.15, 0]}>
              <cylinderGeometry args={[0.38, 0.6, 0.35, 32]} />
              <meshStandardMaterial color={accent} transparent opacity={0.85} />
            </mesh>
            <mesh position={[0, 1.3, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.08, 24]} />
              <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
            </mesh>
          </group>
        </Float>
        {/* molecule ring */}
        <Float speed={1.8} floatIntensity={0.7} rotationIntensity={0.8}>
          <group position={[1.9, 0.6, 0]}>
            {hex.map(([x, y], i) => (
              <mesh key={i} position={[x, y, 0]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color={i % 2 ? accent2 : GOLD} />
              </mesh>
            ))}
            <mesh>
              <torusGeometry args={[0.5, 0.025, 8, 6]} />
              <meshStandardMaterial color={IVORY} />
            </mesh>
          </group>
        </Float>
        {/* chip */}
        <Float speed={2} floatIntensity={0.5}>
          <mesh position={[0.8, -1.2, 0.3]} rotation={[0.9, 0.4, 0]}>
            <boxGeometry args={[0.8, 0.1, 0.8]} />
            <meshStandardMaterial color={IVORY} />
          </mesh>
          <mesh position={[0.8, -1.2, 0.3]} rotation={[0.9, 0.4, 0]}>
            <boxGeometry args={[0.45, 0.14, 0.45]} />
            <meshStandardMaterial color={accent} emissive={accent2} emissiveIntensity={0.35} />
          </mesh>
        </Float>
      </group>
      <Controls />
    </>
  );
}

/* ------------------------------------------------------- startup network */
function Network({ accent, accent2, onSelect }: MiniProps) {
  const { l } = useI18n();
  const [sel, setSel] = useState<string>('idea');
  const nodes: { id: string; p: [number, number, number]; r: number }[] = [
    { id: 'idea', p: [-2.6, 0, 0], r: 0.3 },
    { id: 'people', p: [-1, 1.1, 0.3], r: 0.26 },
    { id: 'tech', p: [-1, -1.1, -0.3], r: 0.26 },
    { id: 'product', p: [0.8, 0, 0], r: 0.3 },
    { id: 'business', p: [2.5, 0.2, 0], r: 0.38 },
  ];
  const links: [string, string][] = [
    ['idea', 'people'], ['idea', 'tech'], ['people', 'product'], ['tech', 'product'], ['product', 'business'],
  ];
  const pos = (id: string) => nodes.find((n) => n.id === id)!.p;
  return (
    <>
      <Lights />
      {links.map(([a, b]) => (
        <Line key={a + b} points={[pos(a), pos(b)]} color={accent2} lineWidth={2} />
      ))}
      {nodes.map((n, i) => (
        <Float key={n.id} speed={1.4 + i * 0.2} floatIntensity={0.5} rotationIntensity={0}>
          <mesh
            position={n.p}
            scale={sel === n.id ? 1.3 : 1}
            onClick={(e) => {
              e.stopPropagation();
              setSel(n.id);
              onSelect(n.id);
            }}
            onPointerOver={() => (document.body.style.cursor = 'pointer')}
            onPointerOut={() => (document.body.style.cursor = '')}
          >
            <sphereGeometry args={[n.r, 32, 32]} />
            <meshStandardMaterial color={n.id === 'business' ? GOLD : sel === n.id ? RED : accent} emissive={sel === n.id ? RED : accent} emissiveIntensity={sel === n.id ? 0.5 : 0.1} />
            <Label3D text={l(sceneInfo[n.id].label)} position={[0, -n.r - 0.3, 0]} />
          </mesh>
        </Float>
      ))}
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.9} minPolarAngle={1.2} minAzimuthAngle={-0.6} maxAzimuthAngle={0.6} />
    </>
  );
}

/* ------------------------------------------------------------- city */
function City({ accent, accent2 }: MiniProps) {
  const pod = useRef<THREE.Group>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime * 0.6;
    pod.current?.position.set(Math.cos(t) * 2.3, 0.22, Math.sin(t) * 2.3);
    if (pod.current) pod.current.rotation.y = -t;
  });
  const blocks = useMemo(
    () => [
      [-1.2, -1.2, 0.8, 1.6], [0.2, -1.4, 0.7, 1.1], [1.3, -0.8, 0.75, 2.0], [-1.4, 0.2, 0.7, 1.0],
      [0, 0, 0.8, 2.4], [1.3, 0.7, 0.7, 1.3], [-0.5, 1.3, 0.7, 1.2], [0.8, 1.5, 0.6, 0.8],
    ],
    [],
  );
  const trees = useMemo(() => [[-2.4, 0.4], [-2.2, -0.8], [2.5, -0.1], [2.3, 1.2], [-1.8, 1.8], [0.3, -2.4], [1.8, -2], [-0.6, 2.5]], []);
  return (
    <>
      <Lights />
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[3.3, 3.4, 0.2, 48]} />
        <meshStandardMaterial color={SAND} />
      </mesh>
      <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.1, 8, 64]} />
        <meshStandardMaterial color={IVORY} />
      </mesh>
      {blocks.map(([x, z, w, h], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, h / 2, 0]}>
            <boxGeometry args={[w, h, w]} />
            <meshStandardMaterial color={i % 2 ? IVORY : TEAL} roughness={0.3} metalness={0.2} transparent opacity={0.95} />
          </mesh>
          {i % 3 === 0 ? (
            <mesh position={[0, h + 0.03, 0]} rotation={[-0.45, 0, 0]}>
              <boxGeometry args={[w * 0.85, 0.05, w * 0.85]} />
              <meshStandardMaterial color={accent} metalness={0.6} roughness={0.25} />
            </mesh>
          ) : (
            <mesh position={[0, h + 0.04, 0]}>
              <boxGeometry args={[w * 0.9, 0.08, w * 0.9]} />
              <meshStandardMaterial color={accent2} />
            </mesh>
          )}
        </group>
      ))}
      {trees.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.14, 0]}>
            <cylinderGeometry args={[0.03, 0.04, 0.28, 8]} />
            <meshStandardMaterial color={GOLD} />
          </mesh>
          <mesh position={[0, 0.42, 0]}>
            <icosahedronGeometry args={[0.2, 1]} />
            <meshStandardMaterial color={EMERALD} flatShading />
          </mesh>
        </group>
      ))}
      <group ref={pod}>
        <mesh>
          <boxGeometry args={[0.5, 0.2, 0.22]} />
          <meshStandardMaterial color={accent2} />
        </mesh>
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.52, 0.04, 0.24]} />
          <meshStandardMaterial color={GOLD} />
        </mesh>
      </group>
      <Controls />
    </>
  );
}

/* ----------------------------------------------------------- robot arm */
const L1 = 1.4;
const L2 = 1.25;
function ik(x: number, y: number) {
  const d2 = x * x + y * y;
  const c = THREE.MathUtils.clamp((d2 - L1 * L1 - L2 * L2) / (2 * L1 * L2), -1, 1);
  const a2 = -Math.acos(c);
  const a1 = Math.atan2(y, x) - Math.atan2(L2 * Math.sin(a2), L1 + L2 * Math.cos(a2));
  return [a1, a2] as const;
}
// keyframes: [time, base angle, x, y (relative to shoulder), grip 0..1, cube carried]
const KEYS: [number, number, number, number, number][] = [
  [0, 0, 1.8, -0.2, 0],
  [1, 0, 1.9, -0.85, 0],
  [1.6, 0, 1.9, -0.85, 1],
  [2.6, 0, 1.6, 0.3, 1],
  [4.2, Math.PI, 1.6, 0.3, 1],
  [5, Math.PI, 1.9, -0.85, 1],
  [5.6, Math.PI, 1.9, -0.85, 0],
  [6.6, Math.PI, 1.8, -0.2, 0],
  [8, 0, 1.8, -0.2, 0],
];

function Robot({ accent, accent2, onSelect }: MiniProps) {
  const base = useRef<THREE.Group>(null);
  const s1 = useRef<THREE.Group>(null);
  const s2 = useRef<THREE.Group>(null);
  const claw = useRef<THREE.Group>(null);
  const cube = useRef<THREE.Mesh>(null);
  const tip = useRef<THREE.Object3D>(null);
  const active = useRef(true);
  const t0 = useRef(0);
  const wp = useMemo(() => new THREE.Vector3(), []);
  const SH = 1.0;

  useFrame((st) => {
    const t = active.current ? (st.clock.elapsedTime - t0.current) % 8 : 0;
    let i = 0;
    while (i < KEYS.length - 2 && t > KEYS[i + 1][0]) i++;
    const a = KEYS[i];
    const b = KEYS[i + 1];
    const k = THREE.MathUtils.smoothstep(t, a[0], b[0]);
    const lerp = (u: number, v: number) => u + (v - u) * k;
    const ba = lerp(a[1], b[1]);
    const [q1, q2] = ik(lerp(a[2], b[2]), lerp(a[3], b[3]));
    if (base.current) base.current.rotation.y = ba;
    if (s1.current) s1.current.rotation.z = q1;
    if (s2.current) s2.current.rotation.z = q2;
    const grip = lerp(a[4], b[4]);
    if (claw.current) claw.current.scale.y = 1 - grip * 0.5;
    if (cube.current) {
      if (t >= 1.6 && t <= 5.6 && tip.current) {
        // carried: follow the gripper tip
        tip.current.getWorldPosition(wp);
        cube.current.parent?.worldToLocal(wp);
        cube.current.position.copy(wp);
      } else {
        cube.current.position.set(t > 5.6 ? -1.9 : 1.9, 0.18, 0);
      }
    }
  });

  return (
    <>
      <Lights />
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[5.6, 0.1, 2.4]} />
        <meshStandardMaterial color={SAND} />
      </mesh>
      <mesh position={[0, 0.0, 0]}>
        <cylinderGeometry args={[0.55, 0.65, 0.2, 32]} />
        <meshStandardMaterial color={accent} />
      </mesh>
      <group ref={base} position={[0, 0.1, 0]}>
        <mesh position={[0, SH / 2, 0]}>
          <cylinderGeometry args={[0.25, 0.3, SH, 24]} />
          <meshStandardMaterial color={IVORY} />
        </mesh>
        <group position={[0, SH, 0]}>
          <group ref={s1}>
            <mesh position={[L1 / 2, 0, 0]}>
              <boxGeometry args={[L1, 0.3, 0.3]} />
              <meshStandardMaterial color={accent} metalness={0.3} roughness={0.35} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.24, 24, 24]} />
              <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
            </mesh>
            <group position={[L1, 0, 0]}>
              <group ref={s2}>
                <mesh position={[L2 / 2, 0, 0]}>
                  <boxGeometry args={[L2, 0.24, 0.24]} />
                  <meshStandardMaterial color={accent2} metalness={0.3} roughness={0.35} />
                </mesh>
                <mesh>
                  <sphereGeometry args={[0.2, 24, 24]} />
                  <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
                </mesh>
                <group position={[L2, 0, 0]}>
                  <group ref={claw}>
                    <object3D ref={tip} position={[0.22, 0, 0]} />
                    <mesh position={[0.1, 0.17, 0]}><boxGeometry args={[0.3, 0.06, 0.2]} /><meshStandardMaterial color={IVORY} /></mesh>
                    <mesh position={[0.1, -0.17, 0]}><boxGeometry args={[0.3, 0.06, 0.2]} /><meshStandardMaterial color={IVORY} /></mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh ref={cube} position={[1.9, 0.18, 0]}>
        <boxGeometry args={[0.28, 0.28, 0.28]} />
        <meshStandardMaterial color={RED} />
      </mesh>
      {/* invisible click target */}
      <mesh
        position={[0, 1.2, 0]}
        onClick={(e) => {
          e.stopPropagation();
          active.current = true;
          onSelect('arm');
        }}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = '')}
      >
        <boxGeometry args={[5, 2.6, 2]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0.9} maxPolarAngle={1.6} />
    </>
  );
}

/* -------------------------------------------------------------- orbit */
function Orbit({ accent2, onSelect }: MiniProps) {
  const { l } = useI18n();
  const [sel, setSel] = useState<string | null>(null);
  const sat = useRef<THREE.Group>(null);
  const earth = useRef<THREE.Mesh>(null);

  const geo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(1.5, 4).toNonIndexed();
    const pos = g.getAttribute('position');
    const colors = new Float32Array(pos.count * 3);
    const land = new THREE.Color(EMERALD);
    const sand = new THREE.Color(SAND);
    const sea = new THREE.Color(TEAL);
    const tmp = new THREE.Color();
    for (let i = 0; i < pos.count; i += 3) {
      const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
      const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
      const cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
      const n = Math.sin(cx * 3.1 + 1) + Math.sin(cy * 4.3 + 2) + Math.sin(cz * 3.7) + Math.sin((cx + cz) * 5);
      if (n > 1.3) tmp.copy(n > 2.2 ? sand : land);
      else tmp.copy(sea);
      for (let k = 0; k < 3; k++) {
        colors[(i + k) * 3] = tmp.r;
        colors[(i + k) * 3 + 1] = tmp.g;
        colors[(i + k) * 3 + 2] = tmp.b;
      }
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame((s) => {
    const t = s.clock.elapsedTime * 0.5;
    sat.current?.position.set(Math.cos(t) * 2.7, Math.sin(t) * 0.9, Math.sin(t) * 2.7);
    if (earth.current) earth.current.rotation.y = s.clock.elapsedTime * 0.08;
  });

  const markers: { id: string; dir: [number, number, number] }[] = [
    { id: 'sat_comm', dir: [0.75, 0.5, 0.45] },
    { id: 'sat_obs', dir: [-0.55, 0.65, 0.5] },
    { id: 'sat_nav', dir: [0.1, -0.5, 0.86] },
  ];

  return (
    <>
      <Lights />
      <mesh ref={earth} geometry={geo}>
        <meshStandardMaterial vertexColors flatShading roughness={0.8} />
        {markers.map((m) => {
          const v = new THREE.Vector3(...m.dir).normalize().multiplyScalar(1.58);
          const on = sel === m.id;
          return (
            <mesh
              key={m.id}
              position={v}
              scale={on ? 1.6 : 1}
              onClick={(e) => {
                e.stopPropagation();
                setSel(m.id);
                onSelect(m.id);
              }}
              onPointerOver={() => (document.body.style.cursor = 'pointer')}
              onPointerOut={() => (document.body.style.cursor = '')}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color={on ? RED : GOLD} emissive={on ? RED : GOLD} emissiveIntensity={0.9} />
              <Label3D text={l(sceneInfo[m.id].label)} position={[0, 0.3, 0]} />
            </mesh>
          );
        })}
      </mesh>
      <mesh>
        <sphereGeometry args={[1.62, 32, 32]} />
        <meshBasicMaterial color={accent2} transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2 - 0.33, 0, 0]}>
        <torusGeometry args={[2.7, 0.01, 8, 140]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.8} />
      </mesh>
      <group ref={sat}>
        <mesh>
          <boxGeometry args={[0.22, 0.18, 0.18]} />
          <meshStandardMaterial color={GOLD} metalness={0.7} roughness={0.25} />
        </mesh>
        {[-1, 1].map((d) => (
          <mesh key={d} position={[d * 0.34, 0, 0]}>
            <boxGeometry args={[0.4, 0.02, 0.2]} />
            <meshStandardMaterial color={EMERALD} />
          </mesh>
        ))}
      </group>
      <Controls auto={false} />
    </>
  );
}

/* -------------------------------------------------------------- globe */
function toXYZ(lat: number, lon: number, r: number) {
  const phi = THREE.MathUtils.degToRad(lat);
  const th = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(r * Math.cos(phi) * Math.sin(th), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(th));
}

function Globe({ accent, accent2, onSelect }: MiniProps) {
  const { l } = useI18n();
  const home = toXYZ(24.45, 54.38, 1.5); // Abu Dhabi, real coordinates
  const others: [number, number][] = [[51.5, -0.1], [40.7, -74], [-33.9, 151.2], [35.7, 139.7], [-23.5, -46.6], [1.3, 103.8], [-1.3, 36.8]];
  const arcs = useMemo(
    () =>
      others.map(([la, lo]) => {
        const end = toXYZ(la, lo, 1.5);
        const mid = home.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.3);
        return new THREE.QuadraticBezierCurve3(home, mid, end).getPoints(36);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const dots = useMemo(() => others.map(([la, lo]) => toXYZ(la, lo, 1.5)), []); // eslint-disable-line react-hooks/exhaustive-deps
  const lines = useMemo(() => {
    const out: THREE.Vector3[][] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lon = 0; lon <= 360; lon += 10) pts.push(toXYZ(lat, lon, 1.5));
      out.push(pts);
    }
    for (let lon = 0; lon < 360; lon += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 10) pts.push(toXYZ(lat, lon, 1.5));
      out.push(pts);
    }
    return out;
  }, []);
  const mark = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    mark.current?.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 3) * 0.2);
  });
  return (
    <>
      <Lights />
      <mesh>
        <sphereGeometry args={[1.48, 48, 48]} />
        <meshStandardMaterial color={IVORY} roughness={0.9} />
      </mesh>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color={accent2} lineWidth={0.7} transparent opacity={0.5} />
      ))}
      {arcs.map((pts, i) => (
        <Line key={i} points={pts} color={accent} lineWidth={1.6} />
      ))}
      {dots.map((d, i) => (
        <mesh key={i} position={d}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.6} />
        </mesh>
      ))}
      <mesh
        ref={mark}
        position={home}
        onClick={(e) => {
          e.stopPropagation();
          onSelect('abudhabi');
        }}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = '')}
      >
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={RED} emissive={RED} emissiveIntensity={0.9} />
        <Label3D text={l(sceneInfo.abudhabi.label)} position={[0, 0.3, 0]} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </>
  );
}

export default function MiniScene(props: MiniProps) {
  switch (props.kind) {
    case 'neural':
      return <Neural {...props} />;
    case 'lab':
      return <Lab {...props} />;
    case 'network':
      return <Network {...props} />;
    case 'city':
      return <City {...props} />;
    case 'robot':
      return <Robot {...props} />;
    case 'orbit':
      return <Orbit {...props} />;
    case 'globe':
      return <Globe {...props} />;
  }
}
