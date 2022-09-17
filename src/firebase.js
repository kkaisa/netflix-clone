import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArh8IcBx3EIjkHtp-GbhHbkhu2566SlsQ",
    authDomain: "netflix-clone-37d79.firebaseapp.com",
    projectId: "netflix-clone-37d79",
    storageBucket: "netflix-clone-37d79.appspot.com",
    messagingSenderId: "780431538657",
    appId: "1:780431538657:web:2a8a767675e92ffa8f3aa0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;