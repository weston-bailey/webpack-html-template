# 📦 Webpack-Babel Vanilla Html Boilerplate

This is template code to serve up a vanilla html website using node.js and webpack and babel.  The advantage being modules and all nodejs features are easily supported and are transpiled to vanilla js.

It is possible to either build a SPA or use multiple html files.

## Getting started

* fork and clone this repo
* cd into the directory and run `npm i` to download the required packages
* use `npm run start` to build and serve the application 
* Navigate to `localhost:3000` to see the site
* use `npm run test-all` to run all tests in the `./tests` folder

> `./src` contains dev code and the output of webpack can be found in `./dist`

---

#### The following scripts can be run from the `package.json`

`npm run start`

> builds the `src` directory to the `dist` directory and serves on `port 3000`

`npm run build` 

>  runs a production build of the `./src` directory to the `./dist` directory.

`npm run test < file name >` 

> runs any tests found in the file

`npm run test-all` 

> runs all tests found with the filenameing convention `fileName.test.extension`

## Dependencies 

* [webpack](https://webpack.js.org/) -- used to bundle the website together
* [webpack-cli](https://webpack.js.org/api/cli/) -- used to build the website
* [webpack-html-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) -- webpack plugin for building vanilla html sites
* [css-loader (webpack)](https://webpack.js.org/loaders/css-loader/) -- webpack plugin for loading vanilla css
* [style-loader (webpack)](https://webpack.js.org/loaders/style-loader/) -- webpack plugin for loading vanilla css
* [babel](https://babeljs.io/) -- complies the js to ECMAscript 5
* [mocha](https://mochajs.org/) -- for running unit tests
* [chai](https://www.chaijs.com/) -- assertion library for testing

## Todos

* [x] gitignore `./dist`
* [x] get rid of express and related dependacies
* [ ] add scss loader to webpack
* [ ] be able to add an arbitrary amount of html files
