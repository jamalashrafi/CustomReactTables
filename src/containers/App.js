import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import HomePage from './HomePage';
import FrontEndDataTable from './FrontEndDataTable';
import BackEndDataTable from './BackEndDataTable';
import FrontEndDataInfiniteScroll from './FrontEndDataInfiniteScroll';
import BackendDataInfiniteScroll from './BackendDataInfiniteScroll';

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frontendData" component={FrontEndDataTable} />
        <Route exact path="/backendData" component={BackEndDataTable} />
        <Route
          exact
          path="/frontendDataInfineScroll"
          component={FrontEndDataInfiniteScroll}
        />
        <Route
          exact
          path="/backendDataInfineScroll"
          component={BackendDataInfiniteScroll}
        />
      </div>
    </Router>
  );
}

export default App;
