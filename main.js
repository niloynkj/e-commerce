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
  
  var TagFolder = "Admin/Catagory";
  var RED1 = firebase.database().ref(TagFolder).child('catagoriimg1');
              RED1.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg1").src = Reddata;
              
              }); 
  
  var RED2 = firebase.database().ref(TagFolder).child('catagoriimg2');
              RED2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg2").src = Reddata;
              
              }); 
              
  var RED3 = firebase.database().ref(TagFolder).child('catagoriimg3');
              RED3.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagoriimg3").src = Reddata;
              
              });
              
  var RED4 = firebase.database().ref(TagFolder).child('catagorilink1');
              RED4.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("catagorilink1").href = Reddata;
              
              });             
  
  var RED5 = firebase.database().ref(TagFolder).child('catagorilink2');
              RED5.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              document.getElementById("catagorilink2").href = Reddata;
              
              });           
  var RED6 = firebase.database().ref(TagFolder).child('catagorilink3');
              RED6.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("catagorilink3").href = Reddata;
              
              });   
  ///////////////////////////Cart Bandge Set///////////////
  
  var cartcheckr = localStorage.getItem("cartcheckr");
  
  if(cartcheckr==null || cartcheckr==0){
  
    }
  
    else{
      document.getElementById("cardbandge").style.display = "block";
      document.getElementById("cardbandge").innerHTML = cartcheckr;
    }
  
  
      var MenuItems = document.getElementById("MenuItems");
  
      MenuItems.style.maxHeight = "0px";
  
      function menutoggle(){
  
  if(MenuItems.style.maxHeight == "0px"){
      MenuItems.style.maxHeight = "200px";
  
  }
  
  else{
  
  
      MenuItems.style.maxHeight = "0px";
  }
  
      }
  