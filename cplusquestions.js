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
let cplusquestions=[
    {
      num:1,
      question:'Who is the inventor of c++ language',
      answer:'Bjarne Stroustrup',
      options:[
        'James Gosling',
        'Dennis Ritchie',
        'Guido Van Rossum',
        'Bjarne Stroustrup'
      ]
    },
    {
        num:2,
        question:'Which of the following is provided by c++ but not the c?',
        answer:'bool',
        options:[
          'int',
          'float',
          'bool',
          'double'
        ]
      },
      {
        num:3,
        question:' How many types of output stream classes are there in c++?',
        answer:'3',
        options:[
          '4',
          '2',
          '1',
          '3'
        ]
      },
      {
        num:4,
        question:'Which of the following is extraction operator?',
        answer:'>>',
        options:[
            '>',
            '>>',
            '<<',
            '<'
        ]
      },
      {
        num:5,
        question:'Which of the following operator is having the highest precedence in c++?',
        answer:'Scope resolution operator',
        options:[
          'Scope resolution operator',
          'Array subscript',
          'static_cast',
          'dynamic_cast'
        ]
      },
      
      {
        num:6,
        question:' What is the use of dynamic_cast operator?',
        answer:'it converts virtual base class to derived class',
        options:[
          'it converts the virtual base object to derived objects',
          'it will convert the operator based on precedence',
          'it converts virtual base class to derived class',
          'it converts the virtual base object to derived class'
        ]
      },
      {
        num:7,
        question:'how many bytes do int arr[5] will take in memory?',
        answer:'10',
        options:[
          '10',
          '20',
          '5',
          'None of the above'
        ]
      },
      {
        num:8,
        question:'Which of the following function is used to read a string from a keyboard that may contain blank space?',
        answer:'cin.get()',
        options:[
          'cin.gets()',
          'cin.puts()',
          'cin.get()',
          'None of the above'
        ]
      },
      {
        num:9,
        question:'What is the predefined function that starts execution of the program?',
        answer:'main()',
        options:[
          'main()',
          'cout<<();',
          'cin>>();',
          'None of the above'
        ]
      },
      {
        num:10,
        question:'What are mandatory parts in the function declaration?',
        answer:'return type, function name, parameters',
        options:[
          'parameters, function name',
          'parameters, variables',
          'return type, function name, parameters',
          'return type, function name'
        ]
      },/*
      {
        num:11,
        question:'The operator used for dereferencing or indirection is',
        answer:'*',
        options:[
          '*',
          '&',
          '->.',
          '->'
        ]
      },
      {
        num:12,
        question:'Which value can we not assign to reference?',
        answer:'xyz',
        options:[
          '0',
          'xyz',
          'imaginary values',
          'unsigned'
        ]
      },
      {
        num:13,
        question:'Dynamic memory in C++ is allocated from which type of memory?',
        answer:'Heap',
        options:[
          'static',
          'Heap',
          'Stack',
          'None of the above'
        ]
      },  
      {
        num:14,
        question:'Which of the following operator is used to release the dynamically allocated memory?',
        answer:'delete',
        options:[
          'remove',
          'free',
          'delete',
          'release'
        ]
      },
      {
        num:15,
        question:'Which of the following is an abstract data type?',
        answer:'class',
        options:[
          'String',
          'double',
          'int',
          'class'
        ]
      },     
      {
        num:16,
        question:'What is the OOPs concept in C++, that is used for exposing only necessary information to users?',
        answer:'Abstraction',
        options:[
          'Abstraction',
          'Encapsulation',
          'Data hiding',
          'Hiding complexity'
        ]
      },
      {
        num:17,
        question:'Which of the following is not true about copy constructor?',
        answer:'Copy constructor is invoked whenever object is created',
        options:[
          'Copy constructor is invoked when a member function returns an object',
          'Copy constructor is invoked when an object is passed as a parameter to a member function',
          'Copy constructor is invoked when an object is passed by reference to constructor',
          'Copy constructor is invoked whenever object is created'
        ]
      },  
      {
        num:18,
        question:'Which of the following is automatically executed when the control reaches the end of class scope?',
        answer:'Destructor',
        options:[
          'Constructor',
          'Destructor',
          'Inline function',
          'Member function'
        ]
      },
      {
        num:19,
        question:'Which of the following allows function overloading in c++?',
        answer:'both number & types of arguments',
        options:[
          'number of arguments',
          'type of arguments',
          'both number & types of arguments',
          'None of the above'
        ]
      },
      {
        num:20,
        question:'Which of the following operator cant be overloaded?',
        answer:'?:',
        options:[
          '-',
          '%',
          '/',
          '?:'
        ]
      },
      {
        num:21,
        question:'The virtual function is used to tell the compiler to perform ________?',
        answer:'both 2 and 3',
        options:[
          'static linkage',
          'dynamic linkage',
          'late binding',
          'both 2 and 3'
        ]
      }, 
      {
        num:22,
        question:'What is an exception in C++ program?',
        answer:'A problem that arises during the execution of a program',
        options:[
          'A problem that arises during the execution of a program',
          'Also known as semantic error',
          'Also known as the syntax error',
          'A problem that arises during compilation'
        ]
      },
      {
        num:23,
        question:'What is the use of Namespace?',
        answer:'To structure a program into logical units',
        options:[
          'To encapsulate the data',
          'To structure a program into logical units',
          'Both 1 and 2',
          'None of the above'
        ]
      },
      {
        num:24,
        question:'What is the standard template library?',
        answer:'set of c++ template classes to provide common programming data structures and functions',
        options:[
          'set of c++ template classes to provide common programming data structures and functions',
          'set of c++ classes',
          'set of template functions used for easy data structures implementation',
          'set of template data structures only'
        ]
      }, 
      {
        num:25,
        question:'Which of the following is used in Multipath inheritance, in order to remove duplicate set of records in child class?',
        answer:'Make base class as virtual base class',
        options:[
          'Write Virtual function in parent classes',
          'Write virtual function is base class',
          'Make base class as virtual base class',
          'None of the above'
        ]
      },
      {
        num:26,
        question:'What is the default visibility mode if the derived class is struct?',
        answer:'public',
        options:[
          'public',
          'private',
          'protected',
          'None of the above'
        ]
      }, 
      {
        num:27,
        question:'which classes we can define the list and vector classes?',
        answer:'child classes',
        options:[
          'Abstract classes',
          'child classes',
          'STL classes',
          'String classes'
        ]
      },
      {
        num:28,
        question:'Which of the following is used to represent Generic catch handler?',
        answer:'catch(…)',
        options:[
          'catch(..,)',
          'catch(---)',
          'catch(…)',
          'catch( void x)'
        ]
      },
      {
        num:29,
        question:'From where does the template class derived?',
        answer:'Both 1 and 2',
        options:[
          'Regular non-templated C++ class',
          'Templated class',
          'Both 1 and 2',
          'None of the above'
        ]
      },
      {
        num:30,
        question:' If we have object from ofstream class, then default mode of opening the file is _____ ',
        answer:'ios::out|ios::trunk',
        options:[
          'ios::in',
          'ios::out',
          'ios::in|ios::trunc',
          'ios::out|ios::trunk'
        ]
      },      */                                  
];

for(var i=0;i<cplusquestions.length;i++)
{
  await addDoc(collection(db, 'cp_questions'), cplusquestions[i])
}




export default app