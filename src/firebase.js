import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCo2MEgWaXFYQwxMMFCfxL0ub4t_QcofUc",
    authDomain: "matterhorn-site.firebaseapp.com",
    databaseURL: "https://matterhorn-site.firebaseio.com",
    projectId: "matterhorn-site",
    storageBucket: "matterhorn-site.appspot.com",
    messagingSenderId: "350332897136",
    appId: "1:350332897136:web:0f650014ed9645389f71b5",
    measurementId: "G-5QCVMEJJNR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };