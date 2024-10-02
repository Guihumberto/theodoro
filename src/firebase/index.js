import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKNA9ISY-eIliHiT-vzXpEu4DO9kws6-I",
  authDomain: "niver-ad807.firebaseapp.com",
  projectId: "niver-ad807",
  storageBucket: "niver-ad807.appspot.com",
  messagingSenderId: "682277598978",
  appId: "1:682277598978:web:2f926d814b6d8ae3aab41b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }