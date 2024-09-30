document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const loginPanel = document.querySelector('.login-panel');
    const signupPanel = document.querySelector('.signup-panel');
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');

    // Initially show the login panel
    loginPanel.classList.add('active');

    // Switch to Sign-Up Panel
    switchToSignup.addEventListener('click', function () {
        loginPanel.classList.remove('active');
        signupPanel.classList.add('active');
    });

    // Switch to Login Panel
    switchToLogin.addEventListener('click', function () {
        signupPanel.classList.remove('active');
        loginPanel.classList.add('active');
    });
});

// ------------------------firebase-----------------------------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// import {getAuth, createUserWithEmailAndPassword, signInWithAndPassword} Form "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// import (getFirestore, setDoc, doc) form "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"

// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBSWedNRnpsAWhhY3uXeuBt7mw-7QJ_EEM",
//     authDomain: "e-shop-512f1.firebaseapp.com",
//     projectId: "e-shop-512f1",
//     storageBucket: "e-shop-512f1.appspot.com",
//     messagingSenderId: "350982405481",
//     appId: "1:350982405481:web:71c4ef52edc8723e1611f8",
//     measurementId: "G-EG8G794ELB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);


// {/* <script type="module"> */}
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";

//   const firebaseConfig = {
//     apiKey: "AIzaSyBSWedNRnpsAWhhY3uXeuBt7mw-7QJ_EEM",
//     authDomain: "e-shop-512f1.firebaseapp.com",
//     projectId: "e-shop-512f1",
//     storageBucket: "e-shop-512f1.appspot.com",
//     messagingSenderId: "350982405481",
//     appId: "1:350982405481:web:71c4ef52edc8723e1611f8",
//     measurementId: "G-EG8G794ELB"
//   };

//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);

//   // Sign up function
//   function signUpUser(email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User signed up:", user);
//         document.querySelector('.success-panel').style.display = 'block';
//         document.querySelector('.signup-panel').style.display = 'none';
//       })
//       .catch((error) => {
//         console.error("Signup error:", error.message);
//       });
//   }

//   // Login function
//   function loginUser(email, password) {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User logged in:", user);
//         // Redirect to dashboard or show a success message
//       })
//       .catch((error) => {
//         console.error("Login error:", error.message);
//       });
//   }

//   document.addEventListener('DOMContentLoaded', function () {
//     // Handle Login form submission
//     document.getElementById('login-form').addEventListener('submit', function (e) {
//       e.preventDefault();
//       const email = document.getElementById('login-email').value;
//       const password = document.getElementById('login-password').value;
//       loginUser(email, password);
//     });

//     // Handle Signup form submission
//     document.getElementById('signup-form').addEventListener('submit', function (e) {
//       e.preventDefault();
//       const email = document.getElementById('signup-email').value;
//       const password = document.getElementById('signup-password').value;
//       signUpUser(email, password);
//     });

//     // Handle success panel redirect to login
//     document.getElementById('go-to-login').addEventListener('click', function () {
//       document.querySelector('.success-panel').style.display = 'none';
//       document.querySelector('.login-panel').classList.add('active');
//     });
//   });
// // </script>


{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
//   import (getFirestore, setDoc, doc) form "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDWa4rUljlBIdqH-RhUmdLVBLg-bEXKB98",
//     authDomain: "e-shop-81d21.firebaseapp.com",
//     projectId: "e-shop-81d21",
//     storageBucket: "e-shop-81d21.appspot.com",
//     messagingSenderId: "287523467472",
//     appId: "1:287523467472:web:60854b2a9d4e59afcd6ed5"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   signUp.addEventListener('click',(event)=>{
//     event.preventDefault();
//     const email=document.getElementById('signup-email').value;
//     const password=document.getElementById('signup-password').value;
//     const name=document.getElementById('signup-name').value;

//     const auth=getAuth();
//     const db=getFirestore();

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         const user=userCredential.user;
//         const userData={
//             email: email,
//             name: name,

//         }
//     })


//   })
{/* </script> */}