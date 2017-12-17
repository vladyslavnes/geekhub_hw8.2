import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg'
import './App.css'
// components
import ComponentA from '../components/ComponentsA/ComponentA'
// router
import { Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'

const NotFound = () => {
  location.back()
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>    
          <Switch>
            <Route exact path='/' render={() => {}} />
            <Route path='/about'
              component={ComponentA} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
