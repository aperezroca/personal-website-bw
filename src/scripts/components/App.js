'use strict';

let React = require('react/addons');

let Hero = require('sections/Hero'),
    Portfolio = require('sections/Portfolio');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.scss');

let App = React.createClass({

  render: function() {
    return (
      <div className="main">
        <Hero />
        <Portfolio />
      </div>
    );
  }
});

module.exports = App;
