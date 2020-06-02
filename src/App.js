import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Books } from './pages'


const App = ()=> {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books}/>
      </Switch>
    </Router>
  )
}

export default App;
