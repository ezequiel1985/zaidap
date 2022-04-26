import { initializeApp } from "firebase/app";
// importamos función para conectar a FIREBASE.
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyCPSKI7ySgC21hD9fWAejhNqz2O_QZ5_OM",
  authDomain: "zaidapdemo2022.firebaseapp.com",
  projectId: "zaidapdemo2022",
  storageBucket: "zaidapdemo2022.appspot.com",
  messagingSenderId: "1050683487499",
  appId: "1:1050683487499:web:21f3cd87498adc27d39e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportamos con la función la const app para para conectar la APP con Firebase a través de los SDK
export const firestoreDb = getFirestore(app) 