import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDP_cJcVwVqRo8wxXEjcnEkJV6EvnCZlL4",
    authDomain: "gurukul-694c6.firebaseapp.com",
    projectId: "gurukul-694c6",
    storageBucket: "gurukul-694c6.appspot.com",
    messagingSenderId: "386894529390",
    appId: "1:386894529390:web:4549df032bb7c0d61a777f",
    measurementId: "G-Z3XR69WLNH"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;