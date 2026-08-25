import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
        borderBottom: scrolled ? '1px solid #E4E9F2' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 16px rgba(47,95,224,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: '#2F5FE0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            M
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#111827' }}
          >
            Ninexo<span style={{ color: '#2F5FE0' }}></span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  color: active ? '#2F5FE0' : '#5B6472',
                  background: active ? '#E8EEFC' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#2F5FE0';
                    e.currentTarget.style.background = '#F2F5FE';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#5B6472';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              background: '#2F5FE0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1E45C4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2F5FE0')}
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: '#111827',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{ background: '#111827', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-300"
            style={{
              background: '#111827',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: '#FFFFFF',
          borderTop: menuOpen ? '1px solid #E4E9F2' : 'none',
        }}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  color: active ? '#2F5FE0' : '#111827',
                  background: active ? '#E8EEFC' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', background: '#2F5FE0' }}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
