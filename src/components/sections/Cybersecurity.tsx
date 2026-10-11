import { motion } from 'motion/react';
import {
  Radar, Globe, Activity, HardDrive, Cpu, FileSearch,
  Shield, ExternalLink, Terminal, Lock, Eye, Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { cybersecTools, profile } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Radar,
  Globe,
  Activity,
  HardDrive,
  Cpu,
  FileSearch,
};

const consoleLogLines = [
  { text: '> Initializing security console...', color: 'text-gray-500' },
  { text: '> Nmap scan complete — 4 hosts discovered', color: 'text-electric-400' },
  { text: '> Wireshark capture: 1,247 packets analyzed', color: 'text-cyan-400' },
  { text: '> FTK disk image mounted for analysis', color: 'text-violet-400' },
  { text: '> Volatility memory profile: Win10x64_19041', color: 'text-violet-400' },
  { text: '> Threat level: [ SIMULATED DEMO ]', color: 'text-yellow-400' },
  { text: '> Status: Ready for investigation', color: 'text-green-400' },
];

export function Cybersecurity() {
  return (
    <SectionWrapper id="cybersecurity">
      <SectionHeading
        eyebrow="// cybersecurity"
        title="Security Through Practical Exploration"
        subtitle="Hands-on experience with network reconnaissance, web security testing, digital forensics, and secure application development."
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {/* Security console */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <GlassCard hover={false} className="p-5 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={18} className="text-electric-400" />
              <span className="font-mono text-sm text-gray-300">Security Console</span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </div>

            <div className="bg-ink-950 rounded-lg p-4 font-mono text-xs space-y-1.5 min-h-[260px]">
              {consoleLogLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className={line.color}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-electric-400"
              >
                _
              </motion.span>
            </div>

            <p className="mt-3 text-xs text-gray-600 leading-relaxed">
              Static demonstration with simulated data. No live scanning is performed.
            </p>
          </GlassCard>
        </motion.div>

        {/* Tools grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {cybersecTools.map((tool, i) => {
            const Icon = iconMap[tool.icon] ?? Shield;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GlassCard className="p-5 h-full group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/20 transition-colors">
                      <Icon size={20} className="text-electric-400" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}

          {/* TryHackMe card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="sm:col-span-2"
          >
            <GlassCard glow="electric" className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-electric-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-semibold text-white text-sm mb-1">
                  TryHackMe Profile
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Hands-on cybersecurity learning and practical lab exercises through guided rooms and challenges.
                </p>
              </div>
              <a
                href={profile.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-600 hover:bg-electric-500 text-white text-sm font-medium transition-all flex-shrink-0"
              >
                Visit Profile
                <ExternalLink size={14} />
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Skill badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 flex flex-wrap gap-3 justify-center"
      >
        {[
          { icon: Lock, label: 'Secure Application Development' },
          { icon: Eye, label: 'Web & API Security' },
          { icon: Zap, label: 'Log Analysis' },
          { icon: Activity, label: 'Network Traffic Analysis' },
        ].map((badge) => (
          <div
            key={badge.label}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-gray-400"
          >
            <badge.icon size={14} className="text-violet-400" />
            {badge.label}
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
