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


/*
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
*/

const quizData = [
    
];


const docref = await collection(db, "cp_questions")
  const docsnap = await getDocs(docref)
  docsnap.forEach(doc => {
    var  xyz=""
    if(doc.data().options[0]==doc.data().answer)
    {
        xyz="a"
    }
    else if (doc.data().options[1]==doc.data().answer){
            xyz="b"
    }
    else if (doc.data().options[2]==doc.data().answer){
        xyz="c"
    }
    else
    {
        xyz="d"
    }
    var qu={
      question: doc.data().question,
       a: doc.data().options[0],
       b :  doc.data().options[1],
       c :  doc.data().options[2],
       d :  doc.data().options[3],
       correct:xyz
    }
    quizData.push(qu)
    
  })

const quiz_head=document.getElementById("quiz_header_1")
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
var ques_count=1
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = ques_count+". "+currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    ques_count++
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        } 
    })
    return answer
}
var asss=a_text.innerText


submitBtn.addEventListener('click', async() => {
    const answer = getSelected()
    if(answer) {

       if(answer === quizData[currentQuiz].correct)
        {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <div class="result_box">
           <div class="res_icon">
           <center>
           <i class="fas fa-crown"></i>
           </center>
           </div>
           <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        <center><button onclick="location.reload()">Replay</button> <button onclick="window.location.href='cpp_see_ans.html';">See Answers</button> </center> 
            </div>
           `
       }
    }
})




//