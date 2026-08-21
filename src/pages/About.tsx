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

function SectionLabel({ children, white }: { children: string; white?: boolean }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{
        background: white ? 'rgba(255,255,255,0.18)' : '#E8EEFC',
        color: white ? '#FFFFFF' : '#2F5FE0',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        letterSpacing: '0.1em',
      }}
    >
      {children}
    </span>
  );
}

const VALUES = [
  {
    icon: '👂',
    title: 'We Listen Before We Recommend',
    desc: 'Every business is different. Before we suggest a solution, we take time to understand what your business actually needs, who your customers are, and what success looks like for you.',
  },
  {
    icon: '🎯',
    title: 'Outcomes Over Technology',
    desc: "We don't lead with technology. We lead with your business goals. The solution we build might use any number of tools — what matters is that it achieves what you need it to.",
  },
  {
    icon: '💬',
    title: 'Plain Language Always',
    desc: "You'll never leave a conversation with us confused. We communicate clearly, explain our thinking, and make sure you always know what's happening and why.",
  },
  {
    icon: '🤝',
    title: 'A Real Partnership',
    desc: 'We work with you, not just for you. From the first conversation through to launch and beyond, we treat your business goals as our own.',
  },
  {
    icon: '⚡',
    title: 'Practical, Not Perfect',
    desc: "We build solutions that work in the real world — for real businesses with real constraints. We won't overbuild or overcomplicate. We'll find the right solution for your situation.",
  },
  {
    icon: '🚀',
    title: 'Built to Grow With You',
    desc: "Your business will evolve. The digital solutions we build are designed to scale and adapt alongside your business, so you're not starting from scratch every few years.",
  },
];

