
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-E88Z58lvT43-sMGiuW0F9RQzQzsPVIA",
  authDomain: "news-clone-b1d3c.firebaseapp.com",
  projectId: "news-clone-b1d3c",
  storageBucket: "news-clone-b1d3c.appspot.com",
  messagingSenderId: "50668685930",
  appId: "1:50668685930:web:7ad610647820f1052dd813"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()