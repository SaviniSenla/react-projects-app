// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 
    authDomain: 
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
    measurementId: 
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig );
const firestore = firebase.firestore(firebaseApp);
export default firebaseConfig;