import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppLayout from './layouts/AppLayout';
import Landing from './modules/Landing';
import EmailList from './modules/EmailList';
import EmailView from './modules/EmailView';

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          {/* Switch renders the first element that matches the path - hence the order */}

          <Route path="/emails" component={EmailList} />


          <Route path="/users/:id" component={EmailView} />

          <Route path="/" component={Landing} />

        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
