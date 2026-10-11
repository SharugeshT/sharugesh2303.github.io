import { motion } from 'motion/react';
import { GraduationCap, Award, Code2, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { aboutContent } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Award,
  Code2,
  Target,
};

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="// about"
        title={aboutContent.heading}
      />

      <div className="mt-12 grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <GlassCard hover={false} className="p-6 sm:p-8 h-full">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {aboutContent.summary}
            </p>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {aboutContent.cards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? GraduationCap;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassCard className="p-5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-electric-400" />
                  </div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm text-gray-200 font-medium leading-snug">
                    {card.value}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
