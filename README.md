# 📦 Webpack Vanilla Html Boilerplate

This is template code to serve up a vanilla html website using node.js and webpack. The advantage being modules are easily support and are transpiled to vanilla js.

## Getting started

* fork and clone this repo
* cd into the directory and run `npm i` to download the required packages

---

> `./src` contains dev code and the output of webpack can be found in `./dist`

#### The following scripts can be run from the `package.json`

* `npm run test` 

> no testing yet

## Dependencies 

* [webpack](https://webpack.js.org/) -- used to bundle the website together
* [webpack-cli](https://webpack.js.org/api/cli/) -- used to build the website
* [webpack-html-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) -- webpack plugin for building vanilla html sites
* [css-loader (webpack)](https://webpack.js.org/loaders/css-loader/) -- webpack plugin for loading vanilla css
* [style-loader (webpack)](https://webpack.js.org/loaders/style-loader/) -- webpack plugin for loading vanilla css
* [browser-sync](https://browsersync.io/) -- package for running local development servers of the html
* [nodemon](https://www.npmjs.com/package/nodemon) -- file watch utility that re-runs scripts when files change
