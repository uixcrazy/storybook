# 🐾 🐾 🐾 -- storybook -- 🐾 🐾 🐾

## My issue

làm sao đổi
``` import '../../../utils/stylesheets/normalize.css'; ```
thành ``` import 'core/stylesheets/normalize.css'; ```

Atlaskit Tabs ko load được styles

## Installation

#### Before you start

* [node](https://nodejs.org/) version should be 6 or above (to check `node -v`) or use [nvm](https://github.com/creationix/nvm)
* [npm](https://www.npmjs.com/) version should be 3 or above (to check `npm --version`)
* [lernajs](https://lernajs.io/) or [lerna repo](https://github.com/lerna/lerna)
* [storybook official-storybook](https://github.com/storybooks/storybook/tree/master/examples/official-storybook)

#### Clone the repo and install

```sh
git clone https://github.com/uixcrazy/hhd-storybook.git
lerna bootstrap --hoist
```

To run project on your local: ```npm run storybook```

Then open ```http://localhost:9009/``` to see your app.



## Explanation Front-end tech stack

> It help you create new project by own.

1. [Create React App](https://github.com/facebookincubator/create-react-app)

```
  npx create-react-app hhd-storybook
  cd hhd-storybook
  npm start
  npm run eject
```

2. [storybook](https://storybook.js.org/)

```
  npx storybook
  npm run storybook
```

[Look at sample Storybook for React here --- 💯 easy](https://www.youtube.com/watch?v=va-JzrmaiUM)

3. Manage packages by [**lerna**](https://lernajs.io/)

```
npm install --global lerna
```

**Refs**: [Atlaskit - develop by Atlassian](https://atlaskit.atlassian.com/)  /  [Atlaskit Bitbucket Guide](https://bitbucket.org/atlassian/atlaskit-mk-2)



## Folder Structure (update later)

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  config/
  scripts/
  public/
    index.html
    favicon.ico
  stories/
    ...

  assets/
    styles/
    third-party/
    ...

  core/
  ...

  packages/
    ...

  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```



## Conding Standard

* [eslint](https://eslint.org/docs/user-guide/configuring)
* [airbnb](https://github.com/airbnb/javascript)

