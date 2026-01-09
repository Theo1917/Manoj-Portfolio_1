<script>
  import { onMount } from 'svelte';

  let textTheme = 'light';

  onMount(() => {
    const img = document.querySelector('.hero-image');
    if (!img) return;

    const computeTheme = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 64;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          sum += lum;
        }
        const avg = sum / (data.length / 4);
        textTheme = avg > 150 ? 'dark' : 'light';
      } catch (_) {
        textTheme = 'light';
      }
    };

    if (img.complete) computeTheme();
    else img.addEventListener('load', computeTheme, { once: true });
  });

  const firstPost = {
    title: 'Launching My First Blog',
    slug: 'my-first-blog',
    excerpt: "A short intro on why I'm writing and what I plan to share—AI research notes, engineering learnings, and build-in-public updates.",
    date: '2026-01-08',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=900&h=600&fit=crop',
    tags: ['Hello World', 'AI', 'Engineering'],
    readTime: '2 min'
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>Blog - Manoj Srivatsav</title>
  <meta name="description" content="Technical articles and insights on AI, engineering, and web development" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <img src="/final.png" class="hero-image" alt="Blog Hero" />

  <div class="hero-overlay"></div>

  <div class="hero-text {textTheme}">
    <h1>ENGINEERING INTELLIGENCE —</h1>
    <h2>FOR REAL-WORLD PROBLEMS.</h2>
  </div>

  <div class="scroll-indicator">
    SCROLL TO EXPLORE
    <span class="line"></span>
  </div>

  <div class="hero-footer">
    <span class="side-title shimmer">AI Scientist</span>
    <span class="center-text">
      I design and develop apps that do more than look good—
      they tell stories, evoke emotions, and feel alive.
    </span>
    <span class="side-title shimmer">ML Engineer</span>
  </div>
</section>

<!-- Blog Posts Section -->
<section class="blog-section">
  <div class="blog-header">
    <h2>LATEST ARTICLES</h2>
    <p class="blog-subtitle">Kicking off the blog with what to expect next.</p>
  </div>

  <div class="blog-grid single">
    <a href={`/blog/${firstPost.slug}`} class="blog-card">
      <div class="blog-image">
        <img src={firstPost.image} alt={firstPost.title} loading="lazy" />
        <div class="blog-overlay"></div>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date">{formatDate(firstPost.date)}</span>
          <span class="blog-read-time">{firstPost.readTime} read</span>
        </div>
        <h3>{firstPost.title}</h3>
        <p class="blog-excerpt">{firstPost.excerpt}</p>
        <div class="blog-tags">
          {#each firstPost.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </div>
    </a>
  </div>
</section>

<style>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.22),
    rgba(0, 0, 0, 0.45)
  );
  z-index: 2;
  pointer-events: none;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.65)
  );
  z-index: 2;
}

.hero-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
}

.hero-text h1 {
  font-size: 4rem;
  letter-spacing: 0.2em;
  font-weight: 300;
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-text h2 {
  margin-top: 1rem;
  font-size: 2.2rem;
  letter-spacing: 0.15em;
  font-weight: 300;
  color: rgba(230, 235, 240, 0.85);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-text.dark h1,
.hero-text.dark h2 {
  color: rgba(10, 10, 10, 0.92);
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);
}

.scroll-indicator {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.65);
  z-index: 3;
  animation: fadeUp 2s infinite;
}

.scroll-indicator .line {
  display: block;
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.4);
  margin: 8px auto 0;
}

@keyframes fadeUp {
  0% { opacity: 0.3; transform: translate(-50%, 0); }
  50% { opacity: 1; transform: translate(-50%, 6px); }
  100% { opacity: 0.3; transform: translate(-50%, 0); }
}

/* Footer */
.site-footer {
  position: relative;
  padding: 80px 60px 60px;
  background: radial-gradient(
    ellipse at top,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.9)
  );
  color: rgba(255, 255, 255, 0.65);
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.site-footer::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/noise.svg");
  opacity: 0.03;
  pointer-events: none;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  opacity: 0.8;
  position: relative;
  z-index: 1;
}

.footer-brand {
  margin: 60px 0;
  text-align: center;
  position: relative;
  z-index: 1;
}

.name-main {
  font-size: 2.5rem;
  letter-spacing: 0.3em;
  color: #ffffff;
  display: inline-block;
}

.name-script {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2rem;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.85);
  display: inline-block;
}

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.footer-icons a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  transition: opacity 0.3s ease;
  text-decoration: none;
}

.footer-icons a:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 60px 30px 40px;
  }

  .footer-top {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .name-main {
    font-size: 1.8rem;
  }

  .name-script {
    font-size: 1.4rem;
    display: block;
    margin-left: 0;
    margin-top: 8px;
  }

  .footer-brand {
    margin: 40px 0;
  }
}

.hero-footer {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  z-index: 3;
}

.hero-footer span {
  color: rgba(240, 240, 240, 0.75);
}

.side-title {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.shimmer {
  background: linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,1), rgba(255,255,255,0.35));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3.2s ease-in-out infinite;
  text-shadow: 0 0 18px rgba(255,255,255,0.22);
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-footer .center-text {
  max-width: 520px;
  text-align: center;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Blog Posts Section */
.blog-section {
  min-height: 100vh;
  padding: 120px 10vw;
  background: var(--bg);
}

.blog-header {
  margin-bottom: 80px;
  text-align: center;
}

.blog-header h2 {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-bottom: 16px;
}

.blog-subtitle {
  font-size: 0.9rem;
  opacity: 0.6;
  letter-spacing: 0.08em;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 50px;
  max-width: 1400px;
  margin: 0 auto;
}

.blog-grid.single {
  grid-template-columns: minmax(320px, 640px);
  justify-content: center;
}
.blog-card {
  text-decoration: none;
  color: var(--text);
  display: block;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.blog-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.1);
}

.blog-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3));
  opacity: 0;
  transition: opacity 0.4s;
}

.blog-card:hover .blog-overlay {
  opacity: 1;
}

.blog-content {
  padding: 28px;
}

.blog-meta {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
}

.blog-date::after {
  content: '•';
  margin-left: 16px;
}

.blog-content h3 {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 12px;
  line-height: 1.4;
  transition: opacity 0.3s;
}

.blog-card:hover h3 {
  opacity: 0.8;
}

.blog-excerpt {
  font-size: 0.9rem;
  line-height: 1.7;
  opacity: 0.7;
  margin-bottom: 20px;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.7rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.3s;
}

.blog-card:hover .tag {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 1024px) {
  .hero-text h1 {
    font-size: 3rem;
  }

  .hero-text h2 {
    font-size: 1.8rem;
  }

  .hero-footer {
    padding: 0 2rem;
    font-size: 0.75rem;
  }

  .hero-footer .center-text {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2rem;
    letter-spacing: 0.15em;
  }

  .hero-text h2 {
    font-size: 1.2rem;
    letter-spacing: 0.1em;
  }

  .hero-footer {
    flex-direction: column;
    gap: 16px;
    padding: 0 1.5rem;
    bottom: 30px;
  }

  .hero-footer .center-text {
    max-width: 100%;
  }

  .blog-section {
    padding: 80px 5vw;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .blog-header h2 {
    font-size: 2rem;
  }
}
</style>
