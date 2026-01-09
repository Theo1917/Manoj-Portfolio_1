<script>
  import { page } from '$app/stores';
  
  // In a real application, this would fetch data based on the slug
  const blogPosts = {
    'neural-networks-heat-transfer': {
      title: 'Understanding Neural Networks in Heat Transfer',
      date: '2025-12-15',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
      tags: ['Deep Learning', 'Research', 'Engineering'],
      content: `
        <h2>Introduction</h2>
        <p>Heat transfer prediction is a critical aspect of engineering design, particularly in industrial applications where efficiency and safety are paramount. Traditional methods rely on complex mathematical models and computational fluid dynamics simulations that can be time-consuming and computationally expensive.</p>
        
        <h2>The Neural Network Approach</h2>
        <p>By leveraging deep learning techniques, we can create models that learn patterns from historical data and make accurate predictions in real-time. This approach has several advantages:</p>
        <ul>
          <li>Faster computation times compared to traditional CFD simulations</li>
          <li>Ability to handle complex, non-linear relationships</li>
          <li>Continuous improvement through learning from new data</li>
        </ul>
        
        <h2>Implementation Details</h2>
        <p>Our neural network architecture consists of multiple layers designed to capture the intricate relationships between input parameters such as flow rate, temperature, and geometry, and output parameters like heat transfer coefficient and pressure drop.</p>
        
        <pre><code>import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(n_features,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1)
])</code></pre>
        
        <h2>Results and Performance</h2>
        <p>The model achieved an R² score of 0.97 on the test dataset, demonstrating excellent predictive accuracy. The mean absolute percentage error (MAPE) was below 3%, making it suitable for practical engineering applications.</p>
        
        <h2>Conclusion</h2>
        <p>Neural networks represent a powerful tool for heat transfer prediction, offering a balance between accuracy and computational efficiency. As we continue to collect more data and refine our models, we expect further improvements in performance and applicability to diverse scenarios.</p>
      `
    },
    'computer-vision-fitness-posture': {
      title: 'Computer Vision for Fitness: Real-time Posture Detection',
      date: '2025-11-20',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop',
      tags: ['Computer Vision', 'AI', 'Health Tech'],
      content: `
        <h2>The Problem</h2>
        <p>Improper form during exercise is one of the leading causes of workout-related injuries. Many people, especially those new to fitness, struggle to maintain correct posture without constant guidance from a trainer.</p>
        
        <h2>Computer Vision Solution</h2>
        <p>Using pose estimation algorithms like MediaPipe and OpenPose, we can track key body landmarks in real-time and provide instant feedback on form and posture.</p>
        
        <h2>Technical Architecture</h2>
        <p>The system uses a webcam or smartphone camera to capture video, processes each frame through a pose estimation model, and analyzes the angles and positions of key joints to determine if the exercise is being performed correctly.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Real-time pose detection with 30+ FPS</li>
          <li>Support for multiple exercises including squats, push-ups, and deadlifts</li>
          <li>Audio and visual feedback for immediate correction</li>
          <li>Progress tracking and performance analytics</li>
        </ul>
        
        <h2>Future Developments</h2>
        <p>We're working on expanding the exercise library, improving accuracy for diverse body types, and integrating personalized workout recommendations based on user performance data.</p>
      `
    },
    'future-ai-engineering': {
      title: 'The Future of AI in Engineering',
      date: '2025-10-05',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      tags: ['AI', 'Engineering', 'Future Tech'],
      content: `
        <h2>A Paradigm Shift</h2>
        <p>Artificial intelligence is fundamentally changing how engineers approach problem-solving. From design optimization to predictive maintenance, AI technologies are enabling capabilities that were previously impossible.</p>
        
        <h2>Current Applications</h2>
        <p>Today, AI is being used in various engineering domains:</p>
        <ul>
          <li>Generative design for structural optimization</li>
          <li>Predictive maintenance using IoT sensor data</li>
          <li>Quality control through computer vision</li>
          <li>Energy consumption optimization</li>
        </ul>
        
        <h2>Emerging Trends</h2>
        <p>Looking ahead, several exciting trends are shaping the future of AI in engineering, including digital twins, autonomous systems, and AI-driven simulation.</p>
        
        <h2>Challenges and Opportunities</h2>
        <p>While the potential is enormous, there are challenges to overcome, including data quality, model interpretability, and the need for domain expertise to guide AI applications effectively.</p>
      `
    },
    'sveltekit-responsive-apps': {
      title: 'Building Responsive Web Applications with SvelteKit',
      date: '2025-09-12',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      tags: ['Web Development', 'SvelteKit', 'Frontend'],
      content: `
        <h2>Why SvelteKit?</h2>
        <p>SvelteKit is a modern web framework that offers a perfect balance between developer experience and application performance. Unlike traditional frameworks, Svelte compiles your code at build time, resulting in highly optimized JavaScript.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>File-based routing for intuitive project structure</li>
          <li>Built-in SSR and SSG capabilities</li>
          <li>Minimal boilerplate code</li>
          <li>Excellent performance out of the box</li>
        </ul>
        
        <h2>Building a Responsive Layout</h2>
        <p>Creating responsive designs in SvelteKit is straightforward using modern CSS techniques like Grid and Flexbox, combined with Svelte's reactive declarations.</p>
        
        <pre><code>&lt;script&gt;
  let windowWidth = 0;
  $: isMobile = windowWidth < 768;
&lt;/script&gt;

&lt;svelte:window bind:innerWidth={windowWidth} /&gt;

&lt;div class="container" class:mobile={isMobile}&gt;
  &lt;!-- Your content --&gt;
&lt;/div&gt;</code></pre>
        
        <h2>Best Practices</h2>
        <p>To build maintainable and scalable applications, follow these guidelines: organize components logically, use stores for global state, leverage SvelteKit's loading functions, and optimize images and assets.</p>
        
        <h2>Conclusion</h2>
        <p>SvelteKit provides a powerful foundation for building modern web applications. Its simplicity and performance make it an excellent choice for both small projects and large-scale applications.</p>
      `
    }
  };

  $: slug = $page.params.slug;
  $: post = blogPosts[slug] || {};
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>{post.title || 'Blog Post'} - Manoj Srivatsav</title>
  <meta name="description" content={post.title || 'Blog post'} />
