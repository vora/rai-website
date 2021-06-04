# 🚀 Gatsby Notes

Here's some general tips and information about using Gatsby:

- Individual components in **src/pages** is a route (i.e. view)
- Styled components plugin has already been added - do NOT add new CSS files and limit inline styling within JSX
- Use **npm install** for adding new packages (please do not use yarn as dependencies are already in package-lock.json)

# Getting Started

The first step is ensuring you have a version of npm and Node (which we should all have at this point). You'll then need to install the Gatsby CLI:

```
$ npm install -g gatsby-cli
```

To connect to the Contentful Space, you'll need to set the following environmental variables: **CONTENTFUL_TOKEN, CONTENTFUL_SPACE** (use set command in Windows).

To begin development, just run the following:

```
$ gatsby develop
```

And that's it! The site will be hosted at **localhost:8000**.

## Working on Components

Ideally, components should be created in isolation. The reason for this is that Components should be as generic as possible to allow for as many use cases as possible. To do this, we use [Storybook](https://storybook.js.org/).

```shell
npm run storybook
```

Storybook will allow you to develop and test your components in isolation from the rest of the website.

### Linting

Responsible AI website project uses `eslint` to run a linter of javascript and typescript code.

To run the linter, use:

```
npm run lint
```
