/*_____________________________________FIREBASE-JS_____________________________________________*/

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAuth, onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 import { getFirestore, orderBy,doc, query , getDoc, where,getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
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
  

   onAuthStateChanged(auth, (user) => {
    if (!user) {
      // If there is no user we should be index.html not in welcome page
      location.replace("./login page/login-index.html");
    }
    else{
      const disName=auth.currentUser.displayName;
      const canvas=document.getElementById('canvas')
      const ctx=canvas.getContext('2d')
      const downloadBtn=document.getElementById("congo-btn")
      //const disName=auth.currentUser.displayName

      const image=new Image()
      image.src="./images/java-certi-finale.jpg" 
      image.onload=function(){
      drawImg()
      }

      function drawImg(){
      ctx.drawImage(image,0,0,canvas.width,canvas.height)
      ctx.font='55px Poppins, sans-serif'
      ctx.fillStyle='#16dad0'
    
      if(disName.length==7)
      {
        ctx.fillText(disName,579,335)
      }

      if(disName.length==6)
      {
        ctx.fillText(disName,585,335)
      }
      if(disName.length==5)
      { 
        ctx.fillText(disName,600,335)
      }
      if(disName.length==4)
      {
        ctx.fillText(disName,620,335)
      }
      if((disName.length>=8) && (disName.length<=10))
      {
        ctx.fillText(disName,570,335)
      }

      if(disName.length>=11 && disName.length<20)
      {
        ctx.font='40px Poppins, sans-serif'
        ctx.fillStyle='#16dad0'
        ctx.fillText(disName,480,335)
      }

      if(disName.length>=20 && disName.length<30)
      {
        ctx.font='30px Poppins, sans-serif'
        ctx.fillStyle='#16dad0'
        ctx.fillText(disName,480,335)
      }
      if(disName.length>=30 && disName.length<40)
      {
        ctx.font='20px Poppins, sans-serif'
        ctx.fillStyle='#16dad0'
        ctx.fillText(disName,470,335)
      }
      if(disName.length>=40 && disName.length<50)
      {
        ctx.font='15px Poppins, sans-serif'
        ctx.fillStyle='#16dad0'
        ctx.fillText(disName,465,335)
      }
      ctx.fontWeight=900
      }

        downloadBtn.addEventListener("click",()=>{
        downloadBtn.href=canvas.toDataURL('image/png')
        downloadBtn.download=disName+"'s Java Certificate"
      })
    }
  });  
   


export default app