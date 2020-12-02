import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQKYa8eAguHjFZLvu53oByQ7LXdCd_5tQ",
  authDomain: "simbalearningapp.firebaseapp.com",
  databaseURL: "https://simbalearningapp.firebaseio.com",
  projectId: "simbalearningapp",
  storageBucket: "simbalearningapp.appspot.com",
  messagingSenderId: "543154094946",
  appId: "1:543154094946:web:4a298efe431313187fe23b",
  measurementId: "G-FFJ9REXH0V"
};

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  export { storage, firebase as default };