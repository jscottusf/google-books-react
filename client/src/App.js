import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleBooks from './pages/GoogleBooks';
import Books from './pages/Books';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={GoogleBooks} />
          <Route exact path="/search" component={GoogleBooks} />
          <Route exact path="/saved" component={Books} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
