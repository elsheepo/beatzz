import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './components/contact'
import Docs from './components/docs'
import Links from './components/links'
import Projects from './components/projects'
import Updates from './components/updates'

class Routes extends Component {
  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/updates" component={Updates} />
        </div>
      </BrowserRouter>
    </div>)
  }
}

export default Routes