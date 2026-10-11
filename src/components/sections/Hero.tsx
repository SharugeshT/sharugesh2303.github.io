import { useState, useEffect, Suspense, lazy } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { heroContent, profile } from '@/data/portfolio';
import { usePrefersReducedMotion, useIsMobile } from '@/hooks/useMediaQuery';

const HeroScene = lazy(() =>
  import('@/components/three/HeroScene').then((m) => ({ default: m.HeroScene })),
);

function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % heroContent.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 sm:h-9 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-mono text-lg sm:text-xl text-gradient"
        >
          {heroContent.roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full border-2 border-electric-500/20 animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-violet-500/20 animate-pulse" />
        <div className="absolute inset-16 rounded-full border border-cyan-400/20 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-500/30 to-violet-500/30 blur-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [sceneError, setSceneError] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const show3D = !isMobile && !sceneError;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-electric-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left content */}
        <div className="z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-gray-300">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
          >
            {heroContent.greeting}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4"
          >
            <AnimatedRoles />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-gradient-soft leading-snug max-w-xl"
          >
            {heroContent.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-medium text-sm transition-all glow-electric"
            >
              Explore My Work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="/Sharugesh_T_Resume.pdf"
              download="Sharugesh_T_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover text-gray-200 font-medium text-sm transition-all"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover text-gray-200 font-medium text-sm transition-all"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl glass glass-hover text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl glass glass-hover text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right — 3D scene */}
        <div className="relative order-1 lg:order-2 h-[360px] sm:h-[460px] lg:h-[560px] z-10 flex items-center justify-center">
          {show3D && (
            <div className="absolute inset-0 opacity-35 pointer-events-none">
              {!sceneLoaded && <SceneFallback />}
              <Suspense fallback={<SceneFallback />}>
                <HeroScene reducedMotion={reducedMotion} />
                <ErrorCatcher onError={() => setSceneError(true)} onLoaded={() => setSceneLoaded(true)} />
              </Suspense>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[420px] rounded-[2rem] p-2 bg-gradient-to-br from-white via-electric-100 to-violet-100 shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-white">
              <img
                src="/image.png"
                alt="Portrait of Sharugesh T"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-white/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/80 backdrop-blur-md border border-white/70 px-3 py-2">
                <span className="text-xs font-mono font-medium text-ink-900">SHARUGESH T</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-electric-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  ONLINE
                </span>
              </div>
            </div>
            <div className="absolute -right-3 top-12 h-16 w-1 rounded-full bg-electric-400 shadow-[0_0_18px_rgba(31,135,255,0.7)]" />
            <div className="absolute -left-3 bottom-24 h-10 w-1 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.7)]" />
          </motion.div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full bg-electric-500/15 blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      {!reducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-gray-600">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-electric-400/50 to-transparent animate-pulse" />
        </motion.div>
      )}
    </section>
  );
}

function ErrorCatcher({ onError: onErr, onLoaded }: { onError: () => void; onLoaded: () => void }) {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);
  return null;
}
