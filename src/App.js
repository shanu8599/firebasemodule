import React, { Component } from "react";
import Loginregister from "./components/Loginregister";
import Home from "./components/Home";
import firebase from "./components/firebase";

class App extends Component {
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
      <div className="App">
        {this.state.user ? <Home /> : <Loginregister />}
      </div>
    );
  }
}

export default App;
