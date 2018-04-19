# 😎 😎 😎 -- hhd storybook -- 😀 😀 😀



## Installation

#### Before you start

* [node](https://nodejs.org/) version should be 6 or above (to check `node -v`) or use [nvm](https://github.com/creationix/nvm)
* [npm](https://www.npmjs.com/) version should be 3 or above (to check `npm --version`)
* [bolt](https://www.npmjs.com/package/bolt)

#### Clone the repo and install

```sh
git clone https://github.com/uixcrazy/hhd-storybook.git
bolt
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

3. Manage packages by [**bolt**](https://www.npmjs.com/package/bolt)

```
npm i -g bolt
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

