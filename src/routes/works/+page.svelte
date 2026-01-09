<script>
  const projects = [
    {
      title: 'Heat Transfer Prediction',
      slug: 'heat-transfer-ai',
      description: 'Neural network-based modeling of heat transfer in double-pipe heat exchangers.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
      tags: ['Deep Learning', 'Python', 'TensorFlow']
    },
    {
      title: 'Fitness Posture Correction',
      slug: 'fitness-posture-ai',
      description: 'AI-driven posture detection and correction system for gym exercises.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'PyTorch', 'OpenCV']
    }
  ];
</script>

<section class="section show works-section">
  <div class="works-header">
    <h2>SELECTED WORKS</h2>
    <p class="works-subtitle">Exploring AI applications from research to implementation</p>
  </div>

  <div class="works">
    {#each projects as project}
      <a href={`/works/${project.slug}`} class="work-card">
        <div class="work-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div class="work-overlay"></div>
        </div>
        <div class="work-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="work-tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<div class="section-divider"></div>

<style>
.works-section {
  min-height: 100vh;
  padding: 140px 10vw;
}

.works-header {
  margin-bottom: 80px;
}

.works-header h2 {
  margin-bottom: 16px;
}

.works-subtitle {
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  opacity: 0.75;
  letter-spacing: 0.06em;
  line-height: 1.7;
}

.works {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: clamp(36px, 5vw, 72px);
  max-width: 1200px;
}

.work-card {
  text-decoration: none;
  color: var(--text);
  display: block;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
}

.work-card:hover {
  transform: translateY(-8px);
}

.work-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 4px;
  background: var(--overlay-weak);
  margin-bottom: 24px;
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.work-card:hover .work-image img {
  transform: scale(1.05);
}

.work-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, var(--overlay-strong));
  pointer-events: none;
}

.work-content h3 {
  font-size: clamp(1.25rem, 1.8vw, 1.45rem);
  letter-spacing: 0.08em;
  margin: 0 0 12px 0;
}

.work-content p {
  margin: 0 0 20px 0;
  font-size: clamp(0.98rem, 1.4vw, 1.1rem);
  line-height: 1.7;
  opacity: 0.85;
}

.work-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  padding: 6px 12px;
  background: var(--overlay-weak);
  border: 1px solid var(--overlay-mid);
  border-radius: 3px;
}

@media (max-width: 900px) {
  .works {
    grid-template-columns: 1fr;
  }
}
</style>
