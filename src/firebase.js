import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtaamoP2coQaLlmhjHTluKLLLQbr1ZGmA",
    authDomain: "tinder-clone-ac684.firebaseapp.com",
    databaseURL: "https://tinder-clone-ac684.firebaseio.com",
    projectId: "tinder-clone-ac684",
    storageBucket: "tinder-clone-ac684.appspot.com",
    messagingSenderId: "833198922532",
    appId: "1:833198922532:web:7d88eedd207fdcbe7a31b1",
    measurementId: "G-39YJDJVFP8"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const database = firebaseApp.firestore();

   export default database;