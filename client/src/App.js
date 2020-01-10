import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import List from './pages/List'

const App = () => {
  return (
    <Router>
      <div>
        {/* <Link to="/">Home</Link> */}
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