</svelte:head>

{#if post.title}
  <article class="blog-post">
    <div class="post-header">
      <a href="/blog" class="back-link">← Back to Blog</a>
      
      <div class="post-hero">
        <img src={post.image} alt={post.title} />
      </div>
      
      <div class="post-meta-wrapper">
        <h1>{post.title}</h1>
        <div class="post-meta">
          <span class="post-date">{formatDate(post.date)}</span>
          <span class="separator">•</span>
          <span class="post-read-time">{post.readTime} read</span>
        </div>
        <div class="post-tags">
          {#each post.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
    
    <div class="post-content">
      {@html post.content}
    </div>
    
    <div class="post-footer">
      <a href="/blog" class="back-to-blog">← Back to all posts</a>
    </div>
  </article>
{:else}
  <div class="not-found">
    <h1>Post Not Found</h1>
    <p>Sorry, the blog post you're looking for doesn't exist.</p>
    <a href="/blog" class="back-link">← Back to Blog</a>
  </div>
{/if}

<style>
.blog-post {
  min-height: 100vh;
  padding-top: 120px;
  background: var(--bg);
}

.post-header {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 5vw;
}

.back-link {
  display: inline-block;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.6;
  margin-bottom: 40px;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 1;
}

.post-hero {
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 60px;
}

.post-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-meta-wrapper h1 {
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.post-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
}

.separator {
  opacity: 0.4;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tag {
  font-size: 0.75rem;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.post-content {
  max-width: 720px;
  margin: 60px auto;
  padding: 0 5vw;
  line-height: 1.8;
  font-size: 1.05rem;
}

.post-content :global(h2) {
  font-size: 2rem;
  font-weight: 400;
  margin: 60px 0 24px 0;
  letter-spacing: -0.01em;
}

.post-content :global(p) {
  margin-bottom: 24px;
  opacity: 0.9;
}

.post-content :global(ul) {
  margin: 24px 0;
  padding-left: 24px;
}

.post-content :global(li) {
  margin-bottom: 12px;
  opacity: 0.9;
}

.post-content :global(pre) {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 24px;
  margin: 32px 0;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.6;
}

.post-content :global(code) {
  font-family: 'Courier New', monospace;
  color: #a8dadc;
}

.post-footer {
  max-width: 720px;
  margin: 80px auto 0;
  padding: 40px 5vw 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.back-to-blog {
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.back-to-blog:hover {
  opacity: 1;
}

.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  text-align: center;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.2rem;
  opacity: 0.6;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .post-meta-wrapper h1 {
    font-size: 2rem;
  }

  .post-content {
    font-size: 1rem;
  }

  .post-content :global(h2) {
    font-size: 1.5rem;
  }

  .post-hero {
    aspect-ratio: 16 / 10;
    margin-bottom: 40px;
  }
}
</style>
