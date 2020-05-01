import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleBooks from './pages/GoogleBooks';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={GoogleBooks} />
          <Route exact path="/search" component={GoogleBooks} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
