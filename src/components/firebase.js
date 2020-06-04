import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAzWN0gVATCCq1gdgjaYKovo_VCpPv7-dY",
  authDomain: "usermodule.firebaseapp.com",
  databaseURL: "https://usermodule.firebaseio.com",
  projectId: "usermodule-5f91d",
  storageBucket: "usermodule.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
