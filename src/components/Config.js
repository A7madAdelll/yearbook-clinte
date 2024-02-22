import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAhx3s6ekwrGoU8IzdSZAnPFXVb3CDLh0",
  authDomain: "yearbook-app-914c5.firebaseapp.com",
  projectId: "yearbook-app-914c5",
  storageBucket: "yearbook-app-914c5.appspot.com",
  messagingSenderId: "39515121464",
  appId: "1:39515121464:web:caf924bdd72393914943cd",
  measurementId: "G-8L7HZW6HFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDB = getStorage(app);
