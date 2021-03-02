import './App.css';
import 'react-bootstrap';
import Header from './header.js';
import Main from './main.js';
import Indiv from './indiv/indiv.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Main}></Route>
        <Route path="/indiv/:id" component={Indiv}></Route>
      </Router>
    </div>
  );
}

export default App;
