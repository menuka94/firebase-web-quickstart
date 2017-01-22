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

    // on branch - Test
    var storageRef = firebase.storage().ref();

    function handleFileSelect(event){
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];

        var metadata = {
            'contentType': file.type
        };

        // Push to child path
        // [START oncomplete]
        storageRef.child('images/' + file.name)
            .put(file, metadata)
            .then(function (snapshot) {
                console.log('Uploaded' , snapshot.totalBytes, 'bytes.');
                console.log(snapshot.metadata);
                var url = snapshot.metadata.downloadURLs[0];
                console.log('File available at', url);

            })
            .catch(function (error) {
                // [START onfailure]
                console.error('Upload failed:', error);
                // [END onfailure]
            });
        // [END oncomplete]
    }

    window.onload = function () {
        document.getElementById('file').addEventListener('change', handleFileSelect, false);
        // document.getElementById('file').disabled = true;
    }

})();