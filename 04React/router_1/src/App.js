import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/Start';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import NotFound from './layout/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Start} />  
              <Route exact path="/products" component={Products} />  
              <Route exact path="/productdetails/:id" component={ProductDetails} /> 
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
