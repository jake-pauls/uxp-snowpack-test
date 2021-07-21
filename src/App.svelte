<script>
  import {onMount} from 'svelte';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .App {
    margin: 8px; 
    text-align: center;
  }
  .App code {
    background: #0002;
    color: var(--uxp-host-text-color);
    padding: 4px 8px;
    border-radius: 4px;
  }
  .App-header {
    background-color: var(--uxp-host-background-color);
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }

  sp-body {
    margin: 0.4rem;
  }
</style>

<div class="App">
  <header class="App-header">
    <sp-body>Edit <code>src/App.svelte</code> and save to reload.</sp-body>
    <sp-body>Plugin has been open for <code>{count}</code> seconds.</sp-body>
    <sp-detail>
      <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte
      </a>
    </sp-detail>
  </header>
</div>
