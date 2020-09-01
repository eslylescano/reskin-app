import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEv6dD2JdOAjQ3lJr0Vyf9Z9zlD0qU2uk",
  authDomain: "testproject1-d2391.firebaseapp.com",
  databaseURL: "https://testproject1-d2391.firebaseio.com",
  projectId: "testproject1-d2391",
  storageBucket: "testproject1-d2391.appspot.com",
  messagingSenderId: "735154243696",
  appId: "1:735154243696:web:b372d02271a44d28cbccb5",
  measurementId: "G-6QDX0CWET0",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
