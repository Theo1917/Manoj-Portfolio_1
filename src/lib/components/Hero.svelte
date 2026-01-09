<script>
  import { onMount } from 'svelte';

  let x = 0;
  let y = 0;
  let isHovering = false;

  function onMouseMove(e) {
    const { innerWidth, innerHeight } = window;
    x = (e.clientX / innerWidth - 0.5) * 20;
    y = (e.clientY / innerHeight - 0.5) * 20;
  }

  function handleMouseEnter() {
    isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
  }

  onMount(() => {
    const cursor = document.querySelector('.cursor');
    const hero = document.querySelector('.hero');
    
    if (cursor && hero) {
      hero.addEventListener('mouseenter', () => {
        cursor.classList.add('hero-hover');
      });
      
      hero.addEventListener('mouseleave', () => {
        cursor.classList.remove('hero-hover');
      });
    }
  });
</script>

<section class="hero" on:mousemove={onMouseMove} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  <img src="/final.png" alt="Hero" class="hero-image {isHovering ? 'hover' : ''}" style="transform: translate3d({-x}px, {-y}px, 0) scale(1.05);" />

  <div class="hero-overlay"></div>

  <div class="hero-text">
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

  <div class="vignette"></div>
  <div class="grain"></div>
</section>

<style>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--bg);
  font-family: 'Inter', sans-serif;
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

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  z-index: 1;
  transition: all 0.6s ease-out;
  filter: grayscale(0) contrast(1);
}

.hero-image.hover {
  filter: grayscale(0.3) contrast(1.2) brightness(1.1);
  transform: scale(1.08);
}

.hero-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  color: var(--muted);
}

.hero-text h1 {
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  letter-spacing: 0.2em;
  font-weight: 300;
  margin: 0;
  color: var(--text);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero-text h2 {
  margin-top: 1rem;
  font-size: clamp(1rem, 2.4vw, 1.7rem);
  letter-spacing: 0.15em;
  font-weight: 300;
  color: var(--muted);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.scroll-indicator {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: var(--muted);
  z-index: 3;
  animation: fadeUp 2s infinite;
}

.scroll-indicator .line {
  display: block;
  width: 1px;
  height: 40px;
  background: var(--overlay-strong);
  margin: 8px auto 0;
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
  color: var(--muted);
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
  color: var(--text);
}

/* VIGNETTE */
.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0) 35%,
    var(--bg) 100%
  );
  z-index: 4;
  pointer-events: none;
}

/* GRAIN */
.grain {
  position: absolute;
  inset: 0;
  background-image: url("/noise.svg");
  opacity: 0.07;
  z-index: 5;
  pointer-events: none;
}

@keyframes fadeUpY {
  0% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(6px); }
  100% { opacity: 0.3; transform: translateY(0); }
}

@keyframes fadeUp {
  0% { opacity: 0.3; transform: translate(-50%, 0); }
  50% { opacity: 1; transform: translate(-50%, 6px); }
  100% { opacity: 0.3; transform: translate(-50%, 0); }
}
</style>
