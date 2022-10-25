/*_____________________________________FIREBASE-JS_____________________________________________*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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


const see_ans=document.getElementById("answers_id")

const docref = await collection(db, "Java_questions")
  const docsnap = await getDocs(docref)
  docsnap.forEach(doc => {

    see_ans.innerHTML+='<div class="col-sm-12 col-lg-12">'+


    '<div class="col-lg-12 col-md-6 mb-4">'+
        '<div class="card" id="see_answers">'+
            '<div class="card-body ">'+
             
                '<h4 id="question">'+doc.data().num +" . "+doc.data().question+'</h4>'+
                '<h6 id="a_text"> A . '+doc.data().options[0]+'</h6>'+
                '<h6 id="c_text"> B . '+doc.data().options[2]+'</h6>'+
                '<h6 id="b_text"> C . '+doc.data().options[1]+'</h6>'+
                '<h6 id="d_text"> D . '+doc.data().options[3]+'</h6>'+

                '<h6 id="correct">   Answer : <span>'+doc.data().answer+'</span></h6>'+
                
            '</div>'+
        '</div>'+
    '</div>'+


'</div>'

  })


export default app