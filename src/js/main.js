(function () {
// Initialize Firebase
    const config = {
        apiKey: "AIzaSyBQ4qwqqTRj9aQ4CPo8UMTXumYDl7HuStc",
        authDomain: "web-quickstart-1f1c1.firebaseapp.com",
        databaseURL: "https://web-quickstart-1f1c1.firebaseio.com",
        storageBucket: "web-quickstart-1f1c1.appspot.com",
        messagingSenderId: "784138686281"
    };
    firebase.initializeApp(config);

    var bigOne = document.getElementById('bigOne');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigOne.innerText = snap.val());


// get the element
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');

// create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // Sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });


    // Sync list changes
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val();
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    });

})();
