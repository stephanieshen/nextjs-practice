import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCgTU3_vKD92MOQrWauBM6w71rZmwcGSzQ",
  authDomain: "juand-fe279.firebaseapp.com",
  projectId: "juand-fe279",
  storageBucket: "juand-fe279.appspot.com",
  messagingSenderId: "615227329984",
  appId: "1:615227329984:web:4f8111144ddb986f950c25",
  measurementId: "G-R5YTG2T5HD"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const storage = firebase.storage();

export const endpoint = 'https://juand-fe279-default-rtdb.asia-southeast1.firebasedatabase.app/';
export default storage;
