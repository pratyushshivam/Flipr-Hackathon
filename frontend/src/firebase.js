// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCjr9BFFm-3uniJ8FwRRLjYfk_8jDB8doM",
    authDomain: "hackathon-kiit.firebaseapp.com",
    projectId: "hackathon-kiit",
    storageBucket: "hackathon-kiit.appspot.com",
    messagingSenderId: "878835395034",
    appId: "1:878835395034:web:90ac821934b452192a38e3",
    measurementId: "G-5968CFLZM3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db