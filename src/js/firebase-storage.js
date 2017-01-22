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

    // Get elements
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // Listen for file selection
    fileButton.addEventListener('change', function (e) {
        // Get file
        // var file = e.target.files[0];
        var file = document.getElementById('fileButton').files[0];

        // Create a storage ref
        var storageRef = firebase.storage().ref('photos/' + file.name);

        // Upload file
        var task = storageRef.put(file);

        // Update progress bar
        task.on('state_change',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTrasferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            
            function error(err) {
                
            },

            function complete() {

            }
        );
    })

})();