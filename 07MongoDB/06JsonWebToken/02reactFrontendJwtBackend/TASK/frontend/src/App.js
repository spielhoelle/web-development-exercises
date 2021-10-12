import React, { Component } from "react";
import Login from "./Login.jsx";
import Locations from "./Locations.jsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const domain = process.env.REACT_APP_DOMAIN || "http://localhost";
const port = process.env.REACT_APP_BACKENDPORT || 8080;
class App extends Component {
  state = {
    user: false,
    alert: false,
    form: {
      name: "",
      password: ""
    }
  };
  componentWillMount = () => {
    const user = localStorage.getItem("user");
    if (user) {
      this.setState({
        user: {
          name: JSON.parse(localStorage.getItem("user")).name,
          token: JSON.parse(localStorage.getItem("user")).token
        }
      });
    }
  };
  onChange = event => {
    let form = { ...this.state.form };
    form[event.target.id] = event.target.value;
    this.setState({ form });
  };
  logout = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
    window.history.pushState(null, null, "/");
  };
  onSubmit = event => {
    event.preventDefault();
    const body = JSON.stringify({
      name: this.state.form.name.toLowerCase(),
      password: this.state.form.password
    });

    fetch(`${domain}:${port}/api/authenticate`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        //TODO handle the token and save it in the state + localstorage
        //TODO If there is no token - set the state user to false and dont redirect in line 77
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Router>
        <div className="h-100">
          <Route
            exact
            path="/"
            render={() =>
              this.state.user ? (
                <Redirect to={{ pathname: "/locations" }} />
              ) : (
                <Login
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  alert={this.state.alert}
                  user={this.state.user}
                />
              )
            }
          />
          <Route
            exact
            path="/locations"
            render={() =>
              this.state.user ? (
                <div>
                  <Locations logout={this.logout} user={this.state.user} />
                </div>
              ) : (
                <Redirect to={{ pathname: "/" }} />
              )
            }
          />
        </div>
      </Router>
    );
  }
}
export default App;
