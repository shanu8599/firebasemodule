import React from "react";
import firebase from "./firebase";

class Home extends React.Component {
  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>You are Successfully logged in with below Email-Id:</h2>
        <h3>{this.props && this.props.user && this.props.user.email}</h3>
        <div>
          <button id="logout" onClick={this.logout}>
            LOGOUT
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
