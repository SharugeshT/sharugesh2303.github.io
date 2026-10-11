import { motion } from 'motion/react';
import {
  Code2, Server, Smartphone, Database, Shield,
  CheckCircle2, Circle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Smartphone,
  Database,
  Shield,
};

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="// skills"
        title="Technical Expertise"
        subtitle="Interactive skill categories across development and security disciplines."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, ci) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className={
                category.skills.length > 6
                  ? 'sm:col-span-2 lg:col-span-2'
                  : ''
              }
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon size={20} className="text-violet-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                    >
                      {skill.level === 'Advanced' ? (
                        <CheckCircle2
                          size={16}
                          className="text-electric-400 mt-0.5 flex-shrink-0"
                        />
                      ) : (
                        <Circle
                          size={16}
                          className="text-gray-600 mt-0.5 flex-shrink-0"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-gray-200">
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                              skill.level === 'Advanced'
                                ? 'text-electric-300 bg-electric-500/10'
                                : 'text-gray-500 bg-white/[0.03]'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-gray-600 font-mono">
        <span className="text-electric-400">●</span> Advanced &nbsp;
        <span className="text-gray-500">○</span> Basic / Foundational
      </p>
    </SectionWrapper>
  );
}
