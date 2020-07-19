


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      window.location.href = "afterlogin.html"
      break
  
      //var user = firebase.auth().currentUser;
  
      var user = firebase.auth().currentUser;
      if(user!=null){
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome User : " + email_id
  
      }
  
    } 

    
  });
  
  
  function login(){
    
    window.alert("welcome")
      var userEmail = document.getElementById('email_field').value;
      var userPass = document.getElementById('password_field').value;
  
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) 
      {
          
          var errorCode = error.code;
          var errorMessage = error.message;
  
          window.alert("Error : " + errorMessage);
          // ...   
      });
  }
  
  function logout(){
  
      firebase.auth().signOut();
      
  }