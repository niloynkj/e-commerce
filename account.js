var config = {
    apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"
        };
   firebase.initializeApp(config);
   
var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicatior = document.getElementById("Indicatior");
   
     
     function AccountRegister(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       document.getElementById("errorlog").style.display = "block";
       document.getElementById("errorlog").innerHTML =  errorMessage;
       // ...
       });

   
       firebase.auth().onAuthStateChanged(user => {
         if (user) {
           var d = new Date();
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var m = months[d.getMonth()];
            var e = d.getFullYear();
            var n = d.getDate(); 
            var Y5 = (m)+" "+(n)+" "+(e);
     
           var Fname = document.getElementById("username").value;
           var passw = document.getElementById("psw").value;
           var phoneNumber = document.getElementById("phoneNumber").value;
           var Femail = user.email;
           var FB_photoUrl = user.photoURL;
           var FemailVerified = user.emailVerified;
           var Fuid = user.uid;
           Duid = "BE-commerce/User/"+(Fuid);
        firebase.database().ref(Duid).update({
                     Name : Fname,
                     Email : Femail,
                     password : passw,
                     Position : "Premium",
                     phoneNumber: phoneNumber,
                     AC : 5,
                     Id : Fuid,
                     point: 0,
                     Totalpoint: 5,
                     Costpoint: 0,
                     Joindate: Y5,
   
                   });
    Regform.style.transform = "translateX(300px)"
    Loginform.style.transform = "translateX(300px)"
    Indicatior.style.transform = "translateX(0px)"
   
          }
                   
                   else {
                    Regform.style.transform = "translateX(0px)"
                    Loginform.style.transform = "translateX(0px)"
                    Indicatior.style.transform = "translateX(100px)"
   
                   
                   }
                   
                   });
   
     }
   
     firebase.auth().onAuthStateChanged(user => {
       if (user) {
        Regform.style.transform = "translateX(300px)"
        Loginform.style.transform = "translateX(300px)"
        Indicatior.style.transform = "translateX(0px)"
   
          }
                   
                   else {
                   
                    Regform.style.transform = "translateX(0px)"
                    Loginform.style.transform = "translateX(0px)"
                    Indicatior.style.transform = "translateX(100px)"
                   
                   
        }
               
               });

       
     
function AccountLogin(){

                var userEmail = document.getElementById("logemail").value;
                var userPass = document.getElementById("logpsw").value;
                
                firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("errorlog").style.display = "block";
                document.getElementById("errorlog").innerHTML =  errorMessage;
                
                // ...
                });

                var frb = firebase.auth();
                frb.onAuthStateChanged(user => {
                  if (user) {

                    window.location.href = "wp-admin.html";
                            ////
                   }
                            
                        else {
                    // No user is signed in.
                  }
                });

                }
             