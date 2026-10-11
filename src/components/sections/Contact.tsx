import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail, Linkedin, Github, Shield, Send, CheckCircle2, AlertCircle, MapPin,
} from 'lucide-react';
import { SectionHeading, SectionWrapper } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { profile, contactContent } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: profile.email, url: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'sharugesh-t', url: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'sharuges2303', url: profile.github },
    { icon: Shield, label: 'TryHackMe', value: 'sharugesh', url: profile.tryhackme },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="// contact"
        title={contactContent.heading}
        subtitle={contactContent.description}
      />

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard hover={false} className="p-6 sm:p-8 h-full">
            <h3 className="font-display font-bold text-white text-lg mb-2">Get in Touch</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Open to internship opportunities, entry-level roles, and collaboration on
              full-stack and cybersecurity projects.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <link.icon size={18} className="text-electric-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-200 truncate">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-gray-600">
              <MapPin size={14} className="text-gray-600" />
              Trichy, Tamil Nadu, India
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard hover={false} className="p-6 sm:p-8 h-full">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  Ready to Send
                </h3>
                <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                  Your email client should now be open with your message pre-filled.
                  If it didn't open, email me directly at{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-electric-400 hover:text-electric-300 underline"
                  >
                    {profile.email}
                  </a>
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 px-4 py-2 rounded-lg glass glass-hover text-gray-300 text-sm font-medium transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <FormField
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  placeholder="Your name"
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  placeholder="you@example.com"
                  required
                />
                <FormField
                  label="Subject"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  error={errors.subject}
                  placeholder="What's this about?"
                  required
                />
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Message <span className="text-electric-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500/40 focus:border-red-500/60'
                        : 'border-white/[0.06] focus:border-electric-500/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-medium text-sm transition-all glow-electric"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  This form opens your email client with the message pre-filled.
                  No data is stored or sent to a server.
                </p>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function FormField({ label, value, onChange, error, placeholder, type = 'text', required }: FormFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
        {label} {required && <span className="text-electric-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-gray-200 placeholder-gray-600 outline-none transition-colors ${
          error
            ? 'border-red-500/40 focus:border-red-500/60'
            : 'border-white/[0.06] focus:border-electric-500/50'
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
