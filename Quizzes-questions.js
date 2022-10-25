/*_____________________________________FIREBASE-JS_____________________________________________*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithPopup, GoogleAuthProvider,signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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





//creating an array and passing the number,questions ,options and answers
let questions=[
    {
      num:1,
      question:'What is a correct syntax to output "Hello World" in C?',
      answer:'printf("Hello World");',
      options:[
        'Console.WriteLine("Hello World");',
        'cout<<"Hello World";',
        'printf("Hello World");',
        'System.out.println("Hello World");'
      ]
    },
    {
        num:2,
        question:'How do you insert COMMENTS in C code?',
        answer:'//this is a comment',
        options:[
          '/* this is a comment',
          '--this is a comment',
          '#this is a comment',
          '//this is a comment'
        ]
      },
      {
        num:3,
        question:'How can you create a variable with the numeric value 5?',
        answer:'int num=5;',
        options:[
          'int num=5;',
          'var num=5;',
          'integer num=5;',
          'num=5;'
        ]
      },
      {
        num:4,
        question:'How can you create a variable with the floating number 2.8?',
        answer:'float num=2.8;',
        options:[
            'num=2.8;',
            'float num=2.8;',
            'floating num=2.8;',
            'var num=2.8;'
        ]
      },
      {
        num:5,
        question:'Which operator is used to add together two values?',
        answer:'"+" sign',
        options:[
          '"ADD" keyword',
          '"+" sign',
          '"*" sign',
          '"%" sign'
        ]
      }
];



for(var i=0;i<questions.length;i++)
{
  await addDoc(collection(db, 'C_questions'), questions[i])
}



export default app

