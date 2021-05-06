# 🚀 Gatsby Notes

Here's some general tips and information about using Gatsby:

- Individual components in __src/pages__ is a route (i.e. view)
- Styled components plugin has already been added - do NOT add new CSS files and limit inline styling within JSX
- Use __npm install__ for adding new packages (please do not use yarn as dependencies are already in package-lock.json)

# Getting Started

The first step is ensuring you have a version of npm and Node (which we should all have at this point). You'll then need to install the Gatsby CLI:

```
$ npm install -g gatsby-cli
```

To connect to the Contentful Space, you'll need to set the following environmental variables: __CONTENTFUL_TOKEN, CONTENTFUL_SPACE__ (use set command in Windows).

To begin development, just run the following:

```
$ gatsby develop
```

And that's it! The site will be hosted at __localhost:8000__.

### Linting

Responsible AI website project uses `eslint` to run a linter of javascript and typescript code.

To run the linter, use:

```
npm run lint
```
