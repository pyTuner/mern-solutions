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
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: white ? 'rgba(255,255,255,0.2)' : '#E8EEFC', color: white ? '#FFFFFF' : '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>
      {children}
    </span>
  );
}

function Phone({ children, bg = '#2F5FE0' }: { children?: React.ReactNode; bg?: string }) {
  return (
    <div style={{ width: 180, height: 340, background: '#111827', borderRadius: 32, padding: '12px 7px', boxShadow: '0 32px 80px rgba(17,24,39,0.3)', flexShrink: 0 }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 24, background: bg, overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 56, height: 16, background: '#111827', borderRadius: '0 0 10px 10px', zIndex: 2 }} />
        <div style={{ paddingTop: 24 }}>{children}</div>
      </div>
    </div>
  );
}

function Browser({ children, bg = '#F6F8FC' }: { children?: React.ReactNode; bg?: string }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 16, border: '1px solid #E4E9F2', overflow: 'hidden', boxShadow: '0 20px 60px rgba(47,95,224,0.12)', width: '100%' }}>
      <div style={{ background: '#F6F8FC', borderBottom: '1px solid #E4E9F2', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
        {['#FBBF24','#34D399','#60A5FA'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
        <div style={{ flex: 1, background: '#E4E9F2', borderRadius: 6, height: 20, marginLeft: 8 }} />
      </div>
      <div style={{ background: bg, minHeight: 120 }}>{children}</div>
    </div>
  );
}

// Mockup screens
function HomeScreen() {
  return (
    <div style={{ padding: '0 8px', paddingTop: 8 }}>
      {/* Hero banner */}
      <div style={{ height: 80, background: 'rgba(255,255,255,0.15)', borderRadius: 12, marginBottom: 8, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
        <div>
          <div style={{ height: 7, background: 'rgba(255,255,255,0.9)', borderRadius: 4, width: 80, marginBottom: 4 }} />
          <div style={{ height: 5, background: 'rgba(255,255,255,0.5)', borderRadius: 4, width: 60 }} />
        </div>
      </div>
      {/* Search */}
      <div style={{ height: 32, background: 'rgba(255,255,255,0.2)', borderRadius: 10, marginBottom: 8 }} />
      {/* Category chips */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
        {['All','Vegetables','Fruits','Herbs'].map((c, i) => (
          <div key={c} style={{ flex: 1, height: 24, borderRadius: 8, background: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
      {/* Product grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {[
          { name: 'Tomatoes', color: '#FCA5A5' },
          { name: 'Spinach', color: '#86EFAC' },
          { name: 'Carrots', color: '#FCD34D' },
          { name: 'Potatoes', color: '#D1B4A0' },
        ].map(p => (
          <div key={p.name} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ height: 48, background: p.color, opacity: 0.8 }} />
            <div style={{ padding: '5px 6px' }}>
              <div style={{ height: 5, background: 'rgba(255,255,255,0.7)', borderRadius: 3, marginBottom: 3, width: '75%' }} />
              <div style={{ height: 5, background: 'rgba(255,255,255,0.4)', borderRadius: 3, width: '50%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartScreen() {
  return (
    <div style={{ padding: '0 8px', paddingTop: 8 }}>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.7)', borderRadius: 4, marginBottom: 12, width: '50%' }} />
      {[0,1,2].map(i => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: 8, marginBottom: 6, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: ['#FCA5A5','#86EFAC','#FCD34D'][i], opacity: 0.9 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.7)', borderRadius: 3, marginBottom: 3, width: '70%' }} />
            <div style={{ height: 5, background: 'rgba(255,255,255,0.4)', borderRadius: 3, width: '40%' }} />
          </div>
          <div style={{ width: 24, height: 18, background: 'rgba(255,255,255,0.2)', borderRadius: 5 }} />
        </div>
      ))}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '10px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ height: 6, background: 'rgba(255,255,255,0.5)', borderRadius: 3, width: '35%' }} />
        <div style={{ height: 6, background: 'rgba(255,255,255,0.9)', borderRadius: 3, width: '25%' }} />
      </div>
      <div style={{ height: 32, background: 'rgba(255,255,255,0.9)', borderRadius: 10 }} />
    </div>
  );
}

function AdminScreen() {
  return (
    <div style={{ padding: 14 }}>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
        {[
          { label: 'Orders Today', val: '12' },
          { label: 'Revenue', val: '₹3,240' },
          { label: 'Products', val: '48' },
        ].map(s => (
          <div key={s.label} style={{ background: '#F6F8FC', borderRadius: 10, padding: '10px 8px', border: '1px solid #E4E9F2' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.val}</div>
            <div style={{ fontSize: 9, color: '#5B6472', fontFamily: 'Inter, sans-serif', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Orders table */}
      <div style={{ background: '#F6F8FC', borderRadius: 10, border: '1px solid #E4E9F2', overflow: 'hidden' }}>
        <div style={{ padding: '8px 12px', background: '#E8EEFC', borderBottom: '1px solid #E4E9F2' }}>
          <div style={{ height: 6, background: '#2F5FE0', borderRadius: 3, width: '40%' }} />
        </div>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderBottom: i < 3 ? '1px solid #E4E9F2' : 'none' }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: '#E8EEFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: '#2F5FE0', opacity: 0.6 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 5, background: '#E4E9F2', borderRadius: 3, marginBottom: 3, width: '60%' }} />
              <div style={{ height: 4, background: '#F2F5FE', borderRadius: 3, width: '40%' }} />
            </div>
            <div style={{ width: 40, height: 18, borderRadius: 6, background: i === 0 ? '#D1FAE5' : '#E8EEFC', border: `1px solid ${i === 0 ? '#6EE7B7' : '#E4E9F2'}` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden" style={{ background: '#2F5FE0' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-5">
            <Link to="/portfolio" className="text-sm font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              ← Back to Portfolio
            </Link>
          </div>
          <div className="reveal mb-4"><SectionLabel white>Featured Project</SectionLabel></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="reveal reveal-delay-1 font-bold mb-4 text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1.1 }}>
                Chhava Vegetables
              </h1>
              <p className="reveal reveal-delay-2 text-lg mb-6" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                A complete digital ordering solution designed to help a vegetable business reach customers online and manage its daily operations more efficiently.
              </p>
              <div className="reveal reveal-delay-3 flex flex-wrap gap-2">
                {['E-commerce', 'Mobile App', 'Business Dashboard', 'Local Business'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2 text-right" />
          </div>
        </div>
      </section>

      {/* Device showcase — Row 1: customer-facing */}
      <section className="py-20 md:py-28" style={{ background: '#F2F5FE' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="reveal mb-5"><span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>Customer Experience</span></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-12" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(24px,3.5vw,40px)', color: '#111827', lineHeight: 1.2 }}>
            A digital store that feels natural to use.
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="reveal">
              <p className="text-xs font-semibold text-center mb-4" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Home / Browse</p>
              <Phone bg="#2F5FE0"><HomeScreen /></Phone>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="text-xs font-semibold text-center mb-4" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Cart / Checkout</p>
              <Phone bg="#1E45C4"><CartScreen /></Phone>
            </div>
            <div className="reveal reveal-delay-3 flex-1 max-w-md">
              <p className="text-sm font-semibold mb-3" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What customers experience</p>
              <div className="flex flex-col gap-4">
                {[
                  'Browse products by category — vegetables, fruits, herbs',
                  'Search for specific items quickly',
                  'Add to cart and checkout in a few taps',
                  'Track order status directly in the app',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#E8EEFC' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#2F5FE0" strokeWidth="2"><path d="M2 6l2.5 2.5L10 3"/></svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device showcase — Row 2: admin */}
      <section className="py-20 md:py-28" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal mb-4"><span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}>Business Management</span></div>
              <h2 className="reveal reveal-delay-1 font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(24px,3.5vw,40px)', color: '#111827', lineHeight: 1.2 }}>
                A clearer way to manage daily operations.
              </h2>
              <p className="reveal reveal-delay-2 text-base leading-relaxed mb-6" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                The business side of Chhava Vegetables gives the owner a clear view of incoming orders, product inventory, and daily operations — all in one place.
              </p>
              <div className="reveal reveal-delay-3 flex flex-col gap-4">
                {[
                  'See all incoming orders in real time',
                  'Manage product listings and pricing easily',
                  'Track daily and weekly sales at a glance',
                  'Update availability as stock changes',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#E8EEFC' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#2F5FE0" strokeWidth="2"><path d="M2 6l2.5 2.5L10 3"/></svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="text-xs font-semibold mb-4" style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Admin / Business Dashboard</p>
              <Browser bg="#F6F8FC"><AdminScreen /></Browser>
            </div>
          </div>
        </div>
      </section>

      {/* Project story */}
      <section className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="reveal mb-14">
            <div className="mb-5"><SectionLabel>The Story</SectionLabel></div>
            <h2 className="font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', color: '#111827', lineHeight: 1.2 }}>
              Taking a Local Business Online
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            {[
              {
                label: 'The Need',
                icon: '❓',
                text: 'Chhava Vegetables wanted a more convenient way to connect with their customers and manage online orders. Their existing process relied on phone calls and in-person visits, which was time-consuming and limited their reach.',
              },
              {
                label: 'What We Built',
                icon: '🔨',
                text: 'We built a complete digital ordering experience — a mobile app that customers could use to browse products, place orders, and track deliveries. Alongside the customer-facing app, we built a business management interface that gives the owner visibility into orders, inventory, and operations.',
              },
              {
                label: 'The Result',
                icon: '✅',
                text: 'A more convenient experience for customers — they can order from anywhere, anytime. And a more organised way for the business to manage its daily operations, reducing manual coordination and giving the owner a clearer picture of their business.',
              },
            ].map((item, i) => (
              <div key={item.label} className={`reveal reveal-delay-${i + 1} grid grid-cols-1 md:grid-cols-5 gap-6`}>
                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8EEFC' }}>
                    {item.icon}
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wider" style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.08em' }}>{item.label}</div>
                </div>
                <p className="md:col-span-4 text-base leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-20 md:py-28" style={{ background: '#2F5FE0' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <div className="reveal mb-5"><SectionLabel white>Your Turn</SectionLabel></div>
          <h2 className="reveal reveal-delay-1 font-bold mb-4 text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.2 }}>
            Want something similar for your business?
          </h2>
          <p className="reveal reveal-delay-2 text-lg mb-4" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            Your business may need something completely different. Tell us what you're trying to achieve and we'll help you find the right solution.
          </p>
          <div className="reveal reveal-delay-3 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
              style={{ background: '#FFFFFF', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E8EEFC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
            >
              Let's Discuss Your Business →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
