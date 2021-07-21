# uxp-snowpack-test 

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### yarn watch

Alternative watch method, uses nodemon to track file changes and then executes `snowpack build` to rebundle JS

## Steps to Reproduce UXP Bug

#### Snowpack Watcher

1. Load plugin into UXP and enable 'watch' mode

2. Run the development environment in watch mode, the plugin build output will be put into a `build` directory

```
$ yarn watch
```

3. Make a change to `src/App.svelte` in and wait for rebuild

4. Changes aren't reflected or updated in UXP panel

5. Verify that the `build/dist/App.svelte.js` file changes on rebuilds

6. Changes made in `src` are reflected in the build output 

#### Nodemon

1. Load plugin into UXP and enable 'watch' mode

2. Run the development environment in watch mode using **nodemon**, the plugin build output will still be put into a `build` directory

```
$ yarn nodemon
```

3. Make a change to `src/App.svelte` in and wait for rebuild

4. Changes aren't reflected or updated in UXP panel

5. Verify that the `build/dist/App.svelte.js` file changes on rebuilds

6. Changes made in `src` are reflected in the build output 