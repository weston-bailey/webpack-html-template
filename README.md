# 📦 Webpack Vanilla Html Boilerplate

This is template code to serve up a vanilla html website using node.js and webpack. The advantage being modules and all nodejs are easily supported and are transpiled to vanilla js.

## Getting started

* fork and clone this repo
* cd into the directory and run `npm i` to download the required packages
* use `npm run dev` to build and serve the application *NOTE: you will need re-run `npm run dev` to see your changes reflected in the browser*
  
> `./src` contains dev code and the output of webpack can be found in `./dist`

---

#### The following scripts can be run from the `package.json`

`npm run build` 

> uses the `webpack build` command to build the `./src` directory to the `./dist` directory.

`npm run serve` 

> uses the `browser-sync` plugin to serve the `./dist` directory

`npm run dev`

> builds and serves the application

`npm run watch`

> uses `nodemon` to rebuild the application on the on file changes

`npm run open`

> opens the `./dist` folder in chrome without a live server

`npm run test` 

> no testing yet

## Dependencies 

* [webpack](https://webpack.js.org/) -- used to bundle the website together
* [webpack-cli](https://webpack.js.org/api/cli/) -- used to build the website
* [webpack-html-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) -- webpack plugin for building vanilla html sites
* [css-loader (webpack)](https://webpack.js.org/loaders/css-loader/) -- webpack plugin for loading vanilla css
* [style-loader (webpack)](https://webpack.js.org/loaders/style-loader/) -- webpack plugin for loading vanilla css
* [browser-sync](https://browsersync.io/) -- package for running local development servers of the html
* [nodemon](https://www.npmjs.com/package/nodemon) -- file watch utility that re-runs scripts when files change

## Notes

The `./dist` folder is in the `.gitignore` file, but this my have to change for deployment.

## Todos

* write a script to both watch and serve, so the project can be rebuilt on save
* add tests with mocha
