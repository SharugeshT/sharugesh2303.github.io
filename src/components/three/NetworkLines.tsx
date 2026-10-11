import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetworkLinesProps {
  nodeCount?: number;
  maxDist?: number;
  radius?: number;
}

export function NetworkLines({ nodeCount = 20, maxDist = 3, radius = 5 }: NetworkLinesProps) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, segments } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const r = radius * (0.6 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.6,
          r * Math.cos(phi),
        ),
      );
    }

    const segs: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          segs.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return { nodes, segments: new Float32Array(segs) };
  }, [nodeCount, maxDist, radius]);

  useFrame((state) => {
    if (!linesRef.current) return;
    const t = state.clock.elapsedTime;
    linesRef.current.rotation.y = t * 0.03;
    linesRef.current.rotation.z = Math.sin(t * 0.05) * 0.08;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={segments.length / 3}
          array={segments}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}
