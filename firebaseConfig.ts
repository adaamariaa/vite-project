import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiggaJ7kYTht2duTwi6ihlJ35-mn53V9o",
    authDomain: "pilvi-react-3c37f.firebaseapp.com",
    projectId: "pilvi-react-3c37f",
    storageBucket: "pilvi-react-3c37f.appspot.com",
    messagingSenderId: "679168875315",
    appId: "1:679168875315:web:3930444ba570fb4b6ffc46"
  };


  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  export {firestore, auth};