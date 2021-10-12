import React, { Component } from "react";
import logo from "./logo.svg";

// TODO 1 This component should be Register and Signin at the same time

//TODO 1 transform this into a functional component
//TODO 1 update react + react-dom to 16.8
//TODO 1 add the conditionals isSignin state value to render the form differently

// example code:
// const [isSignin, setSignin] = useState(true);
// <span className="text-muted" onClick={() => setSignin(!isSignin)}>
// {isSignin ? "Signin" : "Register"}
// onSubmit={event => props.onSubmit(event, isSignin)}

//TODO 3 the form also needs now to pass this information to the submit function in the parent
class Login extends Component {
  render() {
    return (
      <div className="h-100">
        <div className="App">
          <form onSubmit={this.props.onSubmit} className="form-signin">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="h3 my-5 font-weight-normal"> Authentic-Couch</h1>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              onChange={this.props.onChange}
              type="name"
              id="name"
              className="form-control"
              placeholder="Name"
              required
              autoFocus
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={this.props.onChange}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
