import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function HologramRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) ring1.current.rotation.z = t * 0.4;
    if (ring2.current) ring2.current.rotation.z = -t * 0.25;
    if (ring3.current) ring3.current.rotation.x = t * 0.15;
  });

  return (
    <group position={[0, -0.3, 0]}>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 80]} />
        <meshBasicMaterial color="#4da6ff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]} scale={1.12}>
        <torusGeometry args={[1.5, 0.01, 16, 80]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring3} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.008, 16, 80]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function FloatingCubes() {
  const group = useRef<THREE.Group>(null);

  const cubes = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        position: [
          (Math.random() - 0.5) * 3.5,
          (Math.random() - 0.3) * 2.5,
          (Math.random() - 0.5) * 2,
        ] as [number, number, number],
        scale: 0.04 + Math.random() * 0.08,
        speed: 0.5 + Math.random(),
        offset: Math.random() * Math.PI * 2,
      })),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const c = cubes[i];
      child.position.y = c.position[1] + Math.sin(t * c.speed + c.offset) * 0.15;
      child.rotation.x = t * c.speed * 0.3;
      child.rotation.y = t * c.speed * 0.4;
    });
  });

  return (
    <group ref={group}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.position} scale={c.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#4da6ff' : '#8b5cf6'}
            emissive={i % 2 === 0 ? '#1f87ff' : '#7c3aed'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function AvatarCore() {
  const head = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.3) * 0.15 + state.pointer.x * 0.2;
      head.current.rotation.x = Math.sin(t * 0.4) * 0.05 + state.pointer.y * 0.1;
      head.current.position.y = 0.3 + Math.sin(t * 0.8) * 0.03;
    }
    if (core.current) {
      const mat = core.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.4 + Math.sin(t * 2) * 0.15;
    }
  });

  return (
    <group ref={head}>
      {/* Head — stylized geometric form */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#0a1a2e"
          emissive="#1f87ff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh position={[0, 0, 0]} scale={1.02}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial color="#4da6ff" wireframe transparent opacity={0.3} />
      </mesh>
      {/* Inner glowing core */}
      <mesh ref={core} position={[0, 0, 0]} scale={0.25}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function AvatarBody() {
  const body = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (body.current) {
      body.current.position.y = Math.sin(t * 0.6) * 0.04;
      body.current.rotation.y = Math.sin(t * 0.2) * 0.08;
    }
  });

  return (
    <group ref={body} position={[0, -0.7, 0]}>
      {/* Shoulders/torso — truncated cone */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.35, 0.55, 0.7, 8]} />
        <meshStandardMaterial
          color="#0d1018"
          emissive="#1f87ff"
          emissiveIntensity={0.15}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh position={[0, -0.1, 0]} scale={1.02}>
        <cylinderGeometry args={[0.35, 0.55, 0.7, 8]} />
        <meshBasicMaterial color="#4da6ff" wireframe transparent opacity={0.15} />
      </mesh>
      {/* Collar detail */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.38, 0.02, 8, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export function HolographicAvatar() {
  return (
    <group>
      <AvatarCore />
      <AvatarBody />
      <HologramRings />
      <FloatingCubes />
    </group>
  );
}
