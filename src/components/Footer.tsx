import { Link } from 'react-router-dom';

const services = [
  { label: 'Business Websites', to: '/services' },
  { label: 'Mobile Applications', to: '/services' },
  { label: 'Online Stores', to: '/services' },
  { label: 'Business Software', to: '/services' },
  { label: 'Automation', to: '/services' },
];

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#E4E9F2' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                M
              </div>
              <span
                className="font-bold text-lg tracking-tight text-white"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                MERN Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF', maxWidth: '260px' }}>
              Digital solutions that help businesses establish, improve, and grow their digital presence.
            </p>
            <div className="flex gap-3 mt-6">
              {/* WhatsApp */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: '#1E2A3B' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2F5FE0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#1E2A3B')}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.536 4.07 1.482 5.793L0 24l6.395-1.653A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.36-.213-3.718.96.987-3.605-.234-.37A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@mernsolutions.co"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: '#1E2A3B' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2F5FE0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#1E2A3B')}
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm text-white mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2F5FE0')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-semibold text-white mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {pages.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2F5FE0')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-white mb-5 uppercase tracking-wider"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: '#9CA3AF' }}>
              <p>hello@mernsolutions.co</p>
              <p>WhatsApp available</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-semibold transition-colors duration-200"
                style={{ color: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1E45C4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#2F5FE0')}
              >
                Start a conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid #1F2937' }}>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            © 2026 MERN Solutions. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            You know your business. We know how to build the digital solution.
          </p>
        </div>
      </div>
    </footer>
  );
}
