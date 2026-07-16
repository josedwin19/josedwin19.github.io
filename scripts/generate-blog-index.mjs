import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('src/posts');
const outputPath = path.resolve('public/blog-index.json');

if (!fs.existsSync(postsDir)) {
  fs.writeFileSync(outputPath, '[]');
  console.log('No posts directory found, created empty index');
  process.exit(0);
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const posts = files.map(file => {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const parsed = matter(raw);
  const slug = file.replace(/\.(es|en)\.md$/, '').replace(/\.md$/, '');
  return {
    slug,
    title: parsed.data.title || slug,
    date: parsed.data.date || '',
    lang: parsed.data.lang || 'en',
    excerpt: parsed.data.excerpt || '',
    tags: parsed.data.tags || [],
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
console.log(`Generated blog index with ${posts.length} posts`);