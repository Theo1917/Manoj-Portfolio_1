<script>
  import { onMount } from "svelte";
  import Hero from "$lib/components/Hero.svelte";

  let visible = false;
  let formData = { name: '', email: '', message: '' };
  let formErrors = {};
  let formMessage = '';
  let isSubmitting = false;

  const reveal = (node) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
      
    );

    observer.observe(node);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) return;

    isSubmitting = true;
    formMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        formMessage = 'Message sent successfully! I\'ll get back to you soon.';
        formData = { name: '', email: '', message: '' };
        
        setTimeout(() => {
          formMessage = '';
        }, 5000);
      } else {
        formMessage = result.error || 'Error sending message. Please try again.';
      }
    } catch (error) {
      console.error('Form error:', error);
      formMessage = 'Error sending message. Please check your connection and try again.';
    } finally {
      isSubmitting = false;
    }
  };

  const downloadResume = () => {
    // Replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manoj_Srivatsav_Resume.pdf';
    link.click();
  };

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.15 });

    document.querySelectorAll(".section").forEach(s =>
      observer.observe(s)
    );

    // Cursor logic moved to global layout

    /* ======================
       Refined Magnetic Nav
    ====================== */
    const MAGNET_RADIUS = 90;
    const MAGNET_STRENGTH = 0.18;

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('mousemove', e => {
        const rect = link.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAGNET_RADIUS) {
          link.style.transform = `translate(${dx * MAGNET_STRENGTH}px, ${dy * MAGNET_STRENGTH}px)`;
        }
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0)';
      });
    });
  });
</script>

<!-- Global cursor is rendered in layout -->

<Hero />

<nav>
  <a href="#about">ABOUT</a>
  <a href="#works">WORKS</a>
  <a href="#contact">CONTACT</a>
</nav>

<section id="about" class="section about">
  <span class="section-index">01</span>

  <span class="about-label">(About.)</span>

  <div class="about-wrapper">
    <div class="about-main">
      <span class="section-title">About</span>

      <h1>Hey there! I'm Manoj.</h1>

      <p>
        I'm a 21 year old who likes <a href="/blog">building</a> and exploring ideas.
      </p>

      <p>
        I tend to appreciate small and often overlooked things in life,
        and I'm in a constant quest for deeper understanding.
      </p>

      <a href="/blog" class="learn-more">↗ Learn More</a>
    </div>

    <!-- Navigation Box (Right Side) -->
    <div class="nav-box">
      <h4>Navigation</h4>
      <ul>
        <li>→ Open Menu</li>
        <li>← Close Menu</li>
        <li>↑ ↓ Navigate</li>
        <li>Enter Select</li>
      </ul>
    </div>
  </div>

  <div class="about-stats" data-animate>
    <div>
      <strong>0</strong>
      <span>Years<br />Experience</span>
    </div>
    <div>
      <strong>10+</strong>
      <span>Projects<br />Completed</span>
    </div>
    <div>
      <strong>Multiple</strong>
      <span>AI Models<br />Built</span>
    </div>
    <div>
      <strong>∞</strong>
      <span>Curiosity<br />Driven</span>
    </div>
  </div>

  <div class="skills-section">
    <h3>Technologies & Skills</h3>
    <div class="skills-grid" data-animate>
      <div class="skill-tag">Python</div>
      <div class="skill-tag">TensorFlow</div>
      <div class="skill-tag">PyTorch</div>
      <div class="skill-tag">Scikit-learn</div>
      <div class="skill-tag">Neural Networks</div>
      <div class="skill-tag">Deep Learning</div>
      <div class="skill-tag">Computer Vision</div>
      <div class="skill-tag">NLP</div>
      <div class="skill-tag">Data Analysis</div>
      <div class="skill-tag">Machine Learning</div>
      <div class="skill-tag">Research</div>
      <div class="skill-tag">Optimization</div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section class="manifesto {visible ? 'visible' : ''}" use:reveal>
  <div class="manifesto-grid">
    <div class="manifesto-bg">ENGINEER</div>

    <div class="manifesto-content" data-animate>
      <p class="manifesto-line">
        Engineered with logic.
      </p>

      <div class="manifesto-divider"></div>

      <p class="manifesto-line">
        Designed with intent.
      </p>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section id="works" class="section">
  <span class="section-index">02</span>
  <h2>WORKS</h2>

  <p data-animate>
     Heat Transfer Prediction using Neural Networks<br />
     AI-based Fitness Posture Correction System<br />
     Smart Home Intelligence & Automation
  </p>

  <a href="/works" class="works-link" data-animate>View all works →</a>
</section>

<div class="section-divider"></div>

<section class="statement">
  <p class="statement-line">
    Building intelligent systems with clarity, precision, and intent.
  </p>
</section>

<div class="section-divider"></div>

<section id="contact" class="section">
  <span class="section-index">03</span>
  <h2>CONTACT</h2>
  <p data-animate>
    Interested in collaborating or discussing research?
    Let's connect.
  </p>

  <button class="resume-btn" on:click={downloadResume}>
    <span class="resume-icon">↓</span>
    Download Resume
  </button>

  <form class="contact-form" on:submit={handleSubmit}>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        bind:value={formData.name}
        disabled={isSubmitting}
      />
      {#if formErrors.name}
        <span class="form-error">{formErrors.name}</span>
      {/if}
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="your@email.com"
        bind:value={formData.email}
        disabled={isSubmitting}
      />
      {#if formErrors.email}
        <span class="form-error">{formErrors.email}</span>
      {/if}
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea
        id="message"
        placeholder="Tell me about your project..."
        bind:value={formData.message}
        disabled={isSubmitting}
      ></textarea>
      {#if formErrors.message}
        <span class="form-error">{formErrors.message}</span>
      {/if}
    </div>

    {#if formMessage}
      <div class="form-message" class:success={!formMessage.includes('Error')} class:error={formMessage.includes('Error')}>
        {formMessage}
      </div>
    {/if}

    <button type="submit" class="submit-btn" disabled={isSubmitting}>
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  </form>
</section>

<div class="section-divider"></div>

<style>
/* Nav moved outside hero */
nav {
  display: flex;
  gap: 40px;
  margin-top: 60px;
  justify-content: center;
}

nav a {
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  text-decoration: none;
  color: var(--text);
  transition: opacity 0.3s var(--ease);
  position: relative;
}

nav a:hover {
  opacity: 0.6;
}

/* About section styling */
:global(.about) {
  display: flex !important;
  align-items: flex-start !important;
  gap: 40px !important;
  flex-wrap: nowrap !important;
}

:global(.about-content) {
  flex: 1;
  min-width: 300px;
}

:global(.keybindings-help) {
  flex-shrink: 0;
  width: 220px;
}

:global(.about-stats),
:global(.skills-section) {
  width: 100%;
}

@media (max-width: 1024px) {
  :global(.about) {
    flex-wrap: wrap !important;
  }

  :global(.keybindings-help) {
    width: 100% !important;
    max-width: 100% !important;
  }
}
</style>
