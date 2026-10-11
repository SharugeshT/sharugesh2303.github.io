import { motion } from 'motion/react';
import {
  Trophy, Code2, Bug, Terminal, Presentation,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { achievements } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Code2,
  Bug,
  Terminal,
  Presentation,
};

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        eyebrow="// achievements"
        title="Competitions & Awards"
        subtitle="Hackathons, cybersecurity competitions, and technical presentations."
      />

      <div className="mt-14 relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/40 via-violet-500/30 to-transparent sm:-translate-x-1/2" />

        <div className="space-y-8">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] ?? Trophy;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${achievement.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 sm:gap-0 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 mt-5">
                  <div className="w-3 h-3 rounded-full bg-electric-400 ring-4 ring-ink-950" />
                </div>

                {/* Card */}
                <div className={`pl-12 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="glass glass-hover rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500/15 to-violet-500/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-electric-400" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-white text-sm leading-snug">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{achievement.event}</p>
                        <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono">
                          <Trophy size={12} />
                          {achievement.placement}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for other half */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
