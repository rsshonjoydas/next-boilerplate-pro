[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Next Boilerplate
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/next-boilerplate-pro">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/next-boilerplate-pro/tree/main">CodeSandbox</a></h3></div>
  <div align="center"><h3>Project Live: <a href="https://next-boilerplate-pro.vercel.app/">Vercel</a></h3></div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Introduction](#introduction)
- [How to Run](#how-to-run)
- [Contact](#contact)

<!-- HOW TO RUN -->

## Introduction

This readme file aims to provide comprehensive documentation of the Next Boilerplate project, including instructions on how to run it, set up Git hooks and Husky, and use a standardized Git commit message.

## How to Run

To run this project on your local computer, please follow these steps:

1. Clone this repository by running the following command:

   ```sh
   git clone git@github.com:rsshonjoydas/next-boilerplate-pro.git
   ```

2. Install the project using yarn by running:

   ```
   yarn install
   ```

3. After the installation is complete, the app should be available at http://localhost:3000 in your web browser.

## Git hooks and husky

Git hooks are scripts that run automatically when certain Git events occur, such as committing or pushing changes to a repository. Husky is a tool that allows developers to easily set up Git hooks in their projects.

To enable Git hooks and Husky in this project, follow these instructions:

1. Install configuration packages in your devDependencies by running:

   ```sh
   yarn add husky lint-staged commitlint @commitlint/config-conventional --dev
   ```

2. Enable Husky hooks by running:

   ```sh
   yarn husky install
   ```

3. Let's set up lint-staged in the `package.json` file so that it runs Prettier on JS files:

   ```json
   {
     "scripts": {
       "prepare": "husky install"
     },
     "lint-staged": {
       "**/*.{ts,tsx}": ["prettier --write --ignore-unknown", "eslint --fix"]
     }
   }
   ```

4. Add a pre-commit hook to run before the code is committed by running:

   ```sh
   yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
   yarn husky add .husky/pre-commit "yarn validate-branch-name"
   yarn husky add .husky/pre-commit "yarn lint-staged"
   ```

5. Add a pre-push hook to run before the code is pushed by running:

   ```sh
   yarn husky add .husky/pre-push "yarn build"
   ```

###### Git commit message

> feat, fix, docs, style, refactor, test, chore, perf, ci, build and temp.

| Type     | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| feat     | A new feature.                                                                                          |
| fix      | A bug fix.                                                                                              |
| docs     | Documentation only changes.                                                                             |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). |
| refactor | A code change that neither fixes a bug nor adds a feature.                                              |
| test     | Adding missing tests or correcting existing ones.                                                       |
| chore    | Changes to the build process or auxiliary tools and libraries such as documentation generation.         |
| perf     | A code change that improves performance.                                                                |
| ci       | Changes to your CI configuration files and scripts.                                                     |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).    |
| temp     | Temporary commit that won't be included in your CHANGELOG.                                              |

- `type` is the type of change being made (e.g., feat, fix, docs, style, refactor, test, chore, perf, ci, build, or temp)
- `scope` is an optional field specifying the scope of the change (e.g., page, module, or component)
- `subject` is a brief summary of the

###### Skipping Hooks

In the terminal, you can bypass hooks by adding the --no-verify option, like in this example:

```sh
git commit -m "skipping hooks" --no-verify
```

  <!-- CONTACT -->

## Contact

Shonjoy Das - [rsshonjoy@gmail.com](mailto:rsshonjoy@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
