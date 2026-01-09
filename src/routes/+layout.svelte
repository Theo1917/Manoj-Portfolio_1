<script>
  import "../styles/global.css";
  import { onMount } from "svelte";
  import { navigating } from "$app/stores";
  import { fade } from "svelte/transition";

  let theme = "dark";
  let headerVisible = true;
  let activeSection = "about";
  let isLoading = true;
  let cursorEl;
  let navOpen = false;
  let activeNavIndex = 0;
  let currentTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }

  function navigateToTarget(target) {
    if (target.startsWith('/')) {
      window.location.href = target;
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        navOpen = false;
      }
    }
  }

  onMount(() => {
    // Update time dynamically
    const updateTime = () => {
      currentTime = new Date().toLocaleString("en-IN", { 
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Enable custom cursor only on desktop (hover + fine pointer)
    const enableCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    cursorEl = document.querySelector('.cursor') || cursorEl;
    if (enableCustomCursor) {
      document.body.classList.add('use-custom-cursor');
      window.addEventListener('mousemove', (e) => {
        if (cursorEl) {
          cursorEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      });

      // Hover enlargement on interactive elements
      let hoverTimeout;
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          hoverTimeout = setTimeout(() => {
            cursorEl && cursorEl.classList.add('hover');
          }, 80);
        });
        el.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimeout);
          cursorEl && cursorEl.classList.remove('hover');
        });
      });
    } else {
      document.body.classList.remove('use-custom-cursor');
      if (cursorEl) cursorEl.style.display = 'none';
    }
    // Ensure initial theme is applied on mount
    document.documentElement.setAttribute("data-theme", theme);

    // Hide loading screen
    setTimeout(() => {
      isLoading = false;
    }, 1800);

    // Scroll progress bar
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressBar) progressBar.style.width = `${scrollPercent}%`;

      // Parallax effect on hero geometry
      const geometry = document.querySelector('.ai-geometry');
      if (geometry) {
        geometry.style.transform = `translateY(${scrollTop * 0.3}px)`;
      }
    });

    // Show header after scroll
    window.addEventListener("scroll", () => {
      headerVisible = window.scrollY > 100;
    });

    // Make header visible on load
    headerVisible = window.scrollY > 100;

    // Scroll-triggered animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Active section tracking
            if (entry.target.id && entry.target.tagName === 'SECTION') {
              activeSection = entry.target.id;
            }
            // Add animation class
            entry.target.classList.add('animate-fade-in', 'animate-slide-up');
            // Animate children with delay
            const children = entry.target.querySelectorAll('[data-animate]');
            children.forEach((child, index) => {
              child.style.animationDelay = `${index * 0.1}s`;
              child.classList.add('animate-fade-in', 'animate-slide-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));

    // Also observe data-animate elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    // Magnetic header nav
    document.querySelectorAll(".header-right a").forEach(link => {
      link.addEventListener("mousemove", e => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        link.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "translate(0, 0)";
      });
    });

    // Keyboard-navigable side navigation
    let lastKeyTime = 0;
    const DOUBLE_PRESS_DELAY = 350;

    document.addEventListener("keydown", (e) => {
      const now = Date.now();
      const isDoublePress = (now - lastKeyTime) < DOUBLE_PRESS_DELAY;
      
      if (e.key === "ArrowRight") {
        if (isDoublePress && !navOpen) {
          navOpen = true;
          lastKeyTime = 0; // Reset to prevent triple-press issues
        } else {
          lastKeyTime = now;
        }
      }
      
      else if (e.key === "ArrowLeft") {
        if (isDoublePress && navOpen) {
          navOpen = false;
          lastKeyTime = 0;
        } else {
          lastKeyTime = now;
        }
      }
      
      else if (e.key === "ArrowDown" && navOpen) {
        e.preventDefault();
        activeNavIndex = (activeNavIndex + 1) % 4;
      }
      
      else if (e.key === "ArrowUp" && navOpen) {
        e.preventDefault();
        activeNavIndex = (activeNavIndex - 1 + 4) % 4;
      }
      
      else if (e.key === "Enter" && navOpen) {
        e.preventDefault();
        const items = [
          { label: "About", target: "/#about" },
          { label: "Works", target: "/works" },
          { label: "Blog", target: "/blog" },
          { label: "Contact", target: "/#contact" }
        ];
        navigateToTarget(items[activeNavIndex].target);
      }
    });
  });
</script>

<div class="scroll-progress"></div>

<!-- Keyboard-navigable Side Navigation -->
<nav class="side-nav" class:open={navOpen}>
  <ul>
    {#each [
      { label: "About", target: "/#about" },
      { label: "Works", target: "/works" },
      { label: "Blog", target: "/blog" },
      { label: "Contact", target: "/#contact" }
    ] as item, i}
      <li 
        class="nav-item" 
        class:active={i === activeNavIndex}
        on:click={() => navigateToTarget(item.target)}
        on:keydown={(e) => e.key === 'Enter' && navigateToTarget(item.target)}
        tabindex="0"
        role="button"
        aria-label={item.label}
      >
        {item.label}
      </li>
    {/each}
  </ul>
