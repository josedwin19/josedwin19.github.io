import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BlogList, BlogPost } from './components/Blog';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Interests />
        <Projects />
        <BlogList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function BlogPostPage() {
  return (
    <>
      <Navbar />
      <BlogPost />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}