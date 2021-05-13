import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcqau5nL7PBnS1QM_sqy9GNLaZZoVXgls",
  authDomain: "crown-db-8287d.firebaseapp.com",
  projectId: "crown-db-8287d",
  storageBucket: "crown-db-8287d.appspot.com",
  messagingSenderId: "664251138920",
  appId: "1:664251138920:web:44afbbb320f9aff6788cdd",
  measurementId: "G-EV113K0G3K",
};

//using userAuth object we go from authentication library and sore info in out DB.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // api call async
  if (!userAuth) return; // if userAuth Object doesn't exist return fro function
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (errp) {
      console.log("error creating user" );
    }
  }
  return userRef; 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
