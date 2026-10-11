import { Github, Linkedin, Mail, Shield, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  Shield,
};

interface SocialIconProps {
  icon: string;
  url: string;
  size?: number;
  className?: string;
}

export function SocialIcon({ icon, url, size = 20, className = '' }: SocialIconProps) {
  const Icon = iconMap[icon] ?? ExternalLink;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl glass glass-hover text-gray-400 hover:text-white transition-colors ${className}`}
    >
      <Icon size={size} />
    </a>
  );
}
