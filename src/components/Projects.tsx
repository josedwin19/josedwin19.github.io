import { ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Projects() {
  const { t } = useI18n();

  const projects = [
    {
      key: 'cem' as const,
      href: 'https://github.com/josedwin19/CEM_data_collection',
      lang: 'Python',
    },
    {
      key: 'toolbox' as const,
      href: 'https://github.com/josedwin19/python-scripts-toolbox',
      lang: 'Python',
    },
    {
      key: 'awesome' as const,
      href: 'https://github.com/josedwin19/awesome-ai-research',
      lang: 'Markdown',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-3">{t.projects.title}</h2>
        <p className="text-slate-500 mb-12 text-lg">{t.projects.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2 py-1 rounded bg-brand-50 text-brand-700">
                  {p.lang}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {t.projects.items[p.key].title}
              </h3>
              <p className="text-slate-600 text-sm flex-grow mb-4">
                {t.projects.items[p.key].description}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:text-brand-800 font-medium text-sm"
              >
                {t.projects.view} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}