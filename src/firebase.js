import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBR7TDrBTcYV3Ay9IvXJhSjNbXy3thtn50",
  authDomain: "challenge-cba89.firebaseapp.com",
  databaseURL: "https://challenge-cba89-default-rtdb.firebaseio.com",
  projectId: "challenge-cba89",
  storageBucket: "challenge-cba89.appspot.com",
  messagingSenderId: "980269310588",
  appId: "1:980269310588:web:4d1fca5af11ef41f015ff9",
  measurementId: "G-99VKTLFKHB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
