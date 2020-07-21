import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/home'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>Sign In</p>
        </Route>
        <Route path="/signup">
          <p>Sign Up</p>
        </Route>
        <Route path="/browse">
          <p>Browse</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
