import firebase from 'firebase/app'
import { firestore, storage } from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBquGCFlLJTdzwnGa0ZAfX2FlHdpzGJ5fc",
    authDomain: "fire-base-traversy.firebaseapp.com",
    databaseURL: "https://fire-base-traversy.firebaseio.com",
    projectId: "fire-base-traversy",
    storageBucket: "fire-base-traversy.appspot.com",
    messagingSenderId: "689477878830",
    appId: "1:689477878830:web:19b63ac9a1659894aa4bbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = storage()
const projectFire = firestore()
export { projectFire, projectStorage }