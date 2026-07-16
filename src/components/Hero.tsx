import { Github, Linkedin, Mail } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Hero() {
  const { t } = useI18n();

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/josedwin19', label: t.hero.github },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/jose-quesnay/', label: t.hero.linkedin },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:edwin19_7@hotmail.com', label: t.hero.email },
  ];

  return (
    <section className="pt-28 pb-24 px-4 bg-gradient-to-br from-brand-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <img
            src="/photo.jpg"
            alt="Edwin N. Quesnay"
            className="w-36 h-36 rounded-full object-cover shadow-xl mb-8 ring-4 ring-brand-200"
          />
          <h1 className="text-5xl font-bold text-slate-900">{t.hero.name}</h1>
          <p className="mt-4 text-xl text-brand-700 font-medium max-w-2xl">
            {t.hero.tagline}
          </p>
          <div className="mt-6 mb-8 max-w-2xl">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
          <div className="flex space-x-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:text-brand-700 transition-all duration-300 text-slate-700"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}