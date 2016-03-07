## Keefer

This is a [Yeoman](http://yeoman.io/) generator that creates a React.js/Redux web application following some Meedan guidelines.

### Features

* Technologies: React.js, Redux, Gulp, SASS
* Platforms: Compiles as Google Chrome extension (that can be invoked from toolbar or context menu) or as a web application
* Documentation: generates license and README
* NPM scripts for automation: tasks to compile code as Chrome extension or web application, pack the code, publish extension to Chrome store or local/Ngrok web server and to run tests for all platforms
* Automated tests: Automated tests infrastructure based on RSpec, Selenium and PhantomJS. Already implements helpers that install the current local version of the Chrome extension and call it from the toolbar and that will start a web server for the web application and test it from the browser
* Components: includes components for select field (with auto-complete, multi-selection and that remembers the last choice), message screen, URL embed, confirmation window, close button
* Platform abstraction: the application has acccess to the current URL and to a local storage engine, regardless the platform
* Theming: Just write the theme in SASS and it will be compiled the right way depending on the platform... also, just add an SVG logo and it will generate the PNGs in all sizes required by the platform
* Routing: The root component that is generated is a router, that given a view, renders the right component
* Git: Creates a local Git repository automatically

### How to use this template

* Define settings in `config.yml`
* Install Yeoman `npm install -g yo`
* Create the generator `npm link`
* Generate your application `yo keefer`
* Or just run `./try` to test it out!

### How to implement your application

* Add dependencies to `package.json`
* Add configurations to `config.json.example`
* Add a `logo.svg` to `src/assets/img/logo`
* If your application connects to external APIs or services, or load scripts, images and styles from external origins, you need to add their hosts to `manifest.json.example`, sections `permissions` and `content_security_policy`
* Your code should be implemented in `src/app`... there are some examples there, check for the `@Change` annotations (`npm run change`)

### How to add a new platform

* Add the compilation scripts to `src/package.json`
* Add the Gulp tasks to the Gulpfile at `src`
* Set it up in `src/webpack/config.js`
* Document it in the `src/README.md`
* Add the specific code to `src/src/<platform>`
* Implement the test structure (e.g., load the application) at `src/test`
