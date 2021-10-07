//for version 9.0.0 upper
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC23Lb09u2OdPUqKRdfKHLayMAjEMtyMmA",
  authDomain: "practice-shopapp.firebaseapp.com",
  databaseURL: "https://practice-shopapp-default-rtdb.firebaseio.com",
  projectId: "practice-shopapp",
  storageBucket: "practice-shopapp.appspot.com",
  messagingSenderId: "367156074271",
  appId: "1:367156074271:web:44e9c893cfd9a14f76022a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
