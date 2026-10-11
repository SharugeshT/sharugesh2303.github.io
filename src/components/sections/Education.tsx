import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, BadgeCheck } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { profile, coursework, certifications } from '@/data/portfolio';

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="// education & certifications"
        title="Learning & Credentials"
        subtitle="Academic foundation in cybersecurity engineering and professional certifications."
      />

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard hover={false} className="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center">
                <GraduationCap size={24} className="text-electric-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">Education</h3>
                <p className="text-xs text-gray-500 mt-0.5">{profile.collegeYears}</p>
              </div>
            </div>

            <h4 className="font-display font-semibold text-white text-sm mb-1">
              {profile.college}
            </h4>
            <p className="text-sm text-electric-300 font-medium mb-3">
              {profile.education}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] mb-5">
              <Award size={14} className="text-violet-400" />
              <span className="text-sm text-gray-300">
                CGPA: <span className="font-mono font-semibold text-white">{profile.cgpa}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-gray-500" />
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                Relevant Coursework
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course.name}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-xs text-gray-300 border border-white/[0.04]"
                >
                  {course.name}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard hover={false} className="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <BadgeCheck size={24} className="text-violet-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">Certifications</h3>
                <p className="text-xs text-gray-500 mt-0.5">Professional credentials & training</p>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <Award size={16} className="text-electric-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-200 leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
