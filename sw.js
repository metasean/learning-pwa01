'use strict';

self.importScripts('node_modules/sw-toolbox/sw-toolbox.js');

self.toolbox.precache(['index.html']);

self.toolbox.router.get('/images/*', toolbox.cacheFirst);

self.toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5,
});
