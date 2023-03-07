import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAfdQLqIrvI4VdwYbfH0mnJqmsfGExQhQY",
  authDomain: "quiz-chat-auth.firebaseapp.com",
  projectId: "quiz-chat-auth",
  storageBucket: "quiz-chat-auth.appspot.com",
  messagingSenderId: "223628160786",
  appId: "1:223628160786:web:75c70ddcbcc3fd368b4dcb",
  databaseURL: 'https://quiz-chat-auth-default-rtdb.europe-west1.firebasedatabase.app/',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storeDB = firebase.firestore();
const storage = firebase.storage();

const signIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Redirect to google sign out.
      window.location.assign(
        'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://joyful-starship-e5ef78.netlify.app/'
      );
    })
    .catch(function (error) {
      console.log('Google account signOut false: ' + error);
    });
};

export { signIn, signOut, database, storeDB, storage };
