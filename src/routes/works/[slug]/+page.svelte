<script>
  // For now, this is static.
  // Later we can load data dynamically.
  const project = {
    title: 'Heat Transfer Prediction using Neural Networks',
    summary: 'Predicting heat transfer coefficients in a double-pipe heat exchanger using data-driven neural network models.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas'],
    github: 'https://github.com/manojsrivatsav/heat-transfer-ai',
    demo: null,
    year: '2024'
  };
</script>

<section class="case-study">
  <div class="case-hero">
    <img src={project.image} alt={project.title} />
    <div class="case-hero-overlay"></div>
  </div>

  <div class="case-container">
    <div class="case-header">
      <a href="/works" class="back-link">← Back to Works</a>
      <h1>{project.title}</h1>
      <p class="case-summary">{project.summary}</p>
      
      <div class="case-meta">
        <div class="meta-item">
          <span class="meta-label">Year</span>
          <span class="meta-value">{project.year}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Tech Stack</span>
          <div class="tech-tags">
            {#each project.techStack as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </div>
      </div>

      <div class="case-links">
        {#if project.github}
          <a href={project.github} target="_blank" rel="noopener" class="project-link">
            View on GitHub →
          </a>
        {/if}
        {#if project.demo}
          <a href={project.demo} target="_blank" rel="noopener" class="project-link">
            Live Demo →
          </a>
        {/if}
      </div>
    </div>

    <article class="case">

    <div class="block">
      <span class="label">Context</span>
      <p>
        Traditional empirical correlations often fail to generalize across
        varying flow regimes and experimental conditions.
      </p>
    </div>

    <div class="block">
      <span class="label">Problem</span>
      <p>
        Achieve accurate prediction of heat transfer coefficients using
        experimental data while maintaining generalization.
      </p>
    </div>

    <div class="block">
      <span class="label">Approach</span>
      <p>
        Multiple neural network architectures (MLP, CNN, LSTM) were trained
        and evaluated using standardized experimental datasets.
      </p>
    </div>

    <div class="block">
      <span class="label">Outcome</span>
      <p>
        The ANN-based approach significantly reduced prediction error
        compared to conventional methods.
      </p>
    </div>

    <div class="block">
      <span class="label">Learnings</span>
      <p>
        Feature scaling, model selection, and validation strategy were
        critical to achieving reliable performance.
      </p>
    </div>

  </article>
  </div>
</section>

<style>
.case-study {
  min-height: 100vh;
  padding-bottom: 100px;
}

.case-hero {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}

.case-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, var(--bg) 100%);
}

.case-container {
  max-width: 900px;
  margin: -80px auto 0;
  padding: 0 10vw;
  position: relative;
  z-index: 2;
}

.back-link {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-decoration: none;
  color: var(--text);
  opacity: 0.6;
  margin-bottom: 40px;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 1;
}

.case-header {
  margin-bottom: 80px;
}

.case-header h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: 0.12em;
  margin-bottom: 24px;
  line-height: 1.2;
}

.case-summary {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 48px;
}

.case-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  padding: 32px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-label {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.5;
}

.meta-value {
  font-size: 0.9rem;
  letter-spacing: 0.1em;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.case-links {
  display: flex;
  gap: 20px;
}

.project-link {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-decoration: none;
  color: var(--text);
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.case {
  max-width: 720px;
}

.block {
  margin-top: 64px;
}

.label {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 16px;
}

.block p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--muted);
}
</style>
