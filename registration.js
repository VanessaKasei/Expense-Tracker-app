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
//initialize firebase 
firebase.initializeApp(firebaseConfig);//initializes firebase app with the provided configuration

//reference your firebase
var registrationForm = firebase.database().ref("registrationForm");

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
    },2000);

    // reset the form
    document.getElementById("regForm").reset();
}

const saveDetails = (name, userName, emailid) => {
  var newRegistrationForm = registrationForm.push();

  newRegistrationForm.set({
    name : name,
    userName : userName,
    emailid : emailid,
  });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}