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

firebase.initializeApp(firebaseConfig);

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //retrieve user input
    var email = document.getElementById("emmailid").value;
    var password = document.getElementById("password").value;

    //authenticate usr with firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential){
            //user successfully logged in
            var user = userCredential.user;
            //redirect user to another page 
            window.location.href = "screen1.html";
        })
        .catch(function(error){
            //handle authentication error
            //var errorCode = error.code;
            var errorMessage = error.message;

            //display error message
            var errorElement = document.getElementById("error-message");
            errorElement.textContent = errorMessage;
            errorElement.style.display = "block"; // show the error element
        });
});