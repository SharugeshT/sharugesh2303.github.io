import { Terminal, Heart } from 'lucide-react';
import { Github, Linkedin, Mail, Shield } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

const socials = [
  { icon: Github, url: profile.github, label: 'GitHub' },
  { icon: Linkedin, url: profile.linkedin, label: 'LinkedIn' },
  { icon: Shield, url: profile.tryhackme, label: 'TryHackMe' },
  { icon: Mail, url: `mailto:${profile.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg mb-3">
              <Terminal size={20} className="text-electric-400" />
              {profile.name}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Software Developer and Cybersecurity Engineering student building secure, scalable
              full-stack applications.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
              Navigate
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-electric-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
              Connect
            </span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg glass glass-hover text-gray-400 hover:text-white transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-electric-400" /> using React, Three.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
