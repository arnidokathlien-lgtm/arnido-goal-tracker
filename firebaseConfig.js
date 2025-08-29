import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTriZB0JvfWF75l145xeEBfPXdjcZMVw0",
  authDomain: "goalproject-kath.firebaseapp.com",
  projectId: "goalproject-kath",
  storageBucket: "goalproject-kath.firebasestorage.app",
  messagingSenderId: "885097522725",
  appId: "1:885097522725:web:f746ef1c578157f60041cc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)