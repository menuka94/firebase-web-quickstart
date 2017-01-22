(function () {
    // Initialize firebase
    const config = {
        apiKey: "AIzaSyBQ4qwqqTRj9aQ4CPo8UMTXumYDl7HuStc",
        authDomain: "web-quickstart-1f1c1.firebaseapp.com",
        databaseURL: "https://web-quickstart-1f1c1.firebaseio.com",
        storageBucket: "web-quickstart-1f1c1.appspot.com",
        messagingSenderId: "784138686281"
    };
    firebase.initializeApp(config);

    var provider = new firebase.auth.GoogleAuthProvider();

    // optional
    // provider.addScope('http://www.googleapis.com/auth/plus.login');

    // get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLoginWithGoogle = document.getElementById('btnLoginWithGoogle');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLoginWithGoogle.addEventListener('click', e => {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign In the Google Account
        firebase.auth().signInWithPopup(provider)
            .then(function(result){
                // This gives you a Google Access Token. You can use it to access the Google API
                var token = result.credential.accessToken;
                // The signed-in user info
                var user = result.user;

            }).catch(function(){
                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;
                var credential = error.credential;
            })
    });

    // Add signpu event
    btnSignUp.addEventListener('click', e => {
        // TODO: check 4 real email
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign In
        const promise = auth.createUserWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            btnLogout.classList.remove('hidden');
        }else{
            console.log('not logged in');
        }
    });


    // Add listener to logout button
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

})();