<script>
  import { works } from "$lib/data/works";
  import ResearchCard from "$lib/components/ResearchCard.svelte";
</script>

<section class="section show works-section">
  <div class="works-header">
    <h2>SELECTED WORKS</h2>
    <p class="works-subtitle">Exploring AI applications from research to implementation</p>
  </div>

  <div class="timeline">
    {#each works as work}
      <div class="node">
        <span class="stage">{work.stage}</span>
        <ResearchCard {work} />
      </div>
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-left: 1px solid #222;
  padding-left: 2rem;
}

.node {
  position: relative;
}

.node::before {
  content: "";
  position: absolute;
  left: -2.4rem;
  top: 1rem;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
}

.stage {
  font-size: 0.7rem;
  color: #888;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.8rem;
}
</style>
