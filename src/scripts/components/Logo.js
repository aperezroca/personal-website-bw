'use strict';

let React = require('react/addons');

// CSS
require('../../styles/objects/logo.scss');

let Logo = React.createClass({

  render: function() {
    return (
      <div className="logo">
        <div className="logo__bracket logo__bracket--left"></div>
        <div className="logo__letter"></div>
        <div className="logo__bracket logo__bracket--right"></div>
      </div>
    );
  }
});

module.exports = Logo;
