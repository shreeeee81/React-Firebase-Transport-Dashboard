import firebase from 'firebase';

const config = {
    apiKey: "......Your API Key.......",
  authDomain: "...........",
  databaseURL: ".........",
  projectId: "............",
  storageBucket: "...........",
  messagingSenderId: "...........",
  appId: "...........",
  measurementId: "..........."

  
};
firebase.initializeApp(config);

export default firebase;
