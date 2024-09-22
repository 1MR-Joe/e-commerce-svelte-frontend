# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Learning
## Stores
Svelte stores are a reactive state management feature in Svelte that allow you to share state between different components and keep track of reactive data. They are primarily used to manage and react to changes in data across multiple components, without needing to pass props through several layers of components.

### Key concepts of svelte stores
1. Reactivity: Svelte components automatically react to changes in stores, so if the value of a store changes, any component that uses it will update automatically.

2. Global State: Stores can be used to hold global data that multiple components can access and modify. This is especially useful for things like authentication status, user preferences, or UI state (e.g., modals or themes).

3. Ease of Use: Svelte stores provide a simple and declarative way to handle state, making it easy to bind values to variables and update the UI when state changes.