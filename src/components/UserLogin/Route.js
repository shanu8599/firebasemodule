import React, { Component } from "react";
import Home from "./Home";
import firebase from "./firebase";
import Loginregister from "./Loginregister";

class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? <Home user={this.state.user} /> : <Loginregister />}
      </div>
    );
  }
}

export default Route;
