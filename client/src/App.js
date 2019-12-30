import React, { Component } from "react";
import { Container } from "react-materialize";
import Nav from "./layout/menu/Nav"
import Login from "./pages/login/Login";
import { Route, Switch, withRouter, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        return (
          <Router>
          <Route
              path=''
              render={() => (
                  <div>
                      <Nav />
                      <Container className='main'>
                          <Switch>
                              <Route path='/login' component={Login} />
                          </Switch>
                      </Container>
                  </div>
              )}
          />
      </Router>
        );
    }
}
export default App;
