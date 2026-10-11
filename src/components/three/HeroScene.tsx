import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { HolographicAvatar } from './HolographicAvatar';
import { ParticleField } from './ParticleField';
import { NetworkLines } from './NetworkLines';

interface HeroSceneProps {
  reducedMotion: boolean;
}

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 3]} intensity={2} color="#4da6ff" distance={10} />
      <pointLight position={[-3, 1, 2]} intensity={1.5} color="#8b5cf6" distance={10} />
      <pointLight position={[0, -2, 3]} intensity={1} color="#22d3ee" distance={8} />
      <directionalLight position={[0, 5, 5]} intensity={0.3} color="#ffffff" />

      <HolographicAvatar />

      {!reducedMotion && (
        <>
          <ParticleField count={120} radius={6} />
          <NetworkLines nodeCount={18} maxDist={2.8} radius={4.5} />
        </>
      )}
    </>
  );
}

export function HeroScene({ reducedMotion }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <SceneContent reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
