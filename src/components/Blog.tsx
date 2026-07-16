import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { useI18n } from '../i18n';

interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  lang: string;
  excerpt: string;
  tags: string[];
  content: string;
}

async function parsePost(raw: string, slug: string): Promise<BlogMeta> {
  const mod = await import('gray-matter');
  const matter = mod.default || mod;
  const parsed = matter(raw);
  return {
    slug,
    title: parsed.data.title || slug,
    date: parsed.data.date || '',
    lang: parsed.data.lang || 'en',
    excerpt: parsed.data.excerpt || '',
    tags: parsed.data.tags || [],
    content: parsed.content,
  };
}

export function BlogList() {
  const { t, lang } = useI18n();
  const [posts, setPosts] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/blog-index.json');
        const index: BlogMeta[] = await res.json();
        setPosts(index.filter(p => p.lang === lang || p.lang === 'both'));
      } catch {
        setPosts([]);
      }
      setLoading(false);
    })();
  }, [lang]);

  if (loading) return null;

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-3">{t.blog.title}</h2>
        <p className="text-slate-500 mb-12 text-lg">{t.blog.subtitle}</p>
        {posts.length === 0 ? (
          <p className="text-slate-400 text-lg">{t.blog.noPosts}</p>
        ) : (
          <div className="space-y-6">
            {posts.map(post => (
              <article key={post.slug} className="card">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                  <time>{new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-brand-700 hover:text-brand-800 font-medium text-sm">
                  {t.blog.readMore} →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const [post, setPost] = useState<BlogMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/posts/${slug}.md`);
        if (!res.ok) throw new Error('Not found');
        const raw = await res.text();
        const parsed = await parsePost(raw, slug!);
        setPost(parsed);
      } catch {
        setPost(null);
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) return null;

  if (!post) {
    return (
      <div className="pt-32 px-4 max-w-4xl mx-auto min-h-screen">
        <Link to="/" className="text-brand-700 hover:text-brand-800">{t.blog.back}</Link>
        <p className="mt-8 text-slate-400 text-lg">404 — Post not found</p>
      </div>
    );
  }

  const html = marked.parse(post.content, { async: false }) as string;

  return (
    <div className="pt-24 px-4 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-brand-700 hover:text-brand-800 font-medium text-sm">
          {t.blog.back}
        </Link>
        <article className="mt-8">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <time>{new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">{post.title}</h1>
          <div
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-700 prose-code:bg-slate-100 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  );
}