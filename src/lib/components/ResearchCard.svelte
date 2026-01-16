<script>
  import { isMobile } from "$lib/stores/device";
  export let work;
  let open = false;
</script>

<div class="card">
  <img src={work.image} alt={work.title} />

  <div
    class="content"
    on:mouseenter={() => !$isMobile && (open = true)}
    on:mouseleave={() => !$isMobile && (open = false)}
  >
    <h2 class="project-title">{work.title}</h2>
    <p class="question">{work.question}</p>

    {#if $isMobile}
      <button class="expand" on:click={() => (open = !open)}>
        {open ? "Hide details" : "View research →"}
      </button>
    {/if}

    {#if open}
      <div class="research reveal">
        <section>
          <h4>Problem</h4>
          <p>{work.problem}</p>
        </section>

        <section>
          <h4>Hypothesis</h4>
          <p>{work.hypothesis}</p>
        </section>

        <section>
          <h4>Model</h4>
          <p>{work.model}</p>
        </section>

        <section class="failure">
          <h4>What Didn't Work</h4>
          <p>{work.failure}</p>
        </section>

        <section class="insight">
          <h4>Key Insight</h4>
          <p>{work.insight}</p>
        </section>
      </div>
    {/if}

    <div class="constraints">
      {#each work.constraints as c}
        <span>{c}</span>
      {/each}
    </div>

    <div class="tech">
      {#each work.tech as t}
        <span>{t}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .card {
    background: #0b0b0b;
    border: 1px solid #222;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    filter: grayscale(1);
  }

  .content {
    padding: 1.2rem;
  }

  .project-title {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    letter-spacing: normal;
    text-transform: none;
    color: var(--text);
  }

  .question {
    color: #9ca3af;
    font-style: italic;
    margin-bottom: 0.8rem;
  }

  .research {
    border-left: 2px solid #333;
    padding-left: 1rem;
    margin-top: 1rem;
  }

  .reveal {
    opacity: 0;
    transform: translateY(6px);
    animation: reveal 0.3s ease forwards;
  }

  @keyframes reveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  section {
    margin-bottom: 0.8rem;
  }

  h4 {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    color: #aaa;
    text-transform: uppercase;
  }

  .failure h4 {
    color: #f87171;
  }

  .insight h4 {
    color: #34d399;
  }

  .constraints span,
  .tech span {
    display: inline-block;
    font-size: 0.7rem;
    margin-right: 0.4rem;
    margin-top: 0.4rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid #333;
    border-radius: 999px;
  }

  .expand {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 0.85rem;
    margin: 0.6rem 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    img {
      filter: none;
    }

    .card:hover {
      transform: none;
    }
  }
</style>
