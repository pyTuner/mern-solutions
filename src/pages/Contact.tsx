import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}
    >
      {children}
    </span>
  );
}

function Field({
  label, required, children,
}: {
  label: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-semibold"
        style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        {label} {required && <span style={{ color: '#2F5FE0' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 12,
  border: '1.5px solid #E4E9F2',
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  color: '#111827',
  background: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 0.18s',
};

const FAQ = [
  {
    q: 'Do I need to know what I want to build before getting in touch?',
    a: "Not at all. Many of our conversations start with 'I have an idea but I don't know exactly what to build.' That's the right starting point — we'll help you figure it out.",
  },
  {
    q: 'How long does it take to build a website or app?',
    a: "It depends on what you need. A business website can take a few weeks; a full mobile app or custom software system takes longer. We'll give you an honest timeline once we understand your requirements.",
  },
  {
    q: 'Do you work with businesses outside my city or country?',
    a: "Yes. We work with businesses regardless of location. Most of our communication happens online, and we're happy to work across time zones.",
  },
  {
    q: 'What information should I prepare before contacting you?',
    a: "Just a rough idea of what you want to achieve — even if it's informal. The more you can tell us about your business and your goals, the better we can help. No technical knowledge needed.",
  },
];

export default function Contact() {
  const ref = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '',
    service: '', message: '', budget: '', timeline: '',
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#2F5FE0';
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#E4E9F2';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div ref={ref}>
      {/* Hero */}
      <section
        className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden"
        style={{ background: '#F2F5FE' }}
      >
        <div
          style={{
            position: 'absolute', bottom: -100, left: -100, width: 400, height: 400,
            background: 'radial-gradient(circle, #E8EEFC 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="reveal mb-5"><SectionLabel>Contact</SectionLabel></div>
          <h1
            className="reveal reveal-delay-1 font-bold mb-5"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', color: '#111827', lineHeight: 1.1, maxWidth: 680 }}
          >
            Let's Talk About Your Business.
          </h1>
          <p
            className="reveal reveal-delay-2 text-xl max-w-xl"
            style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
          >
            You don't need a detailed technical specification. Just tell us what you're looking for — we'll take it from there.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: details */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Contact options */}
              <div>
                <p
                  className="reveal text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.1em' }}
                >
                  Reach Us Directly
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      ),
                      label: 'Email',
                      value: 'hello@mernsolutions.co',
                      href: 'mailto:hello@mernsolutions.co',
                      sub: 'We reply within one business day',
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#2F5FE0">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.096.536 4.07 1.482 5.793L0 24l6.395-1.653A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.36-.213-3.718.96.987-3.605-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                        </svg>
                      ),
                      label: 'WhatsApp',
                      value: 'Message us on WhatsApp',
                      href: 'https://wa.me/1234567890',
                      sub: 'Quick questions & initial chats',
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2F5FE0" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                        </svg>
                      ),
                      label: 'Call',
                      value: 'Available on request',
                      href: '#',
                      sub: 'Drop us an email to schedule',
                    },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="reveal flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 group"
                      style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2', textDecoration: 'none' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2F5FE0'; e.currentTarget.style.background = '#F2F5FE'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E4E9F2'; e.currentTarget.style.background = '#F6F8FC'; }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: '#E8EEFC' }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <div
                          className="text-xs font-bold uppercase tracking-wider mb-0.5"
                          style={{ color: '#5B6472', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {c.label}
                        </div>
                        <div
                          className="font-semibold text-sm mb-0.5 transition-colors"
                          style={{ color: '#111827', fontFamily: 'Inter, sans-serif' }}
                        >
                          {c.value}
                        </div>
                        <div className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>{c.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div
                className="reveal p-6 rounded-2xl"
                style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}
              >
                <h3
                  className="font-bold text-base mb-5"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
                >
                  What happens after you reach out?
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { step: '1', text: "We read your enquiry and get in touch within one business day." },
                    { step: '2', text: "We have a short conversation — by message, call, or email — to understand your situation better." },
                    { step: '3', text: "We suggest a practical approach and explain what we'd recommend building and why." },
                    { step: '4', text: "You decide if you'd like to move forward. No pressure, no commitment required." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: '#E8EEFC', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.step}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 reveal reveal-delay-1">
              {sent ? (
                <div
                  className="h-full min-h-96 flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                  style={{ background: '#F2F5FE', border: '2px solid #E8EEFC' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl"
                    style={{ background: '#E8EEFC' }}
                  >
                    ✅
                  </div>
                  <h3
                    className="font-bold text-2xl mb-3"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
                  >
                    Enquiry Sent!
                  </h3>
                  <p
                    className="text-base mb-6 max-w-sm"
                    style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}
                  >
                    Thanks for reaching out. We'll be in touch within one business day to discuss your project.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold transition-colors"
                    style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 rounded-2xl"
                  style={{ background: '#F6F8FC', border: '1.5px solid #E4E9F2' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Your Name" required>
                      <input
                        required
                        style={inputStyle}
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={update('name')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Business Name">
                      <input
                        style={inputStyle}
                        placeholder="Your Business"
                        value={form.business}
                        onChange={update('business')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email Address" required>
                      <input
                        required
                        type="email"
                        style={inputStyle}
                        placeholder="you@yourbusiness.com"
                        value={form.email}
                        onChange={update('email')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input
                        style={inputStyle}
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={update('phone')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                  </div>

                  <Field label="What are you looking for?">
                    <select
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      value={form.service}
                      onChange={update('service')}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      <option value="">Select a service...</option>
                      <option>Business Website</option>
                      <option>Mobile Application</option>
                      <option>Online Store / E-commerce</option>
                      <option>Custom Business Software</option>
                      <option>Business Automation</option>
                      <option>Improve an Existing Product</option>
                      <option>I have an idea — not sure yet</option>
                    </select>
                  </Field>

                  <Field label="Tell us about your requirement" required>
                    <textarea
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      placeholder="What would you like to build or achieve? Share as much or as little as you'd like — there's no need for a technical specification."
                      value={form.message}
                      onChange={update('message')}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Budget (optional)">
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        value={form.budget}
                        onChange={update('budget')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      >
                        <option value="">Prefer not to say</option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </Field>
                    <Field label="Timeline (optional)">
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        value={form.timeline}
                        onChange={update('timeline')}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      >
                        <option value="">No preference</option>
                        <option>As soon as possible</option>
                        <option>Within 1 month</option>
                        <option>1 – 3 months</option>
                        <option>3 – 6 months</option>
                        <option>No rush — just exploring</option>
                      </select>
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-base text-white transition-all duration-200 mt-2"
                    style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
                  >
                    Send Enquiry
                  </button>

                  <p className="text-xs text-center" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                    No commitments. We reply within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ background: '#F6F8FC' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="reveal mb-5"><SectionLabel>FAQ</SectionLabel></div>
          <h2
            className="reveal reveal-delay-1 font-bold mb-10"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(24px,3.5vw,36px)', color: '#111827', lineHeight: 1.2 }}
          >
            Common questions.
          </h2>

          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl overflow-hidden border transition-all duration-200`}
                style={{ border: openFaq === i ? '1.5px solid #2F5FE0' : '1.5px solid #E4E9F2', background: '#FFFFFF' }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span
                    className="font-semibold text-sm md:text-base"
                    style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {item.q}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ background: openFaq === i ? '#2F5FE0' : '#F2F5FE' }}
                  >
                    <svg
                      width="12" height="12" viewBox="0 0 24 24"
                      fill="none"
                      stroke={openFaq === i ? '#FFFFFF' : '#2F5FE0'}
                      strokeWidth="2.5"
                      style={{ transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="reveal mt-10 p-6 rounded-2xl text-center"
            style={{ background: '#E8EEFC', border: '1px solid #C7D8FA' }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: '#111827', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Still have a question?
            </p>
            <p className="text-sm mb-4" style={{ color: '#5B6472', fontFamily: 'Inter, sans-serif' }}>
              Send us a message and we'll get back to you.
            </p>
            <a
              href="mailto:hello@mernsolutions.co"
              className="text-sm font-semibold transition-colors"
              style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              hello@mernsolutions.co →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-14" style={{ background: '#2F5FE0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-bold text-xl text-white"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Ready to get started?
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>
              You know your business. We know how to build the digital solution.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.25)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            >
              WhatsApp Us
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: '#FFFFFF', color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E8EEFC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
