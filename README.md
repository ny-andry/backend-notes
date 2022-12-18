# Note application

This is the noteApp from FSO.

```bash
├── index.js
├── app.js
├── build
│   └── ...
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js
```

- `index.js` file used for starting the application.
- `app.js` is the application. The responsibility of establishing the connection to the database is in this module.

- `package.json` is a file that is present in the root directory of a Node.js project. It contains metadata about the project, including its dependencies, scripts, and other information. It is used to manage the project's dependencies and scripts, as well as to store information about the project such as the project's name, version, and description.

- `package-lock.json` (or yarn.lock if you are using Yarn as your package manager) is a file that is generated automatically when you install packages in your project using npm or yarn. It contains a detailed, versioned record of all the packages and their dependencies that are installed in the project. It is used to ensure that the same exact versions of packages are installed whenever someone installs the project, even if newer versions of those packages are available. This helps to ensure consistency and reproducibility across different environments.

## build

Running "npm run build" in a front-end project creates a build folder with the optimized production version of the application. This build folder is generated using the build configuration specified in package.json and includes tasks like code linting, testing, and optimization. The build folder typically contains compiled and minified code, along with any necessary assets. It is used as the source when deploying the application to a production environment. The exact contents of the build folder depend on the project's configuration and build process.

## controllers

Event handlers of routes are commonly referred to as controllers. The router is a middleware, that can be used for defining "related routes" in a single place, that is typically placed in its own module.`notes.js` module handle routing.

## models

The `note.js` file under the models directory only defines the Mongoose schema for notes.

## utils

- all printing to the `console` in its own module `logger.js`
- Our custom middleware has been moved to the `middleware.js` module
