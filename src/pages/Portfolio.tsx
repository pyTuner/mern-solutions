import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>
      {children}
    </span>
  );
}

const PROJECTS = [
  {
    name: 'Chhava Vegetables',
    category: 'E-commerce / Mobile App',
    desc: 'A complete digital ordering solution for a local vegetable business — enabling customers to browse, order, and pay online, with a full business management interface for the owner.',
    color: '#2F5FE0',
    bg: '#E8EEFC',
    featured: true,
    demo: false,
    to: '/case-study',
    ctaLabel: 'View Case Study',
  },
  {
    name: 'Restructurers',
    category: 'Business Website',
    desc: 'A professional, trust-building digital presence for a psychological healing and wellness business — designed to communicate expertise, warmth, and approachability to potential clients.',
    color: '#0891B2',
    bg: '#E0F2FE',
    featured: false,
    demo: false,
    to: '/portfolio',
    ctaLabel: 'View Project',
  },
  {
    name: 'Election Advertisement',
    category: 'Demo Web App',
    desc: 'A demonstration voting and candidate-management experience, built to showcase how digital platforms can manage candidate profiles and public engagement interfaces.',
    color: '#7C3AED',
    bg: '#EDE9FE',
    featured: false,
    demo: true,
    to: '/portfolio',
    ctaLabel: 'View Project',
  },
  {
    name: 'Innovera Schools',
    category: 'Education Website / Web App',
    desc: 'A digital presence and interactive experience for an educational organisation — showcasing programmes, admissions information, and school culture for prospective families and students.',
    color: '#059669',
    bg: '#D1FAE5',
    featured: false,
    demo: false,
    to: '/portfolio',
    ctaLabel: 'View Project',
  },
];

function ProjectCard({ project, large = false }: { project: typeof PROJECTS[0]; large?: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 img-zoom ${large ? 'col-span-2' : ''}`}
      style={{ background: '#FFFFFF', borderColor: '#E4E9F2' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${project.color}18`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Visual area */}
      <div
        className="relative overflow-hidden"
        style={{ height: large ? 280 : 200, background: project.bg }}
      >
        {/* Abstract visual representation */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
          <div style={{ width: large ? 200 : 120, height: large ? 120 : 80, background: project.color, borderRadius: 20, transform: 'rotate(-8deg)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 16, right: 16, width: large ? 100 : 60, height: large ? 180 : 110, background: '#111827', borderRadius: 16, padding: '4px 3px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 13, background: project.color, opacity: 0.85 }} />
        </div>
        <div style={{ position: 'absolute', top: 16, left: 16, right: large ? '40%' : '35%', height: large ? 160 : 90, background: '#FFFFFF', borderRadius: 12, border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ height: 24, background: '#F6F8FC', borderBottom: '1px solid #E4E9F2', display: 'flex', alignItems: 'center', gap: 5, padding: '0 8px' }}>
            {['#FBBF24','#34D399','#60A5FA'].map(c => <div key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ padding: 8 }}>
            <div style={{ height: 6, background: '#E4E9F2', borderRadius: 4, marginBottom: 4, width: '70%' }} />
            <div style={{ height: 5, background: '#F2F5FE', borderRadius: 4, marginBottom: 4 }} />
            <div style={{ height: 16, background: project.color, opacity: 0.8, borderRadius: 6, marginTop: 8, width: '40%' }} />
          </div>
        </div>
        {project.demo && (
          <div style={{ position: 'absolute', top: 12, right: 12, background: '#FEF3C7', color: '#92400E', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 20, fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.06em' }}>
            DEMO PROJECT
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: project.bg, color: project.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {project.category}
          </span>
        </div>
        <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{project.name}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{project.desc}</p>
        <Link
          to={project.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          style={{ color: project.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {project.ctaLabel} →
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#F2F5FE' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-5"><SectionLabel>Our Work</SectionLabel></div>
          <h1 className="reveal reveal-delay-1 font-bold mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(32px,5vw,56px)', color: '#111827', lineHeight: 1.12, maxWidth: 640 }}>
            We've Built It.{' '}
            <span style={{ color: '#2F5FE0' }}>Now Let's Build Yours.</span>
          </h1>
          <p className="reveal reveal-delay-2 text-xl max-w-2xl" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            A selection of real digital solutions we've built for real businesses.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={project.name} className={`reveal reveal-delay-${(i % 2) + 1} ${project.featured ? 'md:col-span-2' : ''}`}>
                <ProjectCard project={project} large={project.featured} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#F6F8FC' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <div className="reveal mb-5"><SectionLabel>Start a Project</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            Your business could be next.
          </h2>
          <p className="reveal reveal-delay-2 text-lg mb-8" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            Tell us what you're trying to achieve and we'll help you figure out the right digital solution for your business.
          </p>
          <div className="reveal reveal-delay-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-200"
              style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