</nav>

<!-- Global custom cursor -->
<div class="cursor" bind:this={cursorEl}></div>

{#if isLoading}
  <div class="loading-screen">
    <div class="loader-wrap">
      <div class="loader"></div>
      <p class="loader-name">Manoj Srivatsav</p>
      <p class="loader-sub">Clarity · Precision · Intent</p>
    </div>
  </div>
{/if}

<header class="site-header {headerVisible ? 'visible' : ''}">
  <div class="header-left">
    <span class="dot"></span>
    <span class="logo">MS</span>
  </div>
</header>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme"></button>

<slot />

<!-- Footer -->
<footer class="site-footer">
  <div class="footer-top">
    <span>© 2026 Manoj Srivatsav</span>
    <span class="email">manojsrivatsav2006@gmail.com</span>
    <span class="location">{currentTime} · IST</span>
  </div>

  <div class="footer-brand">
    <span class="name-main">Manoj Srivatsav</span>
  </div>

  <div class="footer-icons">
    <a href="https://github.com/Theo1917" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/manoj-srivatsav-4b5a50301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.949v5.438h-3.554s.047-8.812 0-9.728h3.554v1.375c.428-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.384 3.704 4.356v5.589zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.915-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.915 1.71zm1.575 11.597H3.762V9.724h3.15v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    </a>
    <a href="https://discord.com/users/1138101089967808594" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.445.865-.607 1.252a18.27 18.27 0 00-5.487 0c-.162-.387-.399-.877-.61-1.252a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.085-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106c-.658-.249-1.282-.578-1.876-.953a.077.077 0 00-.009-.128c.126-.094.252-.192.372-.291a.074.074 0 00.03-.104c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 00.033.103c.12.099.246.198.373.292a.077.077 0 00-.006.127c-.595.375-1.218.704-1.877.953a.077.077 0 00-.041.107c.359.719.769 1.385 1.226 1.994a.076.076 0 00.084.028 19.862 19.862 0 006.002-3.03.077.077 0 00.032-.054c.5-4.786-.838-8.95-3.549-12.676a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.157.964 2.157 2.157c0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.964-2.157 2.157-2.157c1.193 0 2.157.964 2.157 2.157c0 1.191-.964 2.156-2.157 2.156z"/>
      </svg>
    </a>
  </div>
</footer>

<style>
  /* Side Navigation */
  .side-nav {
    position: fixed;
    top: 50%;
    right: -320px;
    width: 260px;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.1);
    border-left: 2px solid var(--overlay-mid);
    border-radius: 12px 0 0 12px;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: right 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 10000;
    backdrop-filter: blur(18px);
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
    padding: 40px 0;
  }

  .side-nav.open {
    right: 0;
  }

  .side-nav ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .nav-item {
    padding: 12px 30px;
    opacity: 0.5;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    text-align: left;
  }

  .nav-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: var(--text);
    transform: scaleY(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .nav-item.active {
    opacity: 1;
    background: var(--overlay-weak);
    border-radius: 4px;
  }

  .nav-item.active::before {
    transform: scaleY(1);
  }

  .nav-item:hover {
    opacity: 0.8;
    background: var(--overlay-weak);
  }

  /* Footer */
  .site-footer {
    position: relative;
    padding: 80px 60px 60px;
    background: radial-gradient(
      ellipse at top,
      var(--overlay-weak),
      var(--bg)
    );
    color: var(--muted);
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
    font-size: 3rem;
    letter-spacing: 0.15em;
    font-weight: 300;
    color: var(--text);
    display: inline-block;
    font-family: 'Playfair Display', 'Georgia', serif;
    text-transform: capitalize;
  }

  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
    z-index: 1;
  }

  .footer-icons a {
    color: var(--muted);
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

  /* Navigation Box */
  .nav-box {
    flex-shrink: 0;
    width: 220px;
    padding: 22px 26px;
    
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    
    font-family: "Times New Roman", Times, serif;
    color: #e0e0e0;
    
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
    
    opacity: 0.85;
    transition: opacity 0.3s ease, transform 0.3s ease;
    height: fit-content;
  }

  .nav-box:hover {
    opacity: 1;
    transform: scale(1.02);
  }

  .nav-box h4 {
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #ffffff;
  }

  .nav-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-box li {
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.85;
  }

  .nav-box li::before {
    content: "• ";
    color: #00e5ff;
    margin-right: 6px;
  }

  @media (max-width: 1024px) {
    .nav-box {
      width: 100%;
      margin-top: 30px;
    }

    .nav-box:hover {
      transform: none;
    }
  }

  @media (max-width: 1200px) {
    .keybindings-help {
      position: static;
      width: 100%;
      margin-top: 30px;
    }
  }

  @media (max-width: 768px) {
    .keybindings-help {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
