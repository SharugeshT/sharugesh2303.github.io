import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, X, CheckCircle2, Github, ExternalLink, FileText } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProjectVisual } from './ProjectVisual';
import { projects } from '@/data/portfolio';
import type { Project } from '@/types';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="// projects"
        title="Featured Work"
        subtitle="A selection of production and academic projects spanning full-stack development, mobile engineering, and security automation."
      />

      <div className="mt-12 space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Visual side */}
                <div className="relative h-48 sm:h-56 lg:h-auto min-h-[200px] bg-ink-850 border-b lg:border-b-0 lg:border-r border-white/[0.04]">
                  <ProjectVisual theme={project.visualTheme} index={project.index} />
                </div>

                {/* Content side */}
                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-mono text-electric-400">
                        {project.index}
                      </span>
                      <span className="text-xs font-mono text-gray-600 ml-2">
                        {project.category}
                      </span>
                    </div>
                    {project.id === 'pragatix' && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Production
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-xs font-mono text-gray-300 border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-600 hover:bg-electric-500 text-white text-sm font-medium transition-all"
                    >
                      View Case Study
                      <ArrowRight size={14} />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-gray-300 text-sm font-medium transition-all"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-gray-300 text-sm font-medium transition-all"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {selected && (
        <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
      )}
    </SectionWrapper>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong max-w-2xl w-full max-h-[85vh] overflow-y-auto no-scrollbar"
      >
        <div className="relative h-40 bg-ink-850 border-b border-white/[0.06]">
          <ProjectVisual theme={project.visualTheme} index={project.index} />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="text-xs font-mono text-electric-400">{project.category}</span>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-xs font-mono text-gray-300 border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <h4 className="font-display font-semibold text-white text-sm mb-4 flex items-center gap-2">
            <FileText size={16} className="text-electric-400" />
            Key Contributions
          </h4>

          <ul className="space-y-2.5">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-electric-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.04]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-gray-300 text-sm font-medium transition-all"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-gray-300 text-sm font-medium transition-all"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            <p className="text-xs text-gray-600 ml-auto">
              Links will be added when repositories are public.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
