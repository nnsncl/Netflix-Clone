import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>Sign In</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>Sign Up</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>Browse</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
