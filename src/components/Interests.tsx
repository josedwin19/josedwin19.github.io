import { Microscope, Brain, Workflow, BarChart3 } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Interests() {
  const { t } = useI18n();

  const items = [
    { icon: <Microscope className="w-8 h-8" />, key: 'cryoem' as const },
    { icon: <Brain className="w-8 h-8" />, key: 'ai_structural' as const },
    { icon: <Workflow className="w-8 h-8" />, key: 'ml_pipelines' as const },
    { icon: <BarChart3 className="w-8 h-8" />, key: 'visualization' as const },
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-3">{t.interests.title}</h2>
        <p className="text-slate-500 mb-12 text-lg">{t.interests.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="card">
              <div className="text-brand-700 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {t.interests.items[item.key].title}
              </h3>
              <p className="text-slate-600">{t.interests.items[item.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}