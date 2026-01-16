<script>
  import { activeConstraint } from "$lib/stores/filters";
  export let constraints = [];

  const toggle = (c) => {
    activeConstraint.update(v => (v === c ? null : c));
  };
</script>

<div class="filter">
  <span class="label">Explore by constraint:</span>

  {#each constraints as c}
    <button
      class:active={$activeConstraint === c}
      on:click={() => toggle(c)}
    >
      {c}
    </button>
  {/each}
</div>

<style>
  .filter {
    margin-bottom: 2rem;
    display: flex;
    overflow-x: auto;
    gap: 0.6rem;
    padding-bottom: 0.6rem;
  }

  .filter::-webkit-scrollbar {
    display: none;
  }

  .label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    color: #888;
    margin-bottom: 0.6rem;
  }

  button {
    background: transparent;
    border: 1px solid #333;
    color: #bbb;
    padding: 0.3rem 0.7rem;
    margin-right: 0.4rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.7rem;
    white-space: nowrap;
  }

  button.active {
    background: #fff;
    color: #000;
  }
</style>
