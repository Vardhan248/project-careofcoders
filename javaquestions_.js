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
let javaquestions=[
    {
      num:1,
      question:'Which is the company that owns java at present?',
      answer:'oracle',
      options:[
        'sun microsystems',
        'microsoft',
        'oracle',
        'IBM'
      ]
    },
    {
        num:2,
        question:'Who is the inventor of java language?',
        answer:'JamesGosling',
        options:[
          'SteveJobs',
          'JamesGosling',
          'DennisRitchie',
          'Rasmus Lerdorf'
        ]
      },
      {
        num:3,
        question:'Which of the following is used to provide runtime environment in java?',
        answer:'JVM',
        options:[
          'JVM',
          'Byte code',
          'JRE',
          'JDK'
        ]
      },
      {
        num:4,
        question:'Which of the following prints a formatted string to the console?',
        answer:'System.out.printf();',
        options:[
            'System.out.println();',
            'System.out.print();',
            'System.out.printf();',
            'None of the above'
        ]
      },
      {
        num:5,
        question:'What is the the keyword that causes control to be transferred directly to the conditional expression that controls the loop?',
        answer:'continue',
        options:[
          'break',
          'switch',
          'skip',
          'continue'
        ]
      },
      {
        num:6,
        question:'Which of the following are used to create mutable (modifiable) String objects in java?',
        answer:'StringBuffer',
        options:[
          'StringBuffer',
          'String',
          'char[]',
          'None of the above'
        ]
      },
      {
        num:7,
        question:'Which of the following is known as array of arrays?',
        answer:'Jagged arrays',
        options:[
          'Single dimension arrays',
          'Double dimension arrays',
          'Multi dimensional arrays',
          'Jagged arrays'
        ]
      },
      {
        num:8,
        question:'What is the OOPs concept in java that is used for sending an object from one thread to another?',
        answer:'Message passing',
        options:[
          'Abstraction',
          'Encapsulation',
          'Data hiding',
          'Message passing'
        ]
      },
      {
        num:9,
        question:'How can we achieve multiple inheritance in java?',
        answer:'interface',
        options:[
          'inheritance',
          'interface',
          'mutlipath inheritance',
          'Both 1 and 2'
        ]
      },
      {
        num:10,
        question:'What is the OOPs concept in java, that is used for exposing only necessary information to users?',
        answer:'Abstraction',
        options:[
          'Abstraction',
          'Encapsulation',
          'Data hiding',
          'Message passing'
        ]
      },/*
      {
        num:11,
        question:'What is the OOPs concept in java, that has the real life example "capsule"?',
        answer:'Encapsulation',
        options:[
          'Abstraction',
          'Encapsulation',
          'Data hiding',
          'Message passing'
        ]
      },
      {
        num:12,
        question:'What are the ways to achieve static binding in java?',
        answer:'All of the above',
        options:[
          'Different number of arguments',
          'Different types of arguments',
          'Different order of arguments',
          'All of the above'
        ]
      },
      {
        num:13,
        question:'How many types of constructors are available in java?',
        answer:'2',
        options:[
          '4',
          '3',
          '2',
          '1'
        ]
      },  
      {
        num:14,
        question:'Which of the following is referred using this of a method in java?',
        answer:'local variable',
        options:[
          'global variable',
          'local variable',
          'static variable',
          'instance variable'
        ]
      },
      {
        num:15,
        question:'where do the methods of interface should be defined?',
        answer:'class implementing interface',
        options:[
          'interface extending interface',
          'class extending interface',
          'class implementing interface',
          'None of the mentioned'
        ]
      },     
      {
        num:16,
        question:'Which of the following class is used to convert primitive into object and object into primitive',
        answer:'Wrapper class',
        options:[
          'POJO class',
          'Singleton class',
          'Concrete class',
          'Wrapper class'
        ]
      },
      {
        num:17,
        question:'How many keywords are currently used in java?',
        answer:'49',
        options:[
          '49',
          '51',
          '54',
          '47'
        ]
      },  
      {
        num:18,
        question:'Which of the following access modifier has access level of only within the package?',
        answer:'default',
        options:[
          'public',
          'protected',
          'default',
          'private'
        ]
      },
      {
        num:19,
        question:'Where do the objects get stored on creating in java?',
        answer:'heap memory',
        options:[
          'stack memory',
          'main memory',
          'virtual memory',
          'heap memory'
        ]
      },
      {
        num:20,
        question:'Which is the class that is implicitly extended by all of the classes in java?',
        answer:'Object class',
        options:[
          'Main class',
          'Object class',
          'derived class',
          'parent class'
        ]
      },
      {
        num:21,
        question:'Which of the following should be first and should be only one of a program in java?',
        answer:'package',
        options:[
          'comments',
          'import',
          'package',
          'None of the above'
        ]
      }, 
      {
        num:22,
        question:'Which of these packages contain all the collection classes?',
        answer:'java.util',
        options:[
          'java.net',
          'java.io',
          'java.util',
          'java.lang'
        ]
      },
      {
        num:23,
        question:'Which of the following package is need not to be explicitly imported?',
        answer:'java.lang',
        options:[
          'java.util',
          'java.awt',
          'java.applet',
          'java.lang'
        ]
      },
      {
        num:24,
        question:'Which of the following is not a sub interface of Queue?',
        answer:'TemplateQueue',
        options:[
          'BlockingQueue',
          'TransferQueue',
          'TemplateQueue',
          'None of the above'
        ]
      }, 
      {
        num:25,
        question:'Which of the following objects stores association between key and value?',
        answer:'map',
        options:[
          'hash table',
          'array',
          'String',
          'map'
        ]
      },
      {
        num:26,
        question:'Which of the following is used to perform union of set in java?',
        answer:'addAll()',
        options:[
          'addAll()',
          'retainAll()',
          'removeAll()',
          'None of the above'
        ]
      }, 
      {
        num:27,
        question:'Which of the following is used with method signature?',
        answer:'throws',
        options:[
          'throw',
          'try',
          'throws',
          'finally'
        ]
      },
      {
        num:28,
        question:'Which of the following is used to to pause a thread and allow other threads to execute temporarily?',
        answer:'yield()',
        options:[
          'suspend()',
          'getPriority()',
          'yield()',
          'join()'
        ]
      },
      {
        num:29,
        question:'Which of the following are applicable using synchronization?',
        answer:'methods',
        options:[
          'class',
          'varaibles',
          'methods',
          'object'
        ]
      },
      {
        num:30,
        question:'What are the major components of the JDBC?',
        answer:'DriverManager, Driver, Connection, Statement, and ResultSet',
        options:[
          'DriverManager, Driver, Connection, Statement, and ResultSet',
          'DriverManager, Statement, and ResultSet',
          'DriverManager, Connection, Statement, and ResultSet',
          'DriverManager, Driver, Connection, and Statement'
        ]
      },            */                            
];



for(var i=0;i<javaquestions.length;i++)
{
  await addDoc(collection(db, 'Java_questions'), javaquestions[i])
}




export default app

