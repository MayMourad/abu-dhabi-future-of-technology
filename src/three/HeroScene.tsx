import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

const C = {
  ivory: '#FBF8F2',
  sand: '#E8D9BE',
  emerald: '#087F5B',
  deep: '#075C48',
  gold: '#C5A46D',
  teal: '#67B5AD',
  red: '#D64747',
};

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const glass = { roughness: 0.22, metalness: 0.25, transparent: true, opacity: 0.94 } as const;

/** Tower inspired by the idea of a leaning, stacked silhouette. */
function LeaningTower({ position }: { position: [number, number, number] }) {
  const floors = 9;
  return (
    <group position={position}>
      {Array.from({ length: floors }, (_, i) => (
        <mesh key={i} position={[i * 0.075, 0.2 + i * 0.36, 0]} rotation={[0, i * 0.12, 0]} castShadow>
          <boxGeometry args={[0.95 - i * 0.025, 0.34, 0.95 - i * 0.025]} />
          <meshStandardMaterial color={i % 2 ? C.ivory : C.teal} {...glass} />
        </mesh>
      ))}
    </group>
  );
}

function BladeTowers({ position }: { position: [number, number, number] }) {
  const blades = [
    { x: -0.55, h: 3.4, r: 0.05 },
    { x: 0, h: 3.9, r: 0 },
    { x: 0.55, h: 3.1, r: -0.05 },
  ];
  return (
    <group position={position}>
      {blades.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, 0]} rotation={[0, 0, b.r]} castShadow>
          <boxGeometry args={[0.42, b.h, 0.7]} />
          <meshStandardMaterial color={i === 1 ? C.emerald : C.ivory} {...glass} />
        </mesh>
      ))}
      <mesh position={[0, 1.7, 0]}>
        <boxGeometry args={[1.8, 0.1, 0.5]} />
        <meshStandardMaterial color={C.gold} metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Spire() {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ring.current) ring.current.rotation.z = s.clock.elapsedTime * 0.5;
  });
  return (
    <group position={[0, 0.18, 0]}>
      <mesh position={[0, 2.5, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.55, 5, 6]} />
        <meshStandardMaterial color={C.emerald} {...glass} />
      </mesh>
      <mesh position={[0, 5.1, 0]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color={C.teal} emissive={C.teal} emissiveIntensity={1.2} />
      </mesh>
      <mesh ref={ring} position={[0, 3.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.03, 12, 64]} />
        <meshStandardMaterial color={C.gold} metalness={0.7} roughness={0.25} emissive={C.gold} emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0, 2.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.025, 12, 64]} />
        <meshStandardMaterial color={C.gold} metalness={0.7} roughness={0.25} />
      </mesh>
    </group>
  );
}

function Dome({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.9, 0.95, 0.7, 32]} />
        <meshStandardMaterial color={C.ivory} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.9, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={C.teal} {...glass} />
      </mesh>
    </group>
  );
}

function SolarRow({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[i * 0.62, 0.3, 0]} rotation={[-0.7, 0, 0]}>
          <boxGeometry args={[0.52, 0.04, 0.8]} />
          <meshStandardMaterial color={C.teal} metalness={0.5} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Trees() {
  const spots = useMemo(() => {
    const r = rng(7);
    return Array.from({ length: 16 }, () => {
      const a = r() * Math.PI * 2;
      const rad = 3 + r() * 1.2;
      return { x: Math.cos(a) * rad, z: Math.sin(a) * rad, s: 0.5 + r() * 0.5 };
    });
  }, []);
  return (
    <>
      {spots.map((p, i) => (
        <group key={i} position={[p.x, 0.18, p.z]} scale={p.s}>
          <mesh position={[0, 0.18, 0]}>
            <cylinderGeometry args={[0.04, 0.05, 0.36, 8]} />
            <meshStandardMaterial color={C.gold} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <icosahedronGeometry args={[0.24, 1]} />
            <meshStandardMaterial color={i % 3 ? C.emerald : C.teal} flatShading />
          </mesh>
        </group>
      ))}
    </>
  );
}

function Skyline() {
  const small = useMemo(() => {
    const r = rng(21);
    return Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2 + 0.3;
      const rad = 2.1 + r() * 0.8;
      return { x: Math.cos(a) * rad, z: Math.sin(a) * rad, h: 0.8 + r() * 1.5, w: 0.4 + r() * 0.3, c: i % 3 };
    });
  }, []);
  return (
    <group>
      <Spire />
      <LeaningTower position={[-1.9, 0.18, 0.6]} />
      <BladeTowers position={[1.8, 0.18, -0.4]} />
      <Dome position={[0.5, 0.18, 2.3]} />
      <SolarRow position={[-3.4, 0.18, 2.3]} />
      {small
        .filter((b) => Math.hypot(b.x + 1.9, b.z - 0.6) > 1.2 && Math.hypot(b.x - 1.8, b.z + 0.4) > 1.5 && Math.hypot(b.x - 0.5, b.z - 2.3) > 1.4)
        .map((b, i) => (
          <mesh key={i} position={[b.x, 0.18 + b.h / 2, b.z]} castShadow>
            <boxGeometry args={[b.w, b.h, b.w]} />
            <meshStandardMaterial color={b.c === 0 ? C.ivory : b.c === 1 ? C.sand : C.teal} {...glass} />
          </mesh>
        ))}
      <Trees />
    </group>
  );
}

