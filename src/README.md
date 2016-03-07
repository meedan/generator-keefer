# <%= name %>

<%= description %>

## Dependencies

* Inkscape and ImageMagick (to generate the icons)
* Ngrok (to run the web version publicly)
* Ruby and RubyGems (to run the tests)

## Structure

- `src/app`: React cross-browser application.
- `src/chrome`: Sources for the Google Chrome extension.
- `src/web`: Sources for the web application.

## How to install

* Ensure you have Node 5
* Copy `config.json.example` to `config.json` and define your configurations
* `npm install`
* `npm rebuild node-sass`
* Or run `npm run install`

## How to build

* `PLATFORM=<chrome|web> npm run build`

## How to develop

* The theme files (SASS files) are under `src/app/styles`
* Other development files are under `src/app/`
* In order to reflect your changes, run `PLATFORM=<chrome|web> npm run build`

## How to use

### Chrome extension

* Go to Google Chrome / Chromium
* Type `chrome://extensions`
* Hit "Load unpacked extension..."
* Choose the `build/chrome` directory
* An icon will be added to your Google Chrome toolbar

### Web

* Start a webserver in `build/web` (or run `PLATFORM=web npm run publish`)

## How to release a new version

* Run `PLATFORM=<chrome|web> npm run release`, which will bump version number and create zip files under `releases/` directory

## How to publish a new version

* Run `PLATFORM=<chrome|web> npm run publish`, which will upload and publish the item to the internet (e.g., Chrome extension to Chrome store or a Ngrok server for the web app)

## How to test

* Run `npm run test` (you need `ruby` and `rubygems`, and need a file `test/config.yml`)
