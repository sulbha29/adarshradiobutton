import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBHZ9nd8q7adnPjKcvsmZAaRFWuhgxuQY0",
    authDomain: "thebarbersapp-6ad64.firebaseapp.com",
    databaseURL: "https://thebarbersapp-6ad64.firebaseio.com",
    projectId: "thebarbersapp-6ad64",
    storageBucket: "thebarbersapp-6ad64.appspot.com",
    messagingSenderId: "56154910049",
    appId: "1:56154910049:web:026db597299c35c7dfa920"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();