import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecVideo from './components/RecVideo'
import Search from './components/Search'
import './css/App.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
        <Route path="/search">
            <div className="app_page">
                <Sidebar/>
                <Search/>
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
                <Sidebar/>
                <RecVideo/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
