import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Header, Footer  } from './components';
import { About, Portfolio, Contact, Resume } from './components/pages';

function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/" component={About} />
      <Footer />
  </Router>
    
  );
}

export default App;
