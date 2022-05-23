// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE42DWbAZqLqeKnivYMQLvQccj9-hdoAw",
    authDomain: "car-parts-manufacturer-28ac5.firebaseapp.com",
    projectId: "car-parts-manufacturer-28ac5",
    storageBucket: "car-parts-manufacturer-28ac5.appspot.com",
    messagingSenderId: "148821672029",
    appId: "1:148821672029:web:c766d4f879a4d21d4b8db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;