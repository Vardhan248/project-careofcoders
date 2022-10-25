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



//creating an array and passing the number,questions ,options and answers
let csharpquestions=[
    {
      num:1,
      question:'Who is the inventor of c sharp programming language',
      answer:'Anders Hejlsberg',
      options:[
        'JamesGosling',
        'DennisRitchie',
        'Anders Hejlsberg',
        'Bjarne Stroustrup'
      ]
    },
    {
        num:2,
        question:'Which company owns c sharp?',
        answer:'microsoft',
        options:[
          'sun microsystems',
          'microsoft',
          'oracle',
          'IBM'
        ]
      },
      {
        num:3,
        question:'Which are the following are not the modifier keywords in c sharp?',
        answer:'params',
        options:[
          'override',
          'virtual',
          'volatile',
          'params'
        ]
      },
      {
        num:4,
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
        num:5,
        question:'What is the OOPs concept in java, that is used for exposing only necessary information to users?',
        answer:'Abstraction',
        options:[
          'Abstraction',
          'Encapsulation',
          'Data hiding',
          'Message passing'
        ]
      },
      {
        num:6,
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
        num:7,
        question:'Which of the following statements are incorrect about c# delegate?',
        answer:'None of the above',
        options:[
          'delegates are of reference types',
          'delegates are object oriented',
          'delegates are type safe',
          'None of the above'
        ]
      },
      {
        num:8,
        question:'How many types of constructors are supported in c#?',
        answer:'5',
        options:[
          '5',
          '4',
          '3',
          '2'
        ]
      },
      {
        num:9,
        question:'Which of the following statements are corrected about Arrays in c#',
        answer:'The duration for which the variable retains a given value during the execution of a program',
        options:[
          '.Length is used to return the size og the Array',
          'default values of numeric Array elements are set to zero, and reference elements are set to null',
          'Array elements can be of any type, including an array type',
          'All of the above'
        ]
      },
      {
        num:10,
        question:'Which of the following statements are incorrect about ArrayList in c#?',
        answer:'Struct',
        options:[
          'ArrayList is a fixed size collection',
          'To use an ArrayList we need to add a System.Collections namespace',
          'we can not implement multi-dimensional arrays using ArrayList',
          'None of the above'
        ]
      },/*
      {
        num:11,
        question:'Which of these data type values is returned by equals() method of String class?',
        answer:'boolean',
        options:[
          'char',
          'int',
          'boolean',
          'All of the mentioned'
        ]
      },
      {
        num:12,
        question:'Which of the following are not the functions of Tuple?',
        answer:'to use an Tuple we need to add a System.Collections namespace',
        options:[
          'provide easy access and manipulation of data',
          'to use an Tuple we need to add a System.Collections namespace',
          'return multiple values from a method without using out parameter',
          'pass multiple values to a method through a single parameter'
        ]
      },
      {
        num:13,
        question:'What is the Keyword that declares the indexer?',
        answer:'this',
        options:[
          'this',
          'base',
          'super',
          'extract'
        ]
      },  
      {
        num:14,
        question:'Which procedure among the following should be used to implement a "Has a" or a "Kind of" relationship between two entities?',
        answer:'All of the mentioned',
        options:[
          'Polymorphism',
          'Templates',
          'Inheritance',
          'All of the mentioned'
        ]
      },
      {
        num:15,
        question:'Which of the following is used to declare an interface correctly?',
        answer:'structures',
        options:[
          'Properties',
          'structures',
          'Methods',
          'Events'
        ]
      },     
      {
        num:16,
        question:'Which method is used for making a thread pause for a specific period of time?',
        answer:'sleep()',
        options:[
          'wait()',
          'suspend()',
          'push()',
          'sleep()'
        ]
      },
      {
        num:17,
        question:'what is the keyword that is used to throw an user defined exception?',
        answer:'Throws',
        options:[
          'raise',
          'Throws',
          'throws',
          'throw'
        ]
      },  
      {
        num:18,
        question:'Which of the given statements are valid about generics in .NET Framework',
        answer:'generics are useful in collection classes in .NET framework',
        options:[
          'generics are useful in collection classes in .NET framework',
          'generics delegates are not allowed in c#.NET',
          'generics is a not language feature',
          'all of the above'
        ]
      },
      {
        num:19,
        question:'What are the advantages of using generics?',
        answer:'All of the mentioned',
        options:[
          'Generics facilitate type safety',
          'Generics facilitate improved performance and reduced code',
          'Generics promote the usage of parameterized types',
          'All of the mentioned'
        ]
      },
      {
        num:20,
        question:'What is the extension of a C# language file?',
        answer:'.cs',
        options:[
          '.cpp',
          '.cs',
          '.c',
          '.py'
        ]
      }, 
      {
        num:21,
        question:'Which C# keyword is used to define a constant?',
        answer:'const',
        options:[
          'define',
          'const',
          'fixed',
          'constant'
        ]
      },
      {
        num:22,
        question:'Which is the base class of the String() Constructor?',
        answer:'System.String',
        options:[
          'System.Strings',
          'String',
          'System.String',
          'System.IO.String'
        ]
      },
      {
        num:23,
        question:' Which array method is used to sort an array alphabetically or in an ascending order in C#?',
        answer:'Sort()',
        options:[
          'Sorting()',
          'sorting()',
          'sort()',
          'Sort()'
        ]
      }, 
      {
        num:24,
        question:'What is the default access specifier of interface methods?',
        answer:'virtual',
        options:[
          'virtual',
          'public',
          'private',
          'protected'
        ]
      },
      {
        num:25,
        question:'Where do the objects created using new operator are stored?',
        answer:'Heap memory',
        options:[
          'Stack memory',
          'Heap memory',
          'cache memory',
          'None of the above'
        ]
      }  */                                     
];



for(var i=0;i<csharpquestions.length;i++)
{
  await addDoc(collection(db, 'CSharp_questions'), csharpquestions[i])
}


export default app