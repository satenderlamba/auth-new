var firebaseConfig = {
    apiKey: "AIzaSyBNEF17RYaE7W0tRFBche1TsR7iRNORA_Q",
    authDomain: "dec-self.firebaseapp.com",
    databaseURL: "https://dec-self.firebaseio.com",
    projectId: "dec-self",
    storageBucket: "dec-self.appspot.com",
    messagingSenderId: "432462687749",
    appId: "1:432462687749:web:063e2040ac1077e265b66c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signInUsers() {
    var email = document.getElementById('email').value
    var pass = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.MESSAGE;
            console.log(errorCode);
            console.log(errorMessage);
            window.location.href="/users/login"
        })

}

function checkIfLogedIn() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user)
            var emailv = user.email;
            console.log("User is signed in. with email: " + emailv);

        } else { // if the user is not logged in
            console.log("No user is signed in.");
        }
    });
}

window.onload = function () {
    checkIfLogedIn()
}
function logout() {
    firebase.auth().signOut();
    checkIfLogedIn()
}
