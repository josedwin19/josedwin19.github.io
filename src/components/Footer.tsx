import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-2">Edwin N. Quesnay</h3>
          <p className="text-slate-400 max-w-xl">{t.footer.tagline}</p>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Edwin N. Quesnay. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}