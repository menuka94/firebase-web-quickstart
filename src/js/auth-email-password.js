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

    // get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
       // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => console.log(e.message));
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