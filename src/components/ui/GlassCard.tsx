import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'electric' | 'violet' | 'none';
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
}: GlassCardProps) {
  const glowClass =
    glow === 'electric'
      ? 'glow-electric'
      : glow === 'violet'
        ? 'glow-violet'
        : '';

  return (
    <div
      className={`glass ${hover ? 'glass-hover' : ''} ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
