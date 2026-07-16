import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#interests", label: t.nav.interests },
    { href: "#projects", label: t.nav.projects },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-brand-700">ENQ</a>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-700 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="ml-2 px-3 py-1 rounded-md border border-slate-200 hover:border-brand-500 hover:text-brand-700 text-sm font-semibold transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-3 py-1 rounded-md border border-slate-200 text-sm font-semibold"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-600 hover:text-brand-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}