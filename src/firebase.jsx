// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAD-b522_pyUSL_t2nl71oNOfCVRoljF0w',
  authDomain: 'netflix-clone-9fd7e.firebaseapp.com',
  projectId: 'netflix-clone-9fd7e',
  storageBucket: 'netflix-clone-9fd7e.appspot.com',
  messagingSenderId: '441633862911',
  appId: '1:441633862911:web:54cc328a829b94b7b288ca',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }

export default db
