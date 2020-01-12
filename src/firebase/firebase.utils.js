import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBZf3wHKsWdwEcnLigi_J2_LHMukEtQMxs",
    authDomain: "crwn-clothing-db-2346.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-2346.firebaseio.com",
    projectId: "crwn-clothing-db-2346",
    storageBucket: "crwn-clothing-db-2346.appspot.com",
    messagingSenderId: "315583301750",
    appId: "1:315583301750:web:0b7211e421367062ca3757",
    measurementId: "G-G7LPR8H2KJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error.message);
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
