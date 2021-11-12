// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
/*
//marshal.carlowin
const firebaseConfig = {

  apiKey: process.env.REACT_APP_UNSPLASH_FIREBASE_IP_KEY,

  authDomain: "pfcarwima.firebaseapp.com",

  projectId: "pfcarwima",

  storageBucket: "pfcarwima.appspot.com",

  messagingSenderId: "642483704649",

  appId: "1:642483704649:web:181795a86fa2ca8d8dc098"

};
*/
//greenlightechdog
const firebaseConfig = {

  apiKey: "AIzaSyCMcMbNH5hdJ67MgJQwjdOtijmj4veCcjw",

  authDomain: "carwima-96d5f.firebaseapp.com",

  projectId: "carwima-96d5f",

  storageBucket: "carwima-96d5f.appspot.com",

  messagingSenderId: "356885190556",

  appId: "1:356885190556:web:b09814af55792a75c1da59"

};


// Initialize Firebase

const fire = initializeApp(firebaseConfig);

export const db = getFirestore(fire);
