import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Posts, NotFound, SinglePost, Profile, EditUserProfile } from './pages';
import { PrivateRoute } from './components'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import  { Footer }  from './layouts'
import  Navbar from './layouts/navbar/navbar'
import './App.css';

class Routes extends Component{
  
  render(){

    const { history } = this.props;
    
    return (
      <ConnectedRouter history={history}>
        {/* <Router> */}
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
              {/*user dashboard private routes */}
              <PrivateRoute path="/dashboard/profile/edit" component={EditUserProfile}/>
              <PrivateRoute path="/dashboard/profile" component={Profile}/>
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        {/* </Router> */}
      </ConnectedRouter>
    );
  }
}
export default Routes;
