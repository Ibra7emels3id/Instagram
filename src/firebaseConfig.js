// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-XmFc1V1Ox6fRNuqqqmMJgNoRoxGuh-k",
  authDomain: "instagram90-3372c.firebaseapp.com",
  projectId: "instagram90-3372c",
  storageBucket: "instagram90-3372c.appspot.com",
  messagingSenderId: "41077614023",
  appId: "1:41077614023:web:4df837abbf9282a88ba5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);


export default app;