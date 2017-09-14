import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



import Home from "./components/Home"
import Classify from "./components/Classify"
import Community from "./components/Community"
import Mine from "./components/Mine"

const App = () => (
  <Router>
    <div>
      
      <Route exact path="/" component={Home}/>
      <Route path="/Classify" component={Classify}/>
      <Route path="/Community" component={Community}/>
      <Route path="/Mine" component={Mine}/>
      
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Classify">分类列表</Link></li>
        <li><Link to="/Community">社区</Link></li>
        <li><Link to="/Mine">我</Link></li>
      </ul>
    </div>
  </Router>
)

export default App;
