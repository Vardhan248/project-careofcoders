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

async function deletion(id){
  const colref  = await doc(db,"Python_questions",id)
  await deleteDoc(colref)
  window.location.reload()
}



const see_ans=document.getElementById("answers_id")


const docref = await query(collection(db, "Python_questions"),orderBy('num'))
  const docsnap = await getDocs(docref)
  docsnap.forEach(doc => {
    
    const colsm12=document.createElement('div')
    colsm12.classList.add('col-sm-12','col-lg-12')
    const col12 = document.createElement('div')
    col12.classList.add('col-lg-12','col-md-6','mb-4')
    const card12 = document.createElement('div')
    card12.className = "card"
    const card123=document.createElement('div')
    card123.classList.add('card-body','text-md-start','text-center')

    

    const question = document.createElement('h4')
    question.id='question'
    question.innerText=doc.data().num+". "+doc.data().question
// optons

    const opt1 = document.createElement('h6')
    opt1.innerText="A. "+doc.data().options[0]
    opt1.id='a_text'

    const opt2 = document.createElement('h6')
    opt2.innerText= "B. "+doc.data().options[1]
    opt2.id='b_text'

    const opt3 = document.createElement('h6')
    opt3.innerText= "C. "+doc.data().options[2]
    opt3.id = 'c_text'

    const opt4 = document.createElement('h6')
    opt4.innerText= "D. "+doc.data().options [3]
    opt4.id='d_text'


    const answers = document.createElement('h6')
    answers.innerText='Answer : '+ doc.data().answer
    answers.id='d_text'

    const btndel = document.createElement('button')
    btndel.innerText = "Delete"
    btndel.addEventListener('click',async ()=> {
      deletion(doc.id)
      console.log(doc.id + ' is deleted')
    })

    card123.append(question,opt1,opt2,opt3,opt4,answers,btndel)

    card12.appendChild(card123)
    col12.appendChild(card12)
    colsm12.appendChild(col12)
    
    see_ans.append(colsm12)
//     see_ans.innerHTML+='<div class="col-sm-12 col-lg-12">'+


//     '<div class="col-lg-12 col-md-6 mb-4">'+
//         '<div class="card" id="see_answers">'+
//             '<div class="card-body text-md-start text-center">'+
             
//                 '<h4 id="question">'+doc.data().num +" . "+doc.data().question+'</h4>'+
//                 '<h6 id="a_text"> A . '+doc.data().options[0]+'</h6>'+
//                 '<h6 id="c_text"> B . '+doc.data().options[2]+'</h6>'+
//                 '<h6 id="b_text"> C . '+doc.data().options[1]+'</h6>'+
//                 '<h6 id="d_text"> D . '+doc.data().options[3]+'</h6>'+

//                 '<h6 id="correct">   ANS : <span>'+doc.data().answer+'</span></h6>'+
//                 '<button>Delete</button>'+
//             '</div>'+
//         '</div>'+
//     '</div>'+


// '</div>'

  })
 // document.getElementById(doc.id).addEventListener('click',deletedocs(doc.id))
export default app