/*_____________________________________FIREBASE-JS_____________________________________________*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithPopup, GoogleAuthProvider,signInWithRedirect,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, orderBy, doc, query, getDoc, where, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const db = getFirestore();

//google
const provider = new GoogleAuthProvider();
 
/*   
*/

//Signup function
document.getElementById("SignUpForm").addEventListener("submit", async () => {
  const email = document.getElementById("sign_email").value;
  const password = document.getElementById("sign_password").value;
  const username = document.getElementById("username").value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log(db)
      const user = auth.currentUser

      await addDoc(collection(db, 'users'), {
        email: user.email,
        name: username,
        id: user.uid,
      })
      //.then(() => { alert('data added') })

      if (user != null) {
       // alert("entered")
        await updateProfile(user, {
          displayName: username,
        })
      }

      onAuthStateChanged(auth, (user) => {
        if (user) {
          location.replace("/index.html");
        }
      })

      
      if (auth.currentUser != null) {
        window.location.href = "/index.html";
      }

    })
    .catch((error) => {
      document.getElementById("sign_span_message").innerHTML = " " + error.message;
     // alert(error.message)
    });
})


//signIN function
document.getElementById("LogInForm").addEventListener("submit",async () => {
  const email = document.getElementById("log_email").value;
  const password = document.getElementById("log_password").value;

  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //alert(auth.currentUser.displayPhoto)
      // ...

      onAuthStateChanged(auth, (user) => {
        if (user) {
          location.replace("/index.html");
        }
      })
    })
    .catch((error) => {
      document.getElementById("log_span_message").innerHTML = " " + error.message;
    });

})


//SignIn with google
document.getElementById("signUp-google2").addEventListener("click",async ()=>{
  document.getElementById("signUp-google1").click()
 /* const auth = getAuth();
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;


      addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.displayName,
        id: user.uid,
      })

      onAuthStateChanged(auth, (user) => {
        if (user) {
          location.replace("/index.html");
        }
      })
    })
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    */
    // ...
  });



//SignIn with google-2
document.getElementById("signUp-google1").addEventListener("click",async ()=>{

  const auth = getAuth();
  await signInWithPopup(auth, provider)
  .then(async(result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;


      await addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.displayName,
        id: user.uid,
      })

      onAuthStateChanged(auth, (user) => {
        if (user){
          location.replace("/index.html");
        }
      })
    })
  })

/*
document.getElementById("signUp-google1").addEventListener("click",async ()=>{

  const auth = getAuth();
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;


      addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.displayName,
        id: user.uid,
      })

      onAuthStateChanged(auth, (user) => {
        if (user) {
          location.replace("/index.html");
        }
      })
    })
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


//




/*
const col_ref = query(collection(db, 'users'))
const docsnap = await getDocs(col_ref)
docsnap.forEach(doc => {
  alert(doc.data().name)
})
*/


//forgot password function
document.getElementById("fpw_id").addEventListener('click',async ()=>{
  const auth = getAuth();
  const email=document.getElementById("log_email").value;
await sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    swal({
      title: "Dear User",
      text: "password-reset mail sent to your gmail !",
      icon: "success",
      button: "Okay",
    });
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal({
      title: "Are you Serious ?",
      text: "you forgot to enter the email",
      icon: "error",
      button: "Ok",
    });
  });
})

export default app