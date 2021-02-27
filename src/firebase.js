// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBHEWTHnCp0YPuiv-edo1lE-4JN0KTf_9g",
  authDomain: "twitter-clone-2dfa5.firebaseapp.com",
  projectId: "twitter-clone-2dfa5",
  storageBucket: "twitter-clone-2dfa5.appspot.com",
  messagingSenderId: "616496338000",
  appId: "1:616496338000:web:384ba932a288b5f25c2d55",
  measurementId: "G-HTPLTZJZ05",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const fTimeStamp = firebase.firestore.FieldValue.serverTimestamp();
const db = firebaseApp.firestore();

export { db, fTimeStamp };
