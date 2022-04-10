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

/////////////////////////////User Data Red///////////////////

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



///////////////////////////Cart Bandge Set///////////////

var cartcheckr = localStorage.getItem("cartcheckr");

if(cartcheckr==null || cartcheckr==0){

  }

  else{
    document.getElementById("cardbandge").style.display = "block";
    document.getElementById("cardbandge").innerHTML = cartcheckr;
  }

///////////////////////Service-Charge-set/////////////////
var PaymentFolder= "Admin/Payment"

var REDSE = firebase.database().ref(PaymentFolder).child('ServiceCharge');
        REDSE.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
  
  document.getElementById("Stext").innerHTML = Reddata;
  dotimers(Reddata);
  document.getElementById("Stext2").innerHTML = "Servece Charge: ৳ "+ Reddata;
  
  }); 


  var REDSE1 = firebase.database().ref(PaymentFolder).child('Bikash');
        REDSE1.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
  
  document.getElementById("pmessage").innerHTML = Reddata;
  
  }); 




 ///////////////////Timer---St/////////////       
       
      function dotimers(Reddata){
        var timeleft = 2;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
              var quantity = document.getElementById("Titcheck").innerHTML;
            if(quantity =="{{page.title}}"){
              dotimers();
              
            }
            else{
              UpdateEstimate(Reddata);
            }

          }
          timeleft -= 1;
        }, 1000);   
      } 
      
///////////////////////////Estimate////////////////////////

function UpdateEstimate(Reddata){

var table = document.getElementById("CartEstimate"), sumVal = 0;
          
          for(var row = 1; row < table.rows.length; row++)
          {
              sumVal = sumVal + parseInt(table.rows[row].cells[2].innerHTML);
          }
          
    var CartEstimate = sumVal;

 var FTotal = +CartEstimate+Reddata   
document.getElementById("Fsubtotal").innerHTML = CartEstimate;
document.getElementById("Ftotal").innerHTML = FTotal;

}


///////////////////Quantity Change///////////////////////

function reply_clicks(clicked_id)
{
var  quantity = document.getElementById(clicked_id).value;
if(quantity>1){
var cprices =  "cprice"+clicked_id;
var subtotal = "subtotal"+clicked_id;
var price =  document.getElementById(cprices).innerHTML;
var Fprice = price*quantity;
document.getElementById(subtotal).innerHTML = Fprice;


var carttoken = localStorage.getItem("CartToken");
CacrtFolderupdate2 = "BE-commerce/Purchase/"+carttoken+"/"+clicked_id;
firebase.database().ref(CacrtFolderupdate2).update({ 
quantity : quantity,
subtotal : Fprice,
});


var REDSE2 = firebase.database().ref(PaymentFolder).child('ServiceCharge');
        REDSE2.on('value', function(snapshot) {
        var Reddata = (snapshot.val());
        UpdateEstimate(Reddata);
  
  });
}
}


///////////////////////////////////////RemoveSection//////////////////////////

function reply_click(clicked_id)
{ 
var carttoken = localStorage.getItem("CartToken");
var cartIDS = clicked_id;
var cartID2 = cartIDS.replace("Delate", "")
var DeleteData = "BE-commerce/Purchase/"+carttoken+"/"+cartID2;
firebase.database().ref(DeleteData).remove();

var AllproductID = localStorage.getItem("AllproductID");
var AllproductID2 = AllproductID.replace(cartID2, "");
localStorage.setItem("AllproductID", AllproductID2);

var cartcheckr = localStorage.getItem("cartcheckr");
var cartcheckadd = cartcheckr-1;
localStorage.setItem("cartcheckr", cartcheckadd);
document.getElementById("cardbandge").style.display = "block";
document.getElementById("cardbandge").innerHTML = cartcheckadd;

var REDSE3 = firebase.database().ref(PaymentFolder).child('ServiceCharge');
REDSE3.on('value', function(snapshot) {
var Reddata = (snapshot.val());
dotimers(Reddata);

});

}






/////////////////////////////Payment and Checkout////////////

function payment(){

var FuserID = document.getElementById("userid").value;
if(FuserID==""){
    window.location.href = "account.html";     

}
else{
    document.getElementById("Cartproduct").style.display = "none";
    document.getElementById("paymentmethords").style.display = "block";
    document.getElementById("bikashout").style.display = "block";

}
  

  }



  //////////////////Select Payment methods//////////////

  function bikashpay(){
    document.getElementById("paymethord").value = "Bikash";
    document.getElementById("paymentnumber").placeholder = "Enter Your Bikash Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Bikash";

    var REDSE = firebase.database().ref(PaymentFolder).child('Bikash');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("pmessage").innerHTML = Reddata;
			
			});
  }
  function nogodpay(){
    document.getElementById("paymethord").value = "Nogod";
    document.getElementById("paymentnumber").placeholder = "Enter Your Nogod Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Nogod";

    var REDSE = firebase.database().ref(PaymentFolder).child('nogod');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("pmessage").innerHTML = Reddata;
			
			});
  }
  function ucashpay(){
    document.getElementById("paymethord").value = "Ucash";
    document.getElementById("paymentnumber").placeholder = "Enter Your Ucash Number";
    document.getElementById("payouttitle").innerHTML = "Cash On Ucash";

    var REDSE = firebase.database().ref(PaymentFolder).child('ucash');
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

/////////////////////Menu troggel/////////////////

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
