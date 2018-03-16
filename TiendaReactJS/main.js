import React from 'react'
import render from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.jsx'


render{
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={} />
    </Route>
  </Router>
  document.getElementById('app')    
}
