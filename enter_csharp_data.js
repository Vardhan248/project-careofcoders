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

const que_numb=document.getElementById("question_num")
const quest=document.getElementById("the_question")
const opt_1=document.getElementById("option_1")
const opt_2=document.getElementById("option_2")
const opt_3=document.getElementById("option_3")
const opt_4=document.getElementById("option_4")
const que_ans=document.getElementById("the_answer")
const add_data_form_=document.getElementById("enter_que_form")
const  sub_btn=document.getElementById("submit_button")

add_data_form_.addEventListener("submit",async (event)=>{
  event.preventDefault()
  console.log("button clicked")




  await addDoc(collection(db,'CSharp_questions'),{
    num:parseInt(que_numb.value),
    question:quest.value,
    options:[
      opt_1.value,
      opt_2.value,
      opt_3.value,
      opt_4.value
    ],
    answer:que_ans.value
  })
    swal({
      title: "Dear Teacher",
      text: "The entered question is added into the quiz 👍",
      icon: "success",
      button: "Okay",
    });

})

export default app