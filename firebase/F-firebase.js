/*_____________________________________FIREBASE-JS_____________________________________________*/

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAuth, onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 import { getFirestore, orderBy,doc, query , getDoc, where,getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBzgt-qU-6Wi0dsm-FPnN3TIEhyelqT_6U",
  authDomain: "careofcoders-db-ac722.firebaseapp.com",
  projectId: "careofcoders-db-ac722",
  storageBucket: "careofcoders-db-ac722.appspot.com",
  messagingSenderId: "866725306672",
  appId: "1:866725306672:web:f93e21bf8ef2d23a98a8f5"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Initialize Cloud Firestore and get a reference to the service
   const db = getFirestore(app);

   onAuthStateChanged(auth, (user) => {
    if (!user) {
      // If there is no user we should be index.html not in welcome page
      location.replace("./login page/login-index.html");
    }
    else{
      document.getElementById("welcome-user").innerHTML="Hey! "+auth.currentUser.displayName;
      
    }
  });  

  //signOut function

  document.getElementById("signOut_").addEventListener("click",()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        window.href.location="login-index.html";
        console.log("logged out")
      }).catch((error) => {
        // An error happened.
      });
  })
  

  
//don't remove
  export default app