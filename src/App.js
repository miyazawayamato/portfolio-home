import './App.css';
import 'react-bootstrap';
import Header from './header.js';
import Main from './main.js';
import Indiv from './indiv/indiv.js';
import notFound from './notFound.js';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  
  // const [load, loadCompleted] = useState(true);
  // let on = 'block';
  // if (load) {
  //   on = 'none';
  // }
  
  return (
    <div >
      {/* <div onLoad={() => loadCompleted(false)} style={{display : on}}>ロード中です</div> */}
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/indiv/:id" component={Indiv}></Route>
          <Route  component={notFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
