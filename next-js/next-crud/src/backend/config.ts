import firebase from "firebase";
import 'firebase/firestore'
//se apps.length for 0 nao entra
if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

    })

}
export default firebase