import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/config/company';
import Wordmark from './Wordmark';

const navItems = [
  { label: 'Startseite', path: '/' },
  { label: 'Leistungen', path: '/leistungen', hasDropdown: true },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Kontakt', path: '/kontakt' },
];

const dropdownItems = [
  { label: 'Gas', path: '/gas' },
  { label: 'Wasser / Sanitär', path: '/sanitaer' },
  { label: 'Heizung', path: '/heizung' },
  { label: 'Service & Wartung', path: '/service' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Info bar */}
      <div className="hidden md:block bg-navy-900 text-warmwhite/70 text-xs">
        <div className="container-page flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-copper" />
            <span className="tracking-wide">{company.area}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phoneHref}`}
              className="flex items-center gap-2 transition-colors hover:text-copper-200"
            >
              <Phone size={12} />
              <span className="tracking-wide">{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-copper-200"
            >
              <Mail size={12} />
              <span className="tracking-wide">{company.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-warmwhite/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between py-4">
            <Link to="/" aria-label="Guericke Gebäudetechnik Startseite">
              <Wordmark variant="dark" size="md" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-navy py-2 transition-colors hover:text-copper"
                      aria-expanded={dropdownOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white shadow-xl border border-anthracite/10 min-w-[220px] py-2 animate-fade-in">
                          {dropdownItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-5 py-2.5 text-sm text-navy hover:bg-warmwhite hover:text-copper transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-copper ${
                        isActive ? 'text-copper' : 'text-navy'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="hidden lg:block">
              <Link to="/kontakt" className="btn-primary">
                Anfrage senden
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-warmwhite border-t border-anthracite/10 animate-fade-in">
            <nav className="container-page py-6 flex flex-col gap-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.path} className="py-1">
                    <p className="text-sm font-medium text-navy py-2">
                      {item.label}
                    </p>
                    <div className="ml-4 flex flex-col gap-1 border-l border-anthracite/10 pl-4">
                      {dropdownItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`text-sm py-2 transition-colors ${
                            location.pathname === sub.path
                              ? 'text-copper font-medium'
                              : 'text-anthracite/70 hover:text-navy'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium py-3 transition-colors ${
                        isActive ? 'text-copper' : 'text-navy hover:text-copper'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <Link to="/kontakt" className="btn-primary mt-4">
                Anfrage senden
              </Link>
              <div className="mt-6 pt-6 border-t border-anthracite/10 flex flex-col gap-3 text-sm text-anthracite/70">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="flex items-center gap-2"
                >
                  <Phone size={14} className="text-copper" />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail size={14} className="text-copper" />
                  {company.email}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-copper" />
                  {company.area}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
