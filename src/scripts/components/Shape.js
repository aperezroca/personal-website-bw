'use strict';

let React = require('react/addons');

// CSS
require('../../styles/sections/hero.scss');

let Shape = React.createClass({

  getInitialState: function() {
    return { left: this.props.left, top: '100%', rotation: this.props.rotation };
  },

  componentDidMount: function() {
    setTimeout(() => {
      this.setState({
        top: 'calc(' + this.props.top + '% + ' + (Math.random()*200 - 100) + 'px)',
        rotation: this.props.rotation + (Math.round(Math.random()) === 1 ? -45 : 45),
      });
    }, 800);
  },

  render: function() {
    let style = {
          left: this.state.left,
          top: this.state.top,
          transform: 'rotate(' + this.state.rotation + 'deg)'
        },
        classes = 'hero__shape hero__shape--' + this.props.type;

    return (
      <span className={classes} style={style}></span>
    );
  }
});

module.exports = Shape;
