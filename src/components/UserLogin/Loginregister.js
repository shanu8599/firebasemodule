import React, { Component } from "react";
import firebase from "./firebase";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fireErrors: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    let error = this.state.fireErrors ? (
      <div id="Error"> {this.state.fireErrors} </div>
    ) : null;
    return (
      <div id="container">
        <div id="signupfields">
          <form>
            <h2>Enter User Account Details</h2>
            <div id="formfields">
              {error}
              <label>Email-Id</label>
              <input
                type="email"
                id="forminput"
                name="email"
                placeholder="Your Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <label>Password</label>
            <input
              type="password"
              id="forminput"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button id="button" onClick={this.login}>
              Login
            </button>
            &nbsp;
            <button id="button" onClick={this.signup}>
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
