<script>
  import { page } from '$app/stores';
</script>

<section class="error-page">
  <div class="error-content">
    <h1 class="error-code">{$page.status || 404}</h1>
    <p class="error-message">
      {#if $page.status === 404}
        Page not found
      {:else}
        Something went wrong
      {/if}
    </p>
    <p class="error-description">
      {#if $page.status === 404}
        The page you're looking for doesn't exist or has been moved.
      {:else}
        {$page.error?.message || 'An unexpected error occurred'}
      {/if}
    </p>
    <a href="/" class="error-link">← Back to Home</a>
  </div>
</section>

<style>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

.error-content {
  max-width: 600px;
}

.error-code {
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  margin: 0;
  opacity: 0.1;
  line-height: 1;
}

.error-message {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 20px 0;
}

.error-description {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 40px;
}

.error-link {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-decoration: none;
  color: var(--text);
  padding: 14px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.error-link:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}
</style>
