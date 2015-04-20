'use strict';

let React = require('react/addons');

// CSS
require('../../../styles/sections/portfolio.scss');

let WebsiteRApp = React.createClass({

  getInitialState: function() {
    return { translate: -60 };
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function() {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({ translate: itemTranslate });
  },

  render: function() {
    let itemStyle = {
      transform: 'translateY(' + this.state.translate + 'px)'
    };

    return (
      <ul className="portfolio">
        <li className="portfolio__item" style={itemStyle}></li>
        <li className="portfolio__item" style={itemStyle}></li>
        <li className="portfolio__item" style={itemStyle}></li>
      </ul>
    );
  }
});

module.exports = WebsiteRApp;
