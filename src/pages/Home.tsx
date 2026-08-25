import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ─── Reveal hook (inline) ────────────────────────────────────────────────────
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

// ─── Shared primitives ───────────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}
    >
      {children}
    </span>
  );
}

function BlueBtn({ children, to, large }: { children: React.ReactNode; to: string; large?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 ${large ? 'px-8 py-4 text-base' : 'px-5 py-3 text-sm'} text-white`}
      style={{ background: hovered ? '#1E45C4' : '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

function GhostBtn({ children, to, large }: { children: React.ReactNode; to: string; large?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 ${large ? 'px-8 py-4 text-base' : 'px-5 py-3 text-sm'}`}
      style={{
        border: '1.5px solid #E4E9F2',
        color: hovered ? '#2F5FE0' : '#111827',
        background: hovered ? '#F2F5FE' : '#FFFFFF',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

// ─── Device Mockup (CSS-crafted phone) ───────────────────────────────────────
function PhoneMockup({ bg = '#F2F5FE', children }: { bg?: string; children?: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: 160, height: 300, background: '#111827', borderRadius: 28, padding: '10px 6px', boxShadow: '0 24px 56px rgba(17,24,39,0.25)' }}
    >
      {/* notch */}
      <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 48, height: 14, background: '#111827', borderRadius: 8, zIndex: 2 }} />
      <div style={{ width: '100%', height: '100%', borderRadius: 20, background: bg, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

function BrowserMockup({ bg = '#F6F8FC', children }: { bg?: string; children?: React.ReactNode }) {
  return (
    <div
      style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E4E9F2', overflow: 'hidden', boxShadow: '0 16px 48px rgba(47,95,224,0.10)' }}
    >
      <div style={{ background: '#F6F8FC', borderBottom: '1px solid #E4E9F2', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FBBF24' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#60A5FA' }} />
        <div style={{ flex: 1, background: '#E4E9F2', borderRadius: 6, height: 18, marginLeft: 8 }} />
      </div>
      <div style={{ background: bg, minHeight: 120 }}>
        {children}
      </div>
    </div>
  );
}

// ─── Hero visual ─────────────────────────────────────────────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto" style={{ height: 420 }}>
      {/* Pale backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: '#F2F5FE', borderRadius: 32, zIndex: 0 }} />

      {/* Browser mockup */}
      <div style={{ position: 'absolute', top: 32, left: 16, right: 80, zIndex: 2 }}>
        <BrowserMockup bg="#FFFFFF">
          <div style={{ padding: 14 }}>
            <div style={{ height: 10, background: '#E8EEFC', borderRadius: 6, marginBottom: 8, width: '60%' }} />
            <div style={{ height: 7, background: '#F2F5FE', borderRadius: 6, marginBottom: 5, width: '90%' }} />
            <div style={{ height: 7, background: '#F2F5FE', borderRadius: 6, marginBottom: 5, width: '75%' }} />
            <div style={{ height: 28, background: '#2F5FE0', borderRadius: 8, marginTop: 12, width: '40%' }} />
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ height: 48, background: '#F6F8FC', borderRadius: 8, border: '1px solid #E4E9F2' }} />
              ))}
            </div>
          </div>
        </BrowserMockup>
      </div>

      {/* Phone mockup */}
      <div style={{ position: 'absolute', bottom: 16, right: 8, zIndex: 3 }}>
        <PhoneMockup bg="#2F5FE0">
          <div style={{ padding: '32px 10px 10px' }}>
            <div style={{ height: 8, background: 'rgba(255,255,255,0.4)', borderRadius: 5, marginBottom: 6 }} />
            <div style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 5, marginBottom: 6, width: '70%' }} />
            <div style={{ height: 56, background: 'rgba(255,255,255,0.15)', borderRadius: 10, marginBottom: 6 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ height: 40, background: 'rgba(255,255,255,0.12)', borderRadius: 8 }} />
              ))}
            </div>
            <div style={{ height: 28, background: 'rgba(255,255,255,0.9)', borderRadius: 8, marginTop: 10 }} />
          </div>
        </PhoneMockup>
      </div>

      {/* Floating stat card */}
      <div
        style={{
          position: 'absolute', top: 200, left: 8, zIndex: 4,
          background: '#FFFFFF', borderRadius: 14, padding: '12px 16px',
          boxShadow: '0 8px 24px rgba(47,95,224,0.14)', border: '1px solid #E8EEFC',
          minWidth: 140
        }}
      >
        <div style={{ fontSize: 10, color: '#5B6472', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>Projects Delivered</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Real Work</div>
        <div style={{ fontSize: 10, color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>Real Solutions</div>
      </div>

      {/* Floating badge */}
      <div
        style={{
          position: 'absolute', top: 24, right: 100, zIndex: 4,
          background: '#2F5FE0', borderRadius: 50, padding: '8px 14px',
          color: '#FFFFFF', fontSize: 11, fontWeight: 600,
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          boxShadow: '0 4px 16px rgba(47,95,224,0.35)'
        }}
      >
        Mobile App
      </div>
    </div>
  );
}

// ─── SECTION: Hero ────────────────────────────────────────────────────────────
function Hero() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ background: '#FFFFFF' }}
    >
      {/* Background blob */}
      <div
        style={{
          position: 'absolute', top: -120, right: -120, width: 600, height: 600,
          background: 'radial-gradient(circle, #E8EEFC 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal mb-6">
              <SectionLabel>Digital Solutions Agency</SectionLabel>
            </div>
            <h1
              className="reveal reveal-delay-1 font-bold leading-tight mb-6"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                color: '#111827',
                lineHeight: 1.12,
              }}
            >
              Your Business.{' '}
              <span style={{ color: '#2F5FE0' }}>Your Idea.</span>
              <br />
              Our Digital Solutions.
            </h1>
            <p
              className="reveal reveal-delay-2 text-lg leading-relaxed mb-8"
              style={{ color: '#5B6472', maxWidth: 480, fontFamily: 'Inter, sans-serif' }}
            >
              We help businesses build modern websites, mobile apps, online stores, and custom digital solutions that make it easier to reach customers and grow.
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
              <BlueBtn to="/contact" large>Start a Project</BlueBtn>
              <GhostBtn to="/portfolio" large>
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </GhostBtn>
            </div>
            <div className="reveal reveal-delay-4 flex gap-8 mt-10">
              {[
                { label: 'Real Work', sub: 'Delivered' },
                { label: 'Business', sub: 'Focused' },
                { label: 'End-to-End', sub: 'Partner' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 18, fontWeight: 700, color: '#111827' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#5B6472' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Empathy ─────────────────────────────────────────────────────────
function Empathy() {
  const ref = useReveal();
  const problems = [
    { icon: '🌐', text: 'I need a website', to: '/services' },
    { icon: '🛒', text: 'I want customers to order online', to: '/services' },
    { icon: '📱', text: 'I need a mobile app', to: '/services' },
    { icon: '⚙️', text: 'I want to automate my business', to: '/services' },
    { icon: '💡', text: 'I have an idea but don\'t know how to build it', to: '/contact' },
    { icon: '🔧', text: 'I want to improve my existing site or app', to: '/services' },
  ];
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-5"><SectionLabel>Start Here</SectionLabel></div>
          <h2
            className="reveal reveal-delay-1 font-bold mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#111827', lineHeight: 1.2 }}
          >
            Not sure what digital solution your business needs?
          </h2>
          <p className="reveal reveal-delay-2 text-lg" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            That's okay. You don't need to know the technology. Tell us what you want your business to achieve, and we'll help you find the right solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <Link
              key={p.text}
              to={p.to}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-250`}
              style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2F5FE0';
                e.currentTarget.style.background = '#F2F5FE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E4E9F2';
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <span className="text-2xl">{p.icon}</span>
              <span
                className="font-medium text-sm leading-snug"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
              >
                {p.text}
              </span>
              <svg className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Services ────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Business Websites',
    pitch: 'A strong first impression and an easy way for customers to find and trust your business online.',
    cta: 'Build My Website',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile Applications',
    pitch: 'Let customers connect with your business from anywhere, at any time.',
    cta: 'Build My App',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    title: 'Online Stores',
    pitch: 'Take your products online — let customers browse, order, and buy from you easily.',
    cta: 'Start Selling Online',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M7 8h.01M10 8h4"/>
      </svg>
    ),
    title: 'Custom Business Software',
    pitch: 'Replace spreadsheets and manual work with software built around the way your business actually works.',
    cta: 'Build My Business System',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Business Automation',
    pitch: 'Turn repetitive manual work into simple, automatic workflows — so you can focus on your business.',
    cta: 'Explore Automation',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: 'Improve an Existing Product',
    pitch: 'Already have a website or app? We can redesign, maintain, or expand what you already have.',
    cta: 'Improve My Product',
  },
];

function Services() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-14">
          <div className="reveal mb-5"><SectionLabel>What We Build</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            What Can We Build For Your Business?
          </h2>
          <p className="reveal reveal-delay-2 text-lg" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            From your first online presence to a complete digital platform — we build solutions around what your business actually needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex flex-col p-7 rounded-2xl border transition-all duration-250`}
              style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2F5FE0';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,95,224,0.10)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E4E9F2';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#E8EEFC' }}>
                {s.icon}
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                {s.pitch}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ border: '1.5px solid #E4E9F2', color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2F5FE0'; e.currentTarget.style.color = '#2F5FE0'; e.currentTarget.style.background = '#F2F5FE'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.background = 'transparent'; }}
          >
            View All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Featured Project ────────────────────────────────────────────────
function FeaturedProject() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visuals */}
          <div className="reveal relative" style={{ height: 460 }}>
            <div style={{ position: 'absolute', inset: 0, background: '#E8EEFC', borderRadius: 28, zIndex: 0 }} />
            {/* Main phone */}
            <div style={{ position: 'absolute', left: '50%', top: 30, transform: 'translateX(-60%)', zIndex: 2 }}>
              <PhoneMockup bg="#FFFFFF">
                <div style={{ padding: '30px 10px 10px' }}>
                  {/* Header */}
                  <div style={{ height: 7, background: '#E4E9F2', borderRadius: 4, marginBottom: 5, width: '70%' }} />
                  {/* Search bar */}
                  <div style={{ height: 28, background: '#F6F8FC', borderRadius: 8, border: '1px solid #E4E9F2', marginBottom: 10 }} />
                  {/* Categories */}
                  <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
                    {['All','Veg','Fruit'].map((c, i) => (
                      <div key={c} style={{ flex: 1, height: 22, borderRadius: 6, background: i === 0 ? '#2F5FE0' : '#F2F5FE', border: i === 0 ? 'none' : '1px solid #E4E9F2' }} />
                    ))}
                  </div>
                  {/* Products */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{ background: '#F6F8FC', borderRadius: 8, padding: 6, border: '1px solid #E4E9F2' }}>
                        <div style={{ height: 40, background: i % 2 === 0 ? '#D1FAE5' : '#FEF9C3', borderRadius: 6, marginBottom: 5 }} />
                        <div style={{ height: 6, background: '#E4E9F2', borderRadius: 3, marginBottom: 3, width: '80%' }} />
                        <div style={{ height: 5, background: '#2F5FE0', borderRadius: 3, width: '50%' }} />
                      </div>
                    ))}
                  </div>
                  {/* Cart button */}
                  <div style={{ height: 28, background: '#2F5FE0', borderRadius: 8, marginTop: 8 }} />
                </div>
              </PhoneMockup>
            </div>
            {/* Admin browser */}
            <div style={{ position: 'absolute', bottom: 20, right: 0, left: 20, zIndex: 3 }}>
              <BrowserMockup bg="#F6F8FC">
                <div style={{ padding: 12 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <div style={{ flex: 2, height: 40, background: '#FFFFFF', borderRadius: 8, border: '1px solid #E4E9F2' }} />
                    <div style={{ flex: 1, height: 40, background: '#E8EEFC', borderRadius: 8 }} />
                    <div style={{ flex: 1, height: 40, background: '#E8EEFC', borderRadius: 8 }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{ height: 48, background: '#FFFFFF', borderRadius: 8, border: '1px solid #E4E9F2', padding: 8 }}>
                        <div style={{ height: 6, background: '#E4E9F2', borderRadius: 3, marginBottom: 4, width: '70%' }} />
                        <div style={{ height: 10, background: '#2F5FE0', borderRadius: 3, width: '50%' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserMockup>
            </div>
            {/* Badge */}
            <div style={{ position: 'absolute', top: 20, right: 16, zIndex: 4, background: '#2F5FE0', borderRadius: 10, padding: '8px 14px', color: '#FFFFFF', fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Chhava Vegetables
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="reveal mb-3">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: '#2F5FE0', color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px' }}
              >
                Featured Project
              </span>
            </div>
            <p className="reveal reveal-delay-1 text-sm font-semibold mb-2" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Chhava Vegetables
            </p>
            <h2 className="reveal reveal-delay-1 font-bold mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(24px,3.5vw,40px)', color: '#111827', lineHeight: 1.2 }}>
              Taking a Local Business Online
            </h2>
            <p className="reveal reveal-delay-2 text-base leading-relaxed mb-8" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
              A complete digital ordering solution designed to help a vegetable business reach customers online and manage its daily operations more efficiently.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col gap-5 mb-10">
              {[
                { label: 'The Need', text: 'A more convenient way to connect with customers and manage online orders.' },
                { label: 'What We Built', text: 'A digital ordering experience plus business management tools.' },
                { label: 'The Result', text: 'A more convenient customer experience and a more organized way to manage operations.' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: '#2F5FE0', minHeight: 40 }} />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.08em' }}>{item.label}</div>
                    <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4 p-6 rounded-2xl mb-8" style={{ background: '#F2F5FE', border: '1px solid #E8EEFC' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Want something similar for your business?
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                Your business may need something completely different. Tell us what you're trying to achieve and we'll help you find the right solution.
              </p>
              <BlueBtn to="/contact">Let's Discuss Your Business →</BlueBtn>
            </div>

            <div className="reveal reveal-delay-4">
              <Link
                to="/case-study"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                View Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Portfolio grid ──────────────────────────────────────────────────
const PROJECTS = [
  {
    name: 'Chhava Vegetables',
    category: 'E-commerce / Mobile App',
    desc: 'Digital ordering solution for a local vegetable business — mobile app + business management tools.',
    to: '/case-study',
    color: '#2F5FE0',
    featured: true,
    badge: null,
  },
  {
    name: 'Restructurers',
    category: 'Business Website',
    desc: 'Professional digital presence for a psychological healing & wellness business.',
    to: '/portfolio',
    color: '#0891B2',
    featured: false,
    badge: null,
  },
  {
    name: 'Election Advertisement',
    category: 'Demo Web App',
    desc: 'Demonstration voting and candidate-management experience.',
    to: '/portfolio',
    color: '#7C3AED',
    featured: false,
    badge: 'DEMO PROJECT',
  },
  {
    name: 'Innovera Schools',
    category: 'Education Website',
    desc: 'Digital site and interactive experience for an educational organisation.',
    to: '/portfolio',
    color: '#059669',
    featured: false,
    badge: null,
  },
];

function PortfolioGrid() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="reveal mb-5"><SectionLabel>Selected Work</SectionLabel></div>
            <h2 className="reveal reveal-delay-1 font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
              We've Built It.{' '}
              <span style={{ color: '#2F5FE0' }}>Now Let's Build Yours.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ border: '1.5px solid #E4E9F2', color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2F5FE0'; e.currentTarget.style.color = '#2F5FE0'; e.currentTarget.style.background = '#F2F5FE'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.background = 'transparent'; }}
            >
              View All Work →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <div
            className="reveal lg:col-span-2 lg:row-span-1 group relative overflow-hidden rounded-2xl cursor-pointer img-zoom"
            style={{ background: '#F2F5FE', border: '1.5px solid #E4E9F2', minHeight: 320 }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2F5FE0'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #E8EEFC 0%, #F2F5FE 100%)' }}>
              {/* Mini phone mockups decorative */}
              <div style={{ position: 'absolute', right: 40, top: 32, opacity: 0.8 }}>
                <div style={{ width: 80, height: 150, background: '#111827', borderRadius: 16, padding: '5px 3px', boxShadow: '0 12px 32px rgba(17,24,39,0.2)' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: 12, background: '#2F5FE0' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', right: 130, top: 60, opacity: 0.6 }}>
                <div style={{ width: 60, height: 110, background: '#111827', borderRadius: 12, padding: '4px 2px' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: 9, background: '#E8EEFC' }} />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: '#2F5FE0', color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  E-commerce / Mobile App
                </span>
                <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>Chhava Vegetables</h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                  Digital ordering solution for a local vegetable business — mobile app + business management tools.
                </p>
              </div>
              <Link
                to="/case-study"
                className="inline-flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                View Case Study →
              </Link>
            </div>
          </div>
          {/* 3 smaller cards */}
          {PROJECTS.filter(p => !p.featured).map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl cursor-pointer img-zoom`}
              style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2', minHeight: 180, padding: 24 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color, opacity: 0.12, position: 'absolute', top: 16, right: 16 }} />
              <div className="flex flex-col gap-2 h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: '#E8EEFC', color: p.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#FEF3C7', color: '#92400E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{p.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
                </div>
                <Link
                  to={p.to}
                  className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: p.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Interactive Need Selector ──────────────────────────────────────
const NEEDS = [
  { icon: '🌐', label: 'I need a website', response: 'A professional business website helps customers find you online, understand what you offer, and get in touch easily. We can build it.' },
  { icon: '🛒', label: 'I want to sell online', response: 'An online store lets your customers browse, choose, and buy from you 24/7 — no physical presence needed to start.' },
  { icon: '📱', label: 'I need a mobile app', response: 'A mobile app puts your business in your customers\' pockets. We build practical apps that serve a real purpose for your business.' },
  { icon: '🖥️', label: 'I need business software', response: 'Custom software built around the way your business works — replacing manual processes with organised, digital workflows.' },
  { icon: '⚙️', label: 'I want to automate something', response: 'We identify the repetitive parts of your operations and replace them with automated workflows, so your team focuses on what matters.' },
  { icon: '💡', label: 'I have an idea', response: "You don't need to know how to build it. Tell us the outcome you want — we'll help you plan and build the right solution." },
  { icon: '🔧', label: 'I already have a site or app', response: 'We can take what you have, identify what needs improving, and extend or redesign it to work better for your business.' },
];

function NeedSelector() {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="reveal mb-5"><SectionLabel>Tell Us</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            Tell Us What You Need.
          </h2>
          <p className="reveal reveal-delay-2 text-lg max-w-xl mx-auto" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            You don't need to know exactly how to build it. Just tell us what you're trying to achieve.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {NEEDS.map((n, i) => (
            <button
              key={n.label}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`reveal reveal-delay-${(i % 4) + 1} flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer`}
              style={{
                background: selected === i ? '#E8EEFC' : '#FFFFFF',
                borderColor: selected === i ? '#2F5FE0' : '#E4E9F2',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              <span className="text-2xl">{n.icon}</span>
              <span className="text-xs font-semibold leading-tight" style={{ color: selected === i ? '#2F5FE0' : '#111827' }}>{n.label}</span>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div
            className="p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            style={{ background: '#FFFFFF', border: '1.5px solid #2F5FE0', animation: 'fadeSlideIn 0.3s ease' }}
          >
            <p className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
              {NEEDS[selected].response}
            </p>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
            >
              Let's Talk →
            </Link>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeSlideIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </section>
  );
}

// ─── SECTION: Process ─────────────────────────────────────────────────────────
const STEPS = [
  { num: '01', label: 'Tell Us About Your Business', desc: 'Share what your business does, who your customers are, and what you\'re trying to achieve.' },
  { num: '02', label: 'We Find the Right Solution', desc: 'We help you decide what to build — no jargon, just a clear plan that makes sense for your situation.' },
  { num: '03', label: 'We Design the Experience', desc: 'We design how your product will look and feel, making sure it works for your customers.' },
  { num: '04', label: 'We Build It', desc: 'We develop your solution, keeping you informed and involved throughout.' },
  { num: '05', label: 'We Launch', desc: 'We get your product live and make sure everything works properly before and after launch.' },
  { num: '06', label: 'We Keep Improving', desc: 'We stay available to maintain, update, and grow your product as your business evolves.' },
];

function Process() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal mb-5"><SectionLabel>How We Work</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            Simple Process. Clear Communication.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${(i % 3) + 1} flex flex-col gap-3 p-7 rounded-2xl`}
              style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{step.label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Why Choose Us ───────────────────────────────────────────────────
const WHY = [
  { icon: '👂', title: 'We Listen First', desc: 'Before recommending anything, we take the time to understand your business, your customers, and your goals.' },
  { icon: '🎯', title: 'Built Around Your Needs', desc: 'Every solution we build starts with your business requirements — not a template or a one-size approach.' },
  { icon: '💬', title: 'Clear & Simple', desc: "No technical jargon. We communicate in plain language, so you always know exactly what's happening." },
  { icon: '🤝', title: 'One Partner From Start to Launch', desc: 'You don\'t manage multiple agencies or handoffs. We handle the full journey with you.' },
  { icon: '⚡', title: 'Practical Solutions', desc: 'We build solutions that actually work for your business — not overcomplicated systems that are hard to manage.' },
  { icon: '🚀', title: 'Built for the Future', desc: 'Your digital solution grows with you. We build with the long term in mind from day one.' },
];

function WhyChooseUs() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#F2F5FE' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-14">
          <div className="reveal mb-5"><SectionLabel>Why Ninexo</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            You Know Your Business. We Know How to Build It.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 3) + 1} flex flex-col gap-3 p-7 rounded-2xl`}
              style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2' }}
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-bold text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Trust ───────────────────────────────────────────────────────────
function Trust() {
  const ref = useReveal();
  const pillars = ['Real Work', 'Real Solutions', 'Clear Communication', 'Business-Focused'];
  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <div className="flex flex-wrap gap-4">
              {pillars.map((p) => (
                <div key={p} className="reveal flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#2F5FE0' }} />
                  <span className="font-semibold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2 flex-1 p-6 rounded-2xl" style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}>
            <p className="text-sm font-medium mb-2" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Client feedback</p>
            <p className="text-base italic" style={{ color: '#111827', fontFamily: 'Inter, sans-serif' }}>Client feedback coming soon.</p>
            <p className="text-xs mt-3" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>We'll publish genuine feedback here as we collect it from clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: About snippet ───────────────────────────────────────────────────
function AboutSnippet() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal mb-5"><SectionLabel>About Us</SectionLabel></div>
            <h2 className="reveal reveal-delay-1 font-bold mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,40px)', color: '#111827', lineHeight: 1.2 }}>
              We Believe Technology Should Make Business Easier.
            </h2>
            <p className="reveal reveal-delay-2 text-base leading-relaxed mb-8" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
              Ninexo is a digital solutions company focused on helping businesses establish, improve, and grow their digital presence. Whether you need a professional website, a mobile application, an online store, or a custom system for your business, we help turn your requirements into practical digital solutions.
            </p>
            <div className="reveal reveal-delay-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Learn more about us →
              </Link>
            </div>
          </div>
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
            {[
              { label: 'Business-focused', sub: 'We speak your language, not tech jargon' },
              { label: 'End-to-end', sub: 'From idea to live — one partner' },
              { label: 'Practical', sub: 'Solutions that actually work for your business' },
              { label: 'Long-term', sub: 'We stay with you as your business grows' },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl" style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2' }}>
                <div className="font-bold text-sm mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#2F5FE0' }}>{item.label}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Final CTA ───────────────────────────────────────────────────────
function FinalCTA() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#2F5FE0' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="reveal mb-6">
          <SectionLabel>Let's Build Together</SectionLabel>
        </div>
        <h2
          className="reveal reveal-delay-1 font-bold mb-5"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(32px,5vw,56px)', color: '#FFFFFF', lineHeight: 1.15 }}
        >
          Have a Business Idea in Mind?
        </h2>
        <p className="reveal reveal-delay-2 text-lg mb-10 mx-auto max-w-xl" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
          Tell us what you're trying to achieve. We'll help you figure out the right digital solution.
        </p>
        <div className="reveal reveal-delay-3 flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            style={{ background: '#FFFFFF', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#E8EEFC'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
          >
            Start a Conversation
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 inline-flex items-center gap-2.5"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif', border: '1.5px solid rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.536 4.07 1.482 5.793L0 24l6.395-1.653A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.36-.213-3.718.96.987-3.605-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Contact snippet ─────────────────────────────────────────────────
function ContactSnippet() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="reveal mb-5"><SectionLabel>Contact</SectionLabel></div>
            <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,40px)', color: '#111827', lineHeight: 1.2 }}>
              Let's Talk About Your Business.
            </h2>
            <p className="reveal reveal-delay-2 text-lg mb-10" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
              You don't need a detailed technical specification. Just tell us what you're looking for.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col gap-5">
              {[
                { icon: '📧', label: 'Email', value: 'hello@ninexo.in', href: 'mailto:hello@ninexo.in' },
                { icon: '💬', label: 'WhatsApp', value: 'Message us on WhatsApp', href: '#' },
                { icon: '📞', label: 'Call', value: 'Available on request', href: '#' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group" style={{ textDecoration: 'none' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#E8EEFC' }}>
                    <span>{c.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{c.label}</div>
                    <div className="text-sm font-medium transition-colors" style={{ color: '#111827', fontFamily: 'Inter, sans-serif' }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl" style={{ background: '#F2F5FE', border: '1.5px solid #E8EEFC' }}>
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>Enquiry Sent!</h3>
                <p style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>We'll be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl" style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Name *</label>
                    <input required className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF' }} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Business Name</label>
                    <input className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF' }} placeholder="Your business" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Email *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF' }} placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Phone / WhatsApp</label>
                    <input className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF' }} placeholder="+1 234 567 8900" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What are you looking for?</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF', color: '#111827' }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')}>
                    <option value="">Select a service...</option>
                    <option>Business Website</option>
                    <option>Mobile Application</option>
                    <option>Online Store</option>
                    <option>Custom Business Software</option>
                    <option>Business Automation</option>
                    <option>Improve Existing Product</option>
                    <option>I have an idea</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us about your requirement *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all resize-none" style={{ border: '1.5px solid #E4E9F2', fontFamily: 'Inter, sans-serif', background: '#FFFFFF' }} placeholder="What would you like to build or achieve?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={(e) => (e.currentTarget.style.borderColor = '#2F5FE0')} onBlur={(e) => (e.currentTarget.style.borderColor = '#E4E9F2')} />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                  style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Empathy />
      <Services />
      <FeaturedProject />
      <PortfolioGrid />
      <NeedSelector />
      <Process />
      <WhyChooseUs />
      <Trust />
      <AboutSnippet />
      <FinalCTA />
      <ContactSnippet />
    </>
  );
}
