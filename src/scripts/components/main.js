'use strict';

let React = require('react'),
    Router = require('react-router'),
    Route = Router.Route;

let App = require('App');

let content = document.getElementById('content');

let routes = (
  <Route handler={App} path="/"/>
);

Router.run(routes, Router.HistoryLocation,
  (Handler) => React.render(<Handler/>, content));
