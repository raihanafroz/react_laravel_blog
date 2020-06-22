import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Posts, NotFound, SinglePost, Login, Register } from './pages'
import { Navbar, Footer } from './layouts'
import './App.css';

class Routes extends Component{
  render(){

    const { history } = this.props;
    
    return (
      <ConnectedRouter history={history}>
        <Router>
          <Navbar />
          <div className="container" style={{marginTop: "80px"}}>
            <Switch>
              <Route exact path="/">
                <Posts/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
              <Route path="/post/:id" component={SinglePost} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </ConnectedRouter>
    );
  }
}
export default Routes;