const APPROACH_STEPS = [
  {
    num: '01',
    title: 'We Start With Your Business',
    desc: 'Not with a proposal, not with a price list. We start by understanding your business — your customers, your goals, your current situation, and what success looks like for you.',
  },
  {
    num: '02',
    title: 'We Translate Goals Into Solutions',
    desc: "Once we understand what you're trying to achieve, we figure out what kind of digital solution makes the most sense. We explain our thinking in plain language so you can make an informed decision.",
  },
  {
    num: '03',
    title: 'We Design Around Your Customers',
    desc: 'The people who use your digital product are your customers — not us. We design with them in mind: simple, intuitive, and built for how they actually use their devices.',
  },
  {
    num: '04',
    title: 'We Build, Communicate, and Deliver',
    desc: "We keep you informed throughout the build — not just at the start and end. You'll know what's happening and have the chance to give feedback along the way.",
  },
  {
    num: '05',
    title: 'We Stay With You After Launch',
    desc: "Going live is the beginning, not the end. We support, maintain, and improve your product as your business grows and your needs change.",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden" style={{ background: '#F2F5FE' }}>
        <div
          style={{
            position: 'absolute', top: -80, right: -80, width: 480, height: 480,
            background: 'radial-gradient(circle, #E8EEFC 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal mb-5"><SectionLabel>About Us</SectionLabel></div>
              <h1
                className="reveal reveal-delay-1 font-bold mb-6"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  color: '#111827',
                  lineHeight: 1.1,
                }}
              >
                We Believe Technology Should Make Business Easier.
              </h1>
              <p
                className="reveal reveal-delay-2 text-xl leading-relaxed"
                style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', maxWidth: 520 }}
              >
                MERN Solutions is a digital solutions company focused on helping businesses establish, improve, and grow their digital presence.
              </p>
            </div>

            {/* Pull-quote panel */}
            <div className="reveal reveal-delay-3">
              <div
                className="p-8 rounded-2xl"
                style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2', boxShadow: '0 8px 32px rgba(47,95,224,0.08)' }}
              >
                <div
                  className="text-4xl font-black mb-4"
                  style={{ color: '#E8EEFC', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1 }}
                >
                  "
                </div>
                <p
                  className="text-xl font-semibold leading-snug mb-6"
                  style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  You know your business.<br />
                  We know how to build the digital solution.
                </p>
                <div
                  className="h-0.5 w-12 rounded-full"
                  style={{ background: '#2F5FE0' }}
                />
                <p
                  className="mt-4 text-sm"
                  style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
                >
                  Our north star — every project, every conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="reveal mb-5"><SectionLabel>What We Do</SectionLabel></div>
              <h2
                className="reveal reveal-delay-1 font-bold mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}
              >
                Digital Solutions for Real Businesses
              </h2>
              <p
                className="reveal reveal-delay-2 text-base leading-relaxed mb-5"
                style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
              >
                Whether you need a professional website, a mobile application, an online store, or a custom system built around the way your business works — we help turn your requirements into practical digital solutions.
              </p>
              <p
                className="reveal reveal-delay-3 text-base leading-relaxed"
                style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
              >
                We work with businesses at every stage: from those establishing their first online presence, to those improving existing products, to those ready to build something entirely new. Whatever your situation, we approach it with the same commitment: understand your goals first, then build the right solution.
              </p>
            </div>

            <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: 'Business Websites', icon: '🌐', desc: 'Your professional online presence' },
                { label: 'Mobile Apps', icon: '📱', desc: 'Your business in customers\' pockets' },
                { label: 'Online Stores', icon: '🛒', desc: 'Sell products online, easily' },
                { label: 'Custom Software', icon: '🖥️', desc: 'Built for the way you work' },
                { label: 'Automation', icon: '⚙️', desc: 'Less manual work, more focus' },
                { label: 'Product Improvement', icon: '🔧', desc: 'Make what you have work better' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}
                >
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div
                      className="font-semibold text-sm mb-0.5"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs leading-snug"
                      style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <div className="reveal mb-5"><SectionLabel>How We Think</SectionLabel></div>
            <h2
              className="reveal reveal-delay-1 font-bold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}
            >
              The principles we work by.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal reveal-delay-${(i % 3) + 1} flex flex-col gap-4 p-7 rounded-2xl transition-all duration-250`}
                style={{ background: '#FFFFFF', border: '1.5px solid #E4E9F2' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2F5FE0';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,95,224,0.09)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E4E9F2';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="text-3xl">{v.icon}</span>
                <h3
                  className="font-bold text-base"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <div className="reveal mb-5"><SectionLabel>Our Approach</SectionLabel></div>
            <h2
              className="reveal reveal-delay-1 font-bold mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}
            >
              Simple Process. Clear Communication.
            </h2>
            <p
              className="reveal reveal-delay-2 text-lg"
              style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
            >
              We keep things straightforward — for ourselves and for you.
            </p>
          </div>

          <div className="relative">
            {/* Connector line on desktop */}
            <div
              className="hidden lg:block absolute top-6 left-6"
              style={{ width: 2, height: 'calc(100% - 48px)', background: '#E4E9F2', zIndex: 0 }}
            />
            <div className="flex flex-col gap-8">
              {APPROACH_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${(i % 3) + 1} relative grid grid-cols-1 lg:grid-cols-5 gap-6 items-start`}
                >
                  <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm relative z-10"
                      style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', flexShrink: 0 }}
                    >
                      {step.num}
                    </div>
                  </div>
                  <div className="lg:col-span-4 pb-8" style={{ borderBottom: i < APPROACH_STEPS.length - 1 ? '1px solid #E4E9F2' : 'none' }}>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: '#2F5FE0' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal mb-5"><SectionLabel white>Work With Us</SectionLabel></div>
              <h2
                className="reveal reveal-delay-1 font-bold mb-4 text-white"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.2 }}
              >
                Let's build something that works for your business.
              </h2>
              <p
                className="reveal reveal-delay-2 text-lg"
                style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                Tell us what you're trying to achieve — we'll help you figure out the right digital solution.
              </p>
            </div>
            <div className="reveal reveal-delay-3 flex flex-col gap-4">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
                style={{ background: '#FFFFFF', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#E8EEFC')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
              >
                Start a Conversation →
              </Link>
              <Link
                to="/portfolio"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.25)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                See Our Work →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
