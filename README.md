## Available commands

- `npm install` get all the related NPM packages
- `serve` from the project directory
- to check performance, _with a server running_:  
  - `npm run lighthouse-dev` _OR_
  - `lighthouse http://localhost:<PORT-NUM> --output-path="./lighthouse-results.html" --view`
  - _note_: must use http://localhost or the ServiceWorker won't load because of a SecurityError


## Creating this PWA

Largely followed https://medium.com/samsung-internet-dev/a-beginners-guide-to-making-progressive-web-apps-beb56224948e

- created a minimal html page
- `npm init`
- `npm install serve` // provides a neat interface for listing the directory's contents and switching into sub folders.
- `npm install lighthouse` // "Auditing, performance metrics, and best practices for Progressive Web Apps"
- the icon is a mod of https://thenounproject.com/search/?q=emotions&i=582951 by https://thenounproject.com/magicon
- customized icon with GIMP
- created icons with https://www.favicon-generator.org/
- created manifest with https://tomitm.github.io/appmanifest/
- had to explicitly create 512x512 icon and add it to the manifest's icon list
- `npm install sw-toolbox`
- added `sw.js`


Ongoing
- update precache list in `sw.js`: `toolbox.precache`
- instead of straight caching, e.g. show a specific offline page, http://www.pwabuilder.com/generator
- figure out ServiceWorker registration situation
