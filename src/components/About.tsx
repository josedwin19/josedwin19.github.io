import { useI18n } from '../i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-8">{t.about.title}</h2>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}