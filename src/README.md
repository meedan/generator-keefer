# <%= name %>

<%= description %>

## Structure

- `src/app`: React cross-browser application.
- `src/chrome`: Sources for the Google Chrome extension.

## How to install

* Ensure you have Node 5
* Copy `config.json.example` to `config.json` and define your configurations
* `npm install`
* `npm rebuild node-sass`
* Or run `npm run install`

## How to build

* `PLATFORM=chrome npm run build`

## How to develop

* The theme files (SASS files) are under `src/app/styles`
* Other development files are under `src/app/`
* In order to reflect your changes, run `PLATFORM=chrome npm run build`

## How to use

### Chrome extension

* Go to Google Chrome / Chromium
* Type `chrome://extensions`
* Hit "Load unpacked extension..."
* Choose the `build/chrome` directory
* An icon will be added to your Google Chrome toolbar

## How to release a new version

* Run `PLATFORM=chrome npm run release`, which will bump version number and create zip files under `releases/` directory

## How to publish a new version

* Run `PLATFORM=chrome npm run publish`, which will upload and publish the item to the internet (e.g., Chrome extension to Chrome store)

## How to test

* Run `npm run test` (you need `ruby` and `rubygems`, and need a file `test/config.yml`)
