import React from "react";

import firebase from "./firebase";

class Home extends React.Component {
  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>You Are Logged In</h1>
        <button id="logout" onClick={this.logout}>
          LOGOUT
        </button>
      </div>
    );
  }
}

export default Home;
