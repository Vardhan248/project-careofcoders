// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithPopup, GoogleAuthProvider,signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzi8UOAGH1HXRVbVa0ijTHZ0AGgR5oEg",
  authDomain: "teacher-login-dfa94.firebaseapp.com",
  projectId: "teacher-login-dfa94",
  storageBucket: "teacher-login-dfa94.appspot.com",
  messagingSenderId: "131000283523",
  appId: "1:131000283523:web:1ec9418f0248c4f49986b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


document.getElementById("submit_button").addEventListener("click",async()=>{
    const auth = getAuth();
const email=document.getElementById("teach_id").value
const password=document.getElementById("teach_password").value
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    swal({
      title: "Well Done! Teacher",
      text: "You have Successfully logged-In 👍",
      icon: "success",
      button: {
        text:"Okay",
      },
    }).then(()=>{
      location.replace('teacher_home_Page.html');
    })
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal({
      title: "Damn!",
      text: "you have entered Wrong Details",
      icon: "error",
    });
  });
})



export default app