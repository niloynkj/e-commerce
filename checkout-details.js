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
  
  var wurl = window.location.href;
  var ScellIDS = wurl.replace("http://localhost/blogger/checkout-details.html?=", "")
  
  var TagFolder = "BE-commerce/Purchase/"+ScellIDS;
  var RED = firebase.database().ref(TagFolder).child('Date');
              RED.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("dates").innerHTML ="Date: "+ Reddata;
              
              }); 
  
  var RED1 = firebase.database().ref(TagFolder).child('SellID');
              RED1.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("ids").innerHTML = "ID: "+ Reddata;
  }); 
  
  
  var RED11 = firebase.database().ref(TagFolder).child('Stutashtml');
              RED11.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("stutas").innerHTML ="Stutas: "+ Reddata;
              
              }); 
  
  var RED2 = firebase.database().ref(TagFolder).child('neme');
              RED2.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("name").innerHTML = "Name: "+ Reddata;
  });
  
  var RED3 = firebase.database().ref(TagFolder).child('phonenumber');
              RED3.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("phnumber").innerHTML = "Phone number: "+ Reddata;
              
              });
  var RED4 = firebase.database().ref(TagFolder).child('adress');
              RED4.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("adress").innerHTML ="Adress: " +Reddata;
  });             
  
  var RED5 = firebase.database().ref(TagFolder).child('payment');
              RED5.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("pmethod").innerHTML ="Pament method: "+ Reddata;
  });
  
  var RED6 = firebase.database().ref(TagFolder).child('paymentnumber');
              RED6.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("prnumber").innerHTML = "Pament Number: "+ Reddata;
  }); 
  
  
  var RED61 = firebase.database().ref(TagFolder).child('totalitem');
              RED61.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("totalitem").innerHTML = "Total Item: "+ Reddata;
              
              });
  
  var RED7 = firebase.database().ref(TagFolder).child('serviceCharge');
              RED7.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("sercharge").innerHTML ="service Charge: "+ Reddata;
  }); 
  
  var RED8 = firebase.database().ref(TagFolder).child('subtotal');
              RED8.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("stotal").innerHTML ="Sub Total: "+ Reddata;
  }); 
  
  var RED9 = firebase.database().ref(TagFolder).child('totalprice');
              RED9.on('value', function(snapshot) {
              var Reddata = (snapshot.val());
              
              document.getElementById("total").innerHTML ="Total Price: "+ Reddata;
              
              });  
  



              /////////////////////////Menu Troggel////////////

              
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

///////////////////////////Cart Bandge Set///////////////

var cartcheckr = localStorage.getItem("cartcheckr");

if(cartcheckr==null || cartcheckr==0){

  }

  else{
    document.getElementById("cardbandge").style.display = "block";
    document.getElementById("cardbandge").innerHTML = cartcheckr;
  }

