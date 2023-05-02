// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEbRXnoZmnM91FIM62oDz5VgKUnZdBSt8",
    authDomain: "ott-clone-project-202ff.firebaseapp.com",
    projectId: "ott-clone-project-202ff",
    storageBucket: "ott-clone-project-202ff.appspot.com",
    messagingSenderId: "480520779014",
    appId: "1:480520779014:web:d87f8e8096dbc41daeda87"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }