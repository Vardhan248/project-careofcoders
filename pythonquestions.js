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
let pythonquestions=[
    {
      num:1,
      question:'Who is the inventor of python programming language',
      answer:'Quido van rossum',
      options:[
        'JamesGosling',
        'DennisRitchie',
        'Quido van rossum',
        'Bjarne Stroustrup'
      ]
    },
    {
        num:2,
        question:'Which of the following is used in python to format the output?',
        answer:'.format()',
        options:[
          'format specifiers',
          '.format()',
          'end=""',
          'None of the above'
        ]
      },
      {
        num:3,
        question:'Which of the following is not a sequence type in python?',
        answer:'dict',
        options:[
          'dict',
          'list',
          'tuple',
          'range'
        ]
      },
      {
        num:4,
        question:'What is the type of range?',
        answer:'sequence',
        options:[
            'none type',
            'mapping',
            'numeric',
            'sequence'
        ]
      },
      {
        num:5,
        question:'Which of the following are not true about python variable?',
        answer:'None of the above',
        options:[
          'dont need to specify the type of variable',
          'variables are a symbolic name that is a reference or pointer to an object',
          'When we assign any value to the variable, that variable is declared automatically.',
          'None of the above'
        ]
      },
      {
        num:6,
        question:'Which one is the floor division among the following that is available in python?',
        answer:'//',
        options:[
          '/%',
          '%/',
          '//',
          'floordiv()'
        ]
      },
      {
        num:7,
        question:'Which one of the following are control structure in python?',
        answer:'both 1 and 2',
        options:[
          'selection',
          'iteration',
          'both 1 and 2',
          'sequential'
        ]
      },
      {
        num:8,
        question:'How many number of control structures are supported in python?',
        answer:'2',
        options:[
          '1',
          '2',
          '3',
          '4'
        ]
      },
      {
        num:9,
        question:'which is true for the Python function?',
        answer:'A Python function can return multiple values',
        options:[
          'A Python function can return multiple values',
          'Python function does not return anything unless and until you add a return statement',
          'A Python function can return only a single value',
          'All of the above'
        ]
      },
      {
        num:10,
        question:'Which of the following function headers is correct?',
        answer:'def fun(x, y = 3, z = 5)',
        options:[
          'def fun(x = 3, y = 5, z)',
          'def fun(x = 3, y, z = 5)',
          'def fun(x, y = 3, z = 5)',
          'def fun(x, y, z = 5, i)'
        ]
      },/*
      {
        num:11,
        question:'Which of the following is used to create an object?',
        answer:'constructor',
        options:[
          'class',
          'constructor',
          'In-built functions',
          'user-defined functions'
        ]
      },
      {
        num:12,
        question:'Which of the following statements is not true?',
        answer:'The value of a private variable in the superclass can be changed in the subclass',
        options:[
          'A derived class is a subset of superclass',
          'The value of a private variable in the superclass can be changed in the subclass',
          'A non-private method in a superclass can be overridden',
          'When invoking the constructor from a subclass, the constructor of superclass is automatically invoked'
        ]
      },
      {
        num:13,
        question:'what is the keyword that is used to throw an user defined exception?',
        answer:'raise',
        options:[
          'raise',
          'throw',
          'throws',
          'None of the above'
        ]
      },  
      {
        num:14,
        question:'Which of the following is not true about python exception handling?',
        answer:'try within another try is not allowed in python',
        options:[
          'except keyword is used to handle the exception',
          'user defined exception classes are derived from Exception class',
          'there is no error in python for Non-reachable except blocks',
          'try within another try is not allowed in python'
        ]
      },
      {
        num:15,
        question:'Which of the following is used to generate an index with time delta ?',
        answer:'TimedeltaIndex',
        options:[
          'TimeIndex',
          'LeadIndex',
          'TimedeltaIndex',
          'None of the mentioned'
        ]
      },     
      {
        num:16,
        question:'Which of the following library is similar to Pandas?',
        answer:'NumPy',
        options:[
          'OutPy',
          'NumPy',
          'RPy',
          'None of the mentioned'
        ]
      },
      {
        num:17,
        question:'Which of the following makes use of pandas and returns data in a Series or DataFrame ?',
        answer:'freedapi',
        options:[
          'pandaSDMX',
          'OutPy',
          'RPy',
          'freedapi'
        ]
      },  
      {
        num:18,
        question:'Machine learning is a subset of',
        answer:'artificial intelligence',
        options:[
          'artificial intelligence',
          'data science',
          'machine learing',
          'none of the above'
        ]
      },
      {
        num:19,
        question:'config() in python Tkinter is used for?',
        answer:'change property of the widget',
        options:[
          'destroy widget',
          'place widget',
          'change property of the widget',
          'configure the widget'
        ]
      },
      {
        num:20,
        question:'Which of the following is not an advantage of using modules?',
        answer:'Provides a means of reducing the size of the program',
        options:[
          'Provides a means of dividing up tasks',
          'Provides a means of reuse of program code',
          'Provides a means of reducing the size of the program',
          'Provides a means of testing individual parts of the program'
        ]
      },
      {
        num:21,
        question:'What is the One of the modules in a package must be called?',
        answer:'__init__',
        options:[
          '_init_',
          '__main__',
          '_main_',
          '__init__'
        ]
      }, 
      {
        num:22,
        question:'What is the maximum possible length of an identifier?',
        answer:'None of the above',
        options:[
          '16',
          '32',
          '64',
          'None of the above'
        ]
      },
      {
        num:23,
        question:'In which language is Python written?',
        answer:'C',
        options:[
          'PHP',
          'English',
          'C',
          'All Of the above'
        ]
      },
      {
        num:24,
        question:'In which year was the Python 3.0 version developed?',
        answer:'2008',
        options:[
          '2008',
          '2006',
          '2010',
          '2011'
        ]
      }, 
      {
        num:25,
        question:'Which one of the following has the highest precedence in the expression?',
        answer:'Paranthesis',
        options:[
          'Division',
          'Subtraction',
          'Power',
          'Paranthesis'
        ]
      }             */                 
];


for(var i=0;i<pythonquestions.length;i++)
{
  await addDoc(collection(db, 'Python_questions'), pythonquestions[i])
}


export default app