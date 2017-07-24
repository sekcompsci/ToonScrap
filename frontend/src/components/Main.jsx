import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Chapter from './Chapter'
import Page from './Page'
import PageAll from './PageAll'

export default class Main extends React.Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/favorite' component={Chapter}/>
                <Route exact path='/chapters' component={Chapter}/>
                <Route exact path='/pages' component={Page}/>
                <Route exact path='/pageall' component={PageAll}/>
            </Switch>
        </main>
    )
  }
}