<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/logo_wingsuit_c_it.svg" width="240px">
</p>

### Wingsuit is an open source design system to build [UI Patterns](https://www.drupal.org/project/ui_patterns) (and|or) Twig Components with [Storybook](https://storybook.js.org/) for Drupal.

1.  Describe, develop and test your Pattern in storybook with [twing](https://www.npmjs.com/package/twing).
1.  Use the same pattern in Drupal with UI Patterns without any presenter pattern
1.  Tailwind + Alpinejs for rapid development and 100% page speed
1.  Bundled Webpack base configuration to keep everything up to date.

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [NPM `^5`, `^6`](https://www.npmjs.com/)
- [PHP `^7.0.0`](https://php.net)


## Quickstart

1. To install run inside `themes/custom`:

```bash
npx @wingsuit-designsystem/cli init
```

1. Then `cd wingsuit/` and run:

#### NPM
To start storybook
```bash
npm run dev:storybook
```
To start drupal
```bash
npm run dev:drupal
```
#### YARN
To start storybook
```bash
yarn dev:storybook
```
To start drupal
```bash
yarn dev:drupal
```
## Generate new pattern
```bash
yarn ws generate-component
```
## Develop Wingsuit
To develop Wingsuit you need `yarn`.
1. Clone repository:

```bash
git clone git@github.com:wingsuit-designsystem/wingsuit.git
yarn bootstrap
yarn build
```

1. To start storybook `cd packages/wingsuit` and run:

```bash
yarn run dev:storybook
```

1. To start drupal `cd packages/wingsuit` and run:

```bash
npm run dev:drupal
```
## Wingsuit is inspired by [Particle](https://github.com/phase2/particle) from [Phase2](https://www.phase2technology.com/)

