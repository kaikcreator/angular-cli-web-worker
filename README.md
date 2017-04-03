# WebWorkersFactorial

This is an example on how to update and Angular project (generated with angular-cli) in order to use Web Workers.

The example is a CPU intensive factorial calculator client that compute 50 factorial numbers starting by the number introduced in the form.

**Do you wanna see it in action? Check [the demo](https://kaikcreator.github.io/angular-cli-web-worker/)**

In this repo you will 2 dev branches:

* master: the web workers version
* single-threaded: the single threaded version

## Install
Each branch require their own dependencies. 

You can install them using: `npm install`

## Update code from single-threaded to web workers scenario
If you want to try by yourself:

1. move to single-threaded branch
2. Run `ng eject` to generate the webpack 2 file
3. Run a *diff* with master branch in order to understand the changes.

## Development server (single threaded)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server (web workers)

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


