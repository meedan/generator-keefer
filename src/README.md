# <%= name %>

<%= description %>

## Structure

- `src/app`: React cross-browser application.
- `src/browser`: Sources for the extension and Chrome app.

## How to install

* Ensure you have Node 5
* Copy `config.json.example` to `config.json` and define your configurations
* `npm install`
* `npm rebuild node-sass`
* Or run `npm run install`

## How to build

* `npm run build:extension`

## How to develop

* The theme files (SASS files) are under `src/app/styles`
* Other development files are under `src/app/`
* In order to reflect your changes, run `npm run build:extension`

## How to use

* Go to Google Chrome / Chromium
* Type `chrome://extensions`
* Hit "Load unpacked extension..."
* Choose the `build/extension` directory
* An icon will be added to your Google Chrome toolbar

## How to release a new version

* Run `npm run release:extension`, which will bump version number and create zip files under `releases/` directory

## How to publish a new version

* Run `npm run publish:extension`, which will upload and publish the items to Chrome Store
* Alternatively, you can upload the zip files to Chrome Webstore (developer's dashboard)

## How to test

* Run `npm run test` (you need `ruby` and `rubygems`, and need a file `test/config.yml`)
