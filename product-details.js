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


  //////////////Homepage Hide//////////////////////
 var wurl= window.location.href;

 if(wurl== "https://wesuzz.blogspot.com/" || wurl== "https://wesuzz.blogspot.com?m=1"){
document.getElementById("FullBody").style.display ="none";

 }


  ///////////////////Cart Check For Cart////////////////////

  var ProductID = document.getElementById("ProductID").innerHTML;

  var AllproductID = localStorage.getItem("AllproductID");

  if(AllproductID==null){

    localStorage.setItem("AllproductID", "Start");

    dosearchAction();
  }

  else{

    dosearchAction();
  }

  ////////////////////////Cart Button Show /hide Action/////////////////////
  function dosearchAction(){
    var AllproductID = localStorage.getItem("AllproductID");
    var ProductIDsearch = AllproductID.search(ProductID);

  if(ProductIDsearch==-1){

    document.getElementById("checkouts").style.display = "none";
   document.getElementById("addcarts").style.display = "block";

  }
  else{

    document.getElementById("checkouts").style.display = "block";
   document.getElementById("addcarts").style.display = "none";
  }

  }


  //////////////////Product Price/tag Red///////////////////

var TagFolder = "BE-commerce/Post/"+ProductID;
var RED = firebase.database().ref(TagFolder).child('price');
            RED.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("productPrice").innerHTML = Reddata;
			
			});  
  ///////////////////////////Cart Bandge Set///////////////

  var cartcheckr = localStorage.getItem("cartcheckr");

    if(cartcheckr==null){
    
      }

      else{
        document.getElementById("cardbandge").style.display = "block";
        document.getElementById("cardbandge").innerHTML = cartcheckr;
      }

///////////////////////////////////Cart TokenSet/////////////////////
function addCard(){
var carttoken = localStorage.getItem("CartToken");

if(carttoken==null || carttoken==0){
    var randomPath = Date.now();
    localStorage.setItem("CartToken", randomPath);
}
doCartadds();
}

function doCartadds(){
///////////////////////////////////Cart TokenSet Make Path////////////
    var carttoken = localStorage.getItem("CartToken");
    var SellsFolderId = "BE-commerce/Purchase/"+carttoken;

    firebase.database().ref(SellsFolderId).update({ 
        Stutas: "guest",
          });

//////////////////////this Product id add Cart Button Show /hide Action////////////
var ProductID = document.getElementById("ProductID").innerHTML;
var AllproductID = localStorage.getItem("AllproductID");
var AllproductID2 = AllproductID+ProductID;
localStorage.setItem("AllproductID", AllproductID2);

//////////////////////this Product id add Cart Button Show /hide Action////////////
var cartcheckr = localStorage.getItem("cartcheckr");

if(cartcheckr==null){
      localStorage.setItem("cartcheckr", 1);
      document.getElementById("cardbandge").style.display = "block";
      document.getElementById("cardbandge").innerHTML = 1;
      }

else{
    var cartcheckrsd = +cartcheckr;
    var cartcheckadd = +cartcheckrsd+1;
    localStorage.setItem("cartcheckr", cartcheckadd);
    document.getElementById("cardbandge").style.display = "block";
    document.getElementById("cardbandge").innerHTML = cartcheckadd;
      }
//////////////////////////////Product Update to FirebaseDatabase  Cart//////////////////////
var CartFolderId  = "BE-commerce/Purchase/"+carttoken+"/"+ProductID;

var img = document.getElementById("img1").src;
var title = document.getElementById("titles").innerHTML;
var price = document.getElementById("productPrice").innerHTML;
var quantity = document.getElementById("quantity").value;
var size = document.getElementById("sizes").value;
var subtotal = price*quantity;
var subtotals = subtotal;


firebase.database().ref(CartFolderId).update({ 
    img : img,
    title : title,
    price : price,
    size : size,
    quantity : quantity,
    subtotal : subtotals,
      });
 
      document.getElementById("checkouts").style.display = "block";
      document.getElementById("addcarts").style.display = "none";      
}
