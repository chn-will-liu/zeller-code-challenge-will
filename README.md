## Intro

This project is created by `Create React App` with TypeScript enabled and tested on Node.js v20. Please have Node.js `v20+` installed. If you use `nvm` typically this could work.

```
nvm install 20.18.0
nvm use 20.18.0
```

## Setup and run

1. run `npm i` to install required npm packages for this project
2. open `src/graphql/aws-exports.ts` and put the correct `API Key` in place. Normally this could be done by .env so that it's easy to separate keys for dev, test, and prod. To make things simple here we use this aws-exports.ts directly.
3. run `npm start` to start a dev server. It should open a web page with your default browser. If not, try open http://localhost:3000
4. run `npm test -- --coverage --watchAll` to run all tests for this project and print coverage.

## Description

This project uses `Apollo` as the graphQL client and uses the provided `useQuery` hook for commit queries in components.

A simple loading skeleton animation is also implemented. To check out the loading sekeletons, please switch Network throttling to `slow 4G` or `3G` in Chrome DevTool Netowrk tab.

This project uses `styled-component` as the styling solution. As it's relatively simple, no thrid party UI component libraries are used in this project. Instead, it's purely vanilla CSS written in `styled-component`.

In regards to responsiveness, there's not much to be responsive according to the design. Only a `max-width: 600px` is applied to make sure it looks nice on both desktop and mobile devices.

Separating the data fetching and the real render component so that it makes testing a lot easier. Component `ZellerCustomers` can be tested individually because it only depends on props. The logic of calling `useQuery` and rendering loading, error, and success state can also be tested properly by mocking the hook.
