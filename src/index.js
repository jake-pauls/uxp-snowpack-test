import App from './App.svelte';
import { entrypoints } from 'uxp';

let app = new App({
  target: document.body,
});

entrypoints.setup({
  plugin: {
    create(plugin) {
      console.log('Plugin created successfully!', plugin);
    },
    panels: {
      svelte: app,
    },
  },
});

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
