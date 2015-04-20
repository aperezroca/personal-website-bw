'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var WebsiteRApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WebsiteRApp = require('../../../src/scripts/components/WebsiteRApp.js');
    component = React.createElement(WebsiteRApp);
  });

  it('should create a new instance of WebsiteRApp', function () {
    expect(component).toBeDefined();
  });
});
