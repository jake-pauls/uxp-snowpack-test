/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte', 
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: false,
        extendConfig: (config) => {
          config.externals = {
            uxp: 'commonjs2 uxp',
            photoshop: 'commonjs2 photoshop',
          };
          config.output.filename = '[name].js';

          return config
        }
      }
    ]
  ],
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    external: ['uxp', 'photoshop'],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
