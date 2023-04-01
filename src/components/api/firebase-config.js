import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUCGrVaqT66PVKchL3S55qS6nGzzOlRHs",
    authDomain: "auction-system-f274d.firebaseapp.com",
    projectId: "auction-system-f274d",
    storageBucket: "auction-system-f274d.appspot.com",
    messagingSenderId: "567840589948",
    appId: "1:567840589948:web:39dc16a9e0bfed03c661f9",
    measurementId: "G-39K5TV2X6K"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app);
