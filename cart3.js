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


var frb = firebase.auth();
frb.onAuthStateChanged(user => {
  if (user) {

    var Fuid = user.uid;
    var TagFolderUser = "BE-commerce/User/"+Fuid;
    localStorage.setItem("UserIDS", Fuid);

    document.getElementById("userid").value = Fuid;
   
    var REDU = firebase.database().ref(TagFolderUser).child('Name');
            REDU.on('value', function(snapshot) {
            var Reddata = (snapshot.val());	
			document.getElementById("name").value = Reddata;
			}); 
  var REDU1 = firebase.database().ref(TagFolderUser).child('phoneNumber');
      REDU1.on('value', function(snapshot) {
      var Reddata = (snapshot.val());	
document.getElementById("phonenumber").value = Reddata;
});   

var REDU2 = firebase.database().ref(TagFolderUser).child('adress');
      REDU2.on('value', function(snapshot) {
      var Reddata = (snapshot.val());	
document.getElementById("adress").value = Reddata;
}); 

            ////
   }
            
        else {

    // No user is signed in.
  }
});


////////////////SalePending Dsta red/////////////

var REDSE25 = firebase.database().ref("Admin").child('Salepending');
    REDSE25.on('value', function(snapshot) {
    var Reddata = (snapshot.val());
    document.getElementById("Salepending").value = Reddata;
    });

/////////////////////////////Payment and Checkout////////////

function payment(){

var FuserID = document.getElementById("userid").value;

if(FuserID==""){
    window.location.href = "account.html";     

}
else{
    document.getElementById("mycartprice").style.display = "none";
    document.getElementById("paymentmethords").style.display = "block";
    document.getElementById("bikashout").style.display = "block";

}
  

  }



  //////////////////Select Payment methods//////////////

  function bikashpay(){
    document.getElementById("paymethord").value = "Bikash";
    document.getElementById("paymentnumber").placeholder = "Enter Your Bikash Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Bikash";

    var REDSE = firebase.database().ref("Admin").child('Bikash');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("pmessage").innerHTML = Reddata;
			
			});
  }
  function nogodpay(){
    document.getElementById("paymethord").value = "Nogod";
    document.getElementById("paymentnumber").placeholder = "Enter Your Nogod Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Nogod";

    var REDSE = firebase.database().ref("Admin").child('nogod');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("pmessage").innerHTML = Reddata;
			
			});
  }
  function ucashpay(){
    document.getElementById("paymethord").value = "Ucash";
    document.getElementById("paymentnumber").placeholder = "Enter Your Ucash Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Ucash";

    var REDSE = firebase.database().ref("Admin").child('ucash');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("pmessage").innerHTML = Reddata;
			
			});
  }
  

  ////////////////////////////////////////Request Complite///////////////////////////////////////
  function  finishedcheckout(){


    var carttoken = localStorage.getItem("CartToken");
    var SellsFolderId = "BE-commerce/Purchase/"+carttoken;
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  var Dates = m + "/" + d + "/" + y;
  
   var userid =  document.getElementById('userid').value;
  var neme = document.getElementById('name').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var adress =  document.getElementById('adress').value;
  
  var totalitem = localStorage.getItem("cartcheckr");
  var serviceCharge = document.getElementById('Stext').innerHTML;
  var subtotal = document.getElementById('Fsubtotal').innerHTML;
  var total = document.getElementById('Ftotal').innerHTML;
  var payment = document.getElementById('paymethord').value;
  var paymentnumber =  document.getElementById('paymentnumber').value;
    
  
  
  
  firebase.database().ref(SellsFolderId).update({ 
    SellID : carttoken,
    userid : userid,
    neme : neme,
    phonenumber : phonenumber,
    adress : adress,
    totalitem : totalitem,
    subtotal : subtotal,
    totalprice : total,
    payment : payment,
    paymentnumber : paymentnumber,
    Stutas: "Pending",
    Stutashtml : "Pending",
    Date : Dates,
    serviceCharge : serviceCharge,
      });

///////////////Sale Pending Conut Estimate///////////////

     var Salepending = document.getElementById("Salepending").value;
     var Fsalespending = +Salepending+1;
        firebase.database().ref("Admin").update({ 
        
         Salepending :  Fsalespending,
        });   


    document.getElementById("payouts").style.display = "none";
    document.getElementById("paymentmethords").style.display = "none";
    document.getElementById("complitecheck").style.display = "block";

    localStorage.setItem("cartcheckr", 0);
    localStorage.setItem("AllproductID", "start");
    localStorage.setItem("CartToken", 0);
  

   }

