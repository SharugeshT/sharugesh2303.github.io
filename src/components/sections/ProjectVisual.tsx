import { motion } from 'motion/react';
import {
  LayoutDashboard, Zap, Trophy, Users, Bell,
  Dumbbell, Video, Award, Search,
  Terminal, Shield, AlertTriangle, FileText, Radar,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProjectVisualProps {
  theme: string;
  index: string;
}

const dashboardElements = [
  { icon: LayoutDashboard, label: 'Dashboard', x: '6%', y: '12%', delay: 0 },
  { icon: Zap, label: 'XP: 2,450', x: '52%', y: '8%', delay: 0.5 },
  { icon: Trophy, label: 'Streak: 12', x: '8%', y: '52%', delay: 0.3 },
  { icon: Users, label: 'Team Alpha', x: '58%', y: '48%', delay: 0.7 },
  { icon: Bell, label: 'Notifications', x: '30%', y: '72%', delay: 0.9 },
];

const athleticElements = [
  { icon: Dumbbell, label: 'Performance', x: '8%', y: '14%', delay: 0 },
  { icon: Video, label: 'Video Analysis', x: '56%', y: '10%', delay: 0.4 },
  { icon: Award, label: 'Scholarship', x: '10%', y: '56%', delay: 0.2 },
  { icon: Search, label: 'Scouting', x: '58%', y: '58%', delay: 0.6 },
];

const terminalLines = [
  { text: '$ nmap -sV target.local', color: 'text-electric-400' },
  { text: 'Scanning ports [22, 80, 443, 8080]...', color: 'text-gray-500' },
  { text: 'PORT    STATE  SERVICE  VERSION', color: 'text-gray-400' },
  { text: '22/tcp  open   ssh      OpenSSH 8.9', color: 'text-green-400' },
  { text: '80/tcp  open   http     nginx 1.24', color: 'text-green-400' },
  { text: '[!] Testing SQL Injection...', color: 'text-yellow-400' },
  { text: '[!] XSS vulnerability detected', color: 'text-red-400' },
  { text: '> Generating PDF report...', color: 'text-electric-400' },
];

function DashboardVisual() {
  return (
    <div className="relative w-full h-full p-4 grid-bg">
      {dashboardElements.map((el, i) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: el.delay, duration: 0.4 }}
            className="absolute glass rounded-lg p-2.5 sm:p-3"
            style={{ left: el.x, top: el.y }}
          >
            <div className="flex items-center gap-2">
              <Icon size={14} className="text-electric-400 flex-shrink-0" />
              <span className="text-xs font-mono text-gray-300 whitespace-nowrap">{el.label}</span>
            </div>
          </motion.div>
        );
      })}
      {/* XP bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-white/[0.04] overflow-hidden"
      >
        <div className="h-full bg-gradient-to-r from-electric-400 to-violet-400" style={{ width: '100%' }} />
      </motion.div>
    </div>
  );
}

function AthleticVisual() {
  return (
    <div className="relative w-full h-full p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-violet-500/5" />
      {athleticElements.map((el, i) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: el.delay, duration: 0.4 }}
            className="absolute glass rounded-lg p-2.5 sm:p-3"
            style={{ left: el.x, top: el.y }}
          >
            <div className="flex items-center gap-2">
              <Icon size={14} className="text-cyan-400 flex-shrink-0" />
              <span className="text-xs font-mono text-gray-300 whitespace-nowrap">{el.label}</span>
            </div>
          </motion.div>
        );
      })}
      {/* Performance chart bars */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1.5 h-12">
        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-cyan-400/60"
          />
        ))}
      </div>
    </div>
  );
}

function TerminalVisual() {
  return (
    <div className="relative w-full h-full p-4 bg-ink-950 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-gray-600 text-xs">vuln-scanner@local</span>
      </div>
      <div className="space-y-1">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
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
    </div>
  );
}

const visualMap: Record<string, () => JSX.Element> = {
  dashboard: DashboardVisual,
  athletic: AthleticVisual,
  terminal: TerminalVisual,
};

export function ProjectVisual({ theme, index }: ProjectVisualProps) {
  const Visual = visualMap[theme] ?? DashboardVisual;
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-3 left-3 text-xs font-mono text-gray-600 z-10">
        {index}
      </div>
      <Visual />
    </div>
  );
}
