import React from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer/SearchContainer'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/' render={ ({ match }) => {
            return <SearchContainer />
          }
        } />
      </Switch>
    </div>
  </Router>
)

export default App;
