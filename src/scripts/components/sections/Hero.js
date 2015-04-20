'use strict';

let React = require('react/addons');

// CSS
require('../../../styles/sections/hero.scss');

let Logo = require('Logo'),
    Shape = require('Shape');

let Hero = React.createClass({

  getInitialState: function() {
    return { shapes: [] };
  },

  componentDidMount: function() {
    this.initShapes();
  },

  initShapes: function() {
    let shapes = this.state.shapes,
        types = ['square', 'triangle', 'circle'];

    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 5; i++) {
        let type = types[Math.floor(Math.random()*types.length)],
            leftOffset = ((j % 2 === 0) ? -j*10 : j*10) + (100/5)*i + (Math.random()*5) + '%',
            rotation = Math.random()*360;

        shapes.push(
          <Shape key={j + '-' + i}
                 left={leftOffset} top={j*30+10}
                 rotation={rotation} type={type} />
        );
      }
    }

    this.setState({ shapes: shapes });
  },

  render: function() {
    return (
      <div className="hero">
        <div className="hero__logo">
          <Logo />
        </div>
        <h1 className="hero__name">Alejandro Pérez Roca</h1>
        <span className="hero__title">Frontend developer</span>
        {this.state.shapes}
      </div>
    );
  }
});

module.exports = Hero;
