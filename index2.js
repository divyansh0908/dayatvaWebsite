var firebaseConfig = {
    apiKey: "AIzaSyBOPE0fbFSOfhCH_75CMuyddRShBRPCl5U",
    authDomain: "dayatva-login-8edaa.firebaseapp.com",
    databaseURL: "https://dayatva-login-8edaa.firebaseio.com",
    projectId: "dayatva-login-8edaa",
    storageBucket: "dayatva-login-8edaa.appspot.com",
    messagingSenderId: "684154421340",
    appId: "1:684154421340:web:7e2ef2e4653a9623876699",
    measurementId: "G-1VLCSWE7C1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


firebase.database().ref("/local/"+localStorage.getItem("ad")).once('value').then(function(snap){

    nam=snap.val().name;
    document.getElementById("name22").innerHTML=nam;
    post=snap.val().post;
    document.getElementById("designation").innerHTML=post;
    des=snap.val().description;
    document.getElementById("description").innerHTML=des;
    var url=snap.val().imgSrc;
        var img = document.getElementById('myimg1');
        img.src = url;

});
