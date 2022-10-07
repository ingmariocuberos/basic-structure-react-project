import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf8wO-7CR8cDgjJLVHziRK-qk-PrhdddY",
  authDomain: "react-base-line.firebaseapp.com",
  projectId: "react-base-line",
  storageBucket: "react-base-line.appspot.com",
  messagingSenderId: "842384197169",
  appId: "1:842384197169:web:534a773b3ca0db5fd43710",
  measurementId: "G-WC52XS9TN4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const analytics = getAnalytics(firebase);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {
  firebase,
  auth,
  analytics,
  provider
}