import { Mail, Linkedin, Github } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Contact() {
  const { t } = useI18n();

  const contacts = [
    { icon: <Mail className="w-6 h-6" />, href: 'mailto:edwin19_7@hotmail.com', label: t.contact.email, value: 'edwin19_7@hotmail.com' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/jose-quesnay/', label: t.contact.linkedin, value: 'in/jose-quesnay' },
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/josedwin19', label: t.contact.github, value: 'josedwin19' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-3">{t.contact.title}</h2>
        <p className="text-slate-500 mb-12 text-lg">{t.contact.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center"
            >
              <div className="text-brand-700 mb-3">{c.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-1">{c.label}</h3>
              <p className="text-slate-500 text-sm break-all">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}