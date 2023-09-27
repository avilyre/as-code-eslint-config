# As Code Eslint Config

My Eslint custom settings

### Features

- *:pencil: Eslint*
- *:pencil: Prettier*
- *:pencil: React | React Hooks*
- *:pencil: NodeJS*

### Integrating into your project
```javascript
  // Install the dependency in your project
  $ npm i @as-code/eslint-config --save-dev

  // Create an eslint file
  $  .eslintrc.json
```
And paste the following code into the file for react application or node:

```javascript
  {
    // For react project
    "extends": "@as-code/eslint-config/react"
  }
```
Or
```javascript
  {
    // If you are creating a node application
    "extends": "@as-code/eslint-config/node"
  }
```