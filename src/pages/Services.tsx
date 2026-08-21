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
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>
      {children}
    </span>
  );
}

const SERVICES_DETAIL = [
  {
    icon: '🌐',
    title: 'Business Websites',
    headline: 'Your business deserves a digital presence that makes customers trust you instantly.',
    desc: 'We build professional, fast, and easy-to-navigate websites that represent your business the way you want to be seen. Whether you need a simple landing page or a multi-section business site with contact forms, service listings, and team pages — we design and build it around your business goals, not a generic template.',
    outcomes: [
      'Customers can find you online',
      'Your business looks professional and trustworthy',
      'Customers can contact you easily',
      'Your site works on every device',
    ],
    cta: 'Build My Website',
    color: '#2F5FE0',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    headline: 'Let your business live in your customers\' pockets.',
    desc: 'Mobile apps make it easier for customers to order from you, book your services, stay informed, or interact with your business — from anywhere. We build mobile apps for both iOS and Android that are practical, well-designed, and built around the way your customers actually use their phones.',
    outcomes: [
      'Customers can interact with your business anytime',
      'Orders, bookings, or service requests made easy',
      'Your business stays in customers\' minds',
      'Works on iPhone and Android',
    ],
    cta: 'Build My App',
    color: '#0891B2',
  },
  {
    icon: '🛒',
    title: 'Online Stores',
    headline: 'Take your products online and start selling — without complexity.',
    desc: 'An online store lets your customers browse your products, place orders, and pay — without needing to call you or visit in person. We build e-commerce solutions that are simple to manage and easy for your customers to use, from small local shops to growing product businesses.',
    outcomes: [
      'Customers can browse and order online',
      'You manage products, stock, and orders easily',
      'Secure payment collection',
      'Mobile-friendly for every customer',
    ],
    cta: 'Start Selling Online',
    color: '#059669',
  },
  {
    icon: '🖥️',
    title: 'Custom Business Software',
    headline: 'Replace spreadsheets and manual work with software built for your business.',
    desc: 'When off-the-shelf software doesn\'t fit your business, we build something that does. Custom business software is designed around your processes — whether that\'s managing customers, tracking inventory, handling orders, coordinating a team, or producing reports. No bloat. No unused features. Just what your business needs.',
    outcomes: [
      'Your operations run more efficiently',
      'Manual processes become automated',
      'Your team has one place for everything',
      'Built to grow as your business grows',
    ],
    cta: 'Build My Business System',
    color: '#7C3AED',
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    headline: 'Stop doing manually what your business can do automatically.',
    desc: 'We identify the repetitive, time-consuming tasks in your business and replace them with automated workflows. From customer notifications to order confirmations, report generation to data syncing — automation gives your team more time to focus on work that matters.',
    outcomes: [
      'Time-consuming tasks happen automatically',
      'Fewer errors in manual processes',
      'Your team focuses on higher-value work',
      'Consistent, reliable customer communications',
    ],
    cta: 'Explore Automation',
    color: '#D97706',
  },
  {
    icon: '🔧',
    title: 'Improve an Existing Product',
    headline: 'Already have something? Let\'s make it work better.',
    desc: 'If you have a website or app that\'s underperforming, outdated, or needs new features — we can take it on. We\'ll assess what you have, understand what\'s not working, and recommend a practical path forward: whether that\'s a redesign, a rebuild, added functionality, or ongoing maintenance and support.',
    outcomes: [
      'Your existing product works better',
      'New features added without breaking what works',
      'Design refreshed without losing familiarity',
      'Ongoing support as your needs evolve',
    ],
    cta: 'Improve My Product',
    color: '#DC2626',
  },
];

export default function Services() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* Page hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#F2F5FE' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-5"><SectionLabel>Services</SectionLabel></div>
          <h1 className="reveal reveal-delay-1 font-bold mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(32px,5vw,56px)', color: '#111827', lineHeight: 1.12, maxWidth: 720 }}>
            What Can We Build For Your Business?
          </h1>
          <p className="reveal reveal-delay-2 text-xl max-w-2xl" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            From your first online presence to a complete digital platform. Every solution we build starts with your business requirements, not a template.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
          {SERVICES_DETAIL.map((s, i) => (
            <div
              key={s.title}
              className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 ${i < SERVICES_DETAIL.length - 1 ? 'border-b' : ''}`}
              style={{ borderColor: '#E4E9F2' }}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: '#E8EEFC' }}>
                  {s.icon}
                </div>
                <h2 className="font-bold text-3xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}>{s.title}</h2>
                <p className="font-semibold text-base mb-4" style={{ color: s.color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.headline}</p>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
                >
                  {s.cta} →
                </Link>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} p-8 rounded-2xl`} style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>What you get</p>
                <div className="flex flex-col gap-4">
                  {s.outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#E8EEFC' }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#2F5FE0" strokeWidth="2">
                          <path d="M2 6l2.5 2.5L10 3"/>
                        </svg>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#111827', fontFamily: 'Inter, sans-serif' }}>{o}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#F2F5FE' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <div className="reveal mb-5"><SectionLabel>Get Started</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
            Not sure which service fits your situation?
          </h2>
          <p className="reveal reveal-delay-2 text-lg mb-8" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            Tell us what you're trying to achieve and we'll help you figure out the right solution — no jargon, no pressure.
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
