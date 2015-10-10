Package.describe({
  name: 'alchemy',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'wraps alchemy npm package for meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('alchemy-vision.js',['server']);
  api.export('Alchemy');
  api.export('util');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alchemy');
  api.addFiles('alchemy-tests.js');
});