function Platform() {
  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <cylinderGeometry args={[4.7, 4.9, 0.36, 72]} />
        <meshStandardMaterial color={C.sand} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.19, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.55, 0.035, 12, 120]} />
        <meshStandardMaterial color={C.emerald} emissive={C.emerald} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.19, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.7, 0.015, 8, 120]} />
        <meshStandardMaterial color={C.gold} />
      </mesh>
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[4.2, 3.2, 0.3, 72]} />
        <meshStandardMaterial color={C.ivory} roughness={0.7} />
      </mesh>
    </group>
  );
}

function Chip() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.rotation.y = s.clock.elapsedTime * 0.45;
    g.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.6) * 0.15;
  });
  const pads = useMemo(() => {
    const out: [number, number, number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const o = -0.5 + i * 0.2;
      out.push([o, 0, 0.7, 0], [o, 0, -0.7, 0], [0.7, 0, o, 1], [-0.7, 0, o, 1]);
    }
    return out;
  }, []);
  return (
    <group ref={g}>
      <mesh>
        <boxGeometry args={[1.25, 0.16, 1.25]} />
        <meshStandardMaterial color={C.ivory} roughness={0.35} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.095, 0]}>
        <boxGeometry args={[0.8, 0.04, 0.8]} />
        <meshStandardMaterial color={C.emerald} emissive={C.teal} emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, 0.125, 0]}>
        <boxGeometry args={[0.3, 0.03, 0.3]} />
        <meshStandardMaterial color={C.gold} metalness={0.7} roughness={0.2} />
      </mesh>
      {pads.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={r ? [0.14, 0.05, 0.07] : [0.07, 0.05, 0.14]} />
          <meshStandardMaterial color={C.gold} metalness={0.8} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function Satellite() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    const t = s.clock.elapsedTime * 0.35;
    g.current.position.set(Math.cos(t) * 5.2, 3.4 + Math.sin(t * 2) * 0.1, Math.sin(t) * 5.2);
    g.current.rotation.y = -t;
  });
  return (
    <group ref={g}>
      <mesh>
        <boxGeometry args={[0.42, 0.34, 0.34]} />
        <meshStandardMaterial color={C.gold} metalness={0.7} roughness={0.25} />
      </mesh>
      {[-1, 1].map((d) => (
        <mesh key={d} position={[d * 0.62, 0, 0]}>
          <boxGeometry args={[0.7, 0.03, 0.34]} />
          <meshStandardMaterial color={C.emerald} metalness={0.5} roughness={0.25} />
        </mesh>
      ))}
      <mesh position={[0, 0.28, 0]} rotation={[0.4, 0, 0]}>
        <coneGeometry args={[0.16, 0.12, 20]} />
        <meshStandardMaterial color={C.ivory} />
      </mesh>
    </group>
  );
}

function Sparkles() {
  const items = useMemo(() => {
    const r = rng(99);
    return Array.from({ length: 14 }, () => ({
      p: [(r() - 0.5) * 11, 1.5 + r() * 5, (r() - 0.5) * 7] as [number, number, number],
      s: 0.06 + r() * 0.08,
      gold: r() > 0.4,
    }));
  }, []);
  return (
    <>
      {items.map((it, i) => (
        <Float key={i} speed={1 + (i % 3) * 0.4} floatIntensity={1.2} rotationIntensity={1.2}>
          <mesh position={it.p}>
            <octahedronGeometry args={[it.s, 0]} />
            <meshStandardMaterial color={it.gold ? C.gold : C.teal} emissive={it.gold ? C.gold : C.teal} emissiveIntensity={0.4} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Rig() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 1.7, 0);
  }, [camera]);
  return null;
}

export default function HeroScene() {
  const group = useRef<THREE.Group>(null);
  const size = useThree((s) => s.size);
  const fit = THREE.MathUtils.clamp(size.width / (size.height * 1.05), 0.5, 1.05);

  useFrame((s) => {
    const g = group.current;
    if (!g) return;
    const t = s.clock.elapsedTime;
    const targetY = s.pointer.x * 0.5 + Math.sin(t * 0.25) * 0.12;
    const targetX = -s.pointer.y * 0.1;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.05);
  });

  const tip = new THREE.Vector3(0, 5.3, 0);
  const chipPos = new THREE.Vector3(2.9, 4.6, 1.2);

  return (
    <>
      <Rig />
      <ambientLight intensity={0.95} />
      <hemisphereLight args={['#ffffff', C.sand, 0.7]} />
      <directionalLight position={[6, 9, 5]} intensity={2.4} color="#fff2d9" castShadow />
      <pointLight position={[2.9, 4.6, 2]} intensity={14} color={C.teal} distance={9} />
      <group ref={group} scale={fit}>
        <Platform />
        <Skyline />
        <Float speed={1.4} floatIntensity={0.8} rotationIntensity={0.2}>
          <group position={chipPos.toArray()}>
            <Chip />
          </group>
        </Float>
        <Line points={[tip.toArray(), chipPos.toArray()]} color={C.emerald} lineWidth={1.4} dashed dashSize={0.18} gapSize={0.12} />
        <mesh position={[0, 3.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5.2, 0.012, 8, 160]} />
          <meshBasicMaterial color={C.gold} transparent opacity={0.7} />
        </mesh>
        <Satellite />
        <Sparkles />
        <ContactShadows position={[0, 0.2, 0]} opacity={0.35} scale={12} blur={2.6} far={5} frames={1} resolution={512} />
      </group>
    </>
  );
}
