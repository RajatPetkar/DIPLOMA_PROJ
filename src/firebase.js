import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG4_L9n3mvJK8kxu3ybG4PXPZyL377ki0",
  authDomain: "eduport-51aed.firebaseapp.com",
  projectId: "eduport-51aed",
  storageBucket: "eduport-51aed.appspot.com",
  messagingSenderId: "823708835956",
  appId: "1:823708835956:web:ce34d70724f72d684e3121",
  measurementId: "G-F5K3CL6SP4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};