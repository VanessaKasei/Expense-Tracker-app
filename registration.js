import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiYBkVLrObNIaVcaRKevmgdPteZipxFkM",
  authDomain: "expense-tracker-fef7a.firebaseapp.com",
  databaseURL: "https://expense-tracker-fef7a-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-fef7a",
  storageBucket: "expense-tracker-fef7a.appspot.com",
  messagingSenderId: "1032418652697",
  appId: "1:1032418652697:web:e3c06c01150d99d81fb088",
  measurementId: "G-D7CLLGRM6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

document.getElementById("upButton").addEventListener("click", registerUser); 
    // Call the registerUser() function when the button is clicked

// Function to handle user registration
function registerUser() {
  // Get form field values
  const email = document.getElementById("emailid").value;
  const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
     // Registration successful, access the user data
    const user = userCredential.user;
    console.log("User registered:", user.email);

      // Redirect the user to page1.html after successful registration
    window.location.href = "login.html";

      // Display a success message to the user
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  })
  .catch((error) => {
    
    //const errorCode = error.code;
      // Handle registration errors
    const errorMessage = error.message;
          console.error("Registration error:", errorMessage);

      // Display an error message to the user
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.style.display = "block";
      errorMessageElement.innerText = errorMessage;

  });
}

  


















/*
//initialize firebase 
firebase.initializeApp(firebaseConfig);//initializes firebase app with the provided configuration

//reference your firebase
var registrationFormDB = firebase.database().ref("registrationForm");

document.getElementById("regForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var userName = getElementVal('userName');
    var emailid = getElementVal('emailid');

    saveDetails(name, userName, emailid);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert
    setTimeout(() => { 
    document.querySelector(".alert").style.display = "block";
    },3000);

    // reset the form
    document.getElementById("regForm").reset();
}

const saveDetails = (name, userName, emailid) => {
  var newRegistrationForm = registrationFormDB.push();

  newRegistrationForm.set({
    name : name,
    userName : userName,
    emailid : emailid,
  });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};*/