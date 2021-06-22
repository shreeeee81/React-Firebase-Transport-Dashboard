import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDxcjyWl7fDb-VQi-w8bmNmtaG5BMjX1rM",
  authDomain: "smart-image-transport.firebaseapp.com",
  databaseURL: "https://smart-image-transport-default-rtdb.firebaseio.com",
  projectId: "smart-image-transport",
  storageBucket: "smart-image-transport.appspot.com",
  messagingSenderId: "228962334590",
  appId: "1:228962334590:web:b8d3749deb54f07145a52f",
  measurementId: "G-945ZSVXBKQ"

  
};
firebase.initializeApp(config);

export default firebase;