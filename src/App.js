import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Review from './routes/Review';
import Compare from './routes/Compare';
import Header from './components/Header'

const App = () => {
    return (
      <Router>
        <div>
            <Header></Header>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/review" component={Review}/>
            <Route path="/compare" component={Compare}/>
    
        </div>
      </Router>
    );
};

export default App;