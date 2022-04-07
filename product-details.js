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


  ///////////////////////////Cart Bandge Set///////////////

  var cartcheckr = localStorage.getItem("cartcheckr");

    if(cartcheckr==null){
    
      }

      else{
        document.getElementById("cardbandge").style.display = "block";
        document.getElementById("cardbandge").innerHTML = cartcheckr;
      }


  //////////////Cart Local Storage set////////////////
  
  var cartchecknew = localStorage.getItem("cart");
  var cartchecknew1 = localStorage.getItem("cart1");
  var cartchecknew2 = localStorage.getItem("cart2");

  if(cartchecknew==null){

    localStorage.setItem("cart", "0");
  }

  if(cartchecknew1==null){

    localStorage.setItem("cart1", "0");
  }

  if(cartchecknew2==null){

    localStorage.setItem("cart2", "0");
  }



//////////////////Product Price/tag Red///////////////////


  var TagFolder = "BE-commerce/Post/"+ProductID;
var RED = firebase.database().ref(TagFolder).child('price');
            RED.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("productPrice").innerHTML = "$"+Reddata;
			
			});       

 //////////////////////////Cart add Function ///////////////////     
   
   function addCard(){
    var AllproductID = localStorage.getItem("AllproductID");
    var ProductID = document.getElementById("ProductID").innerHTML;
    
    var AllproductID2 = AllproductID+ProductID;


    localStorage.setItem("AllproductID", AllproductID2);


    var cartcheckr = localStorage.getItem("cartcheckr");

    if(cartcheckr==null){
      localStorage.setItem("cartcheckr", 1);
      document.getElementById("cardbandge").style.display = "block";
        document.getElementById("cardbandge").innerHTML = 1;
      }

      else{
        doCartitem();
      }

    docartadd();
    
   }

 ///////////////////////////////Card Storage iten under iten////////////////  
function doCartitem(){
  var cartcheckr = localStorage.getItem("cartcheckr");

  if(cartcheckr < 4){

    var cartcheckrsd = +cartcheckr;
    var cartcheckadd = +cartcheckrsd+1;
    localStorage.setItem("cartcheckr", cartcheckadd);
    document.getElementById("cardbandge").style.display = "block";
    document.getElementById("cardbandge").innerHTML = cartcheckadd;
  }

}
/////////////////////Cart Add Compliting Storage by Storage//////////////////
   function docartadd(){
    var ProductID2 = document.getElementById("ProductID").innerHTML;
    var cartcheckr = localStorage.getItem("cart");
    var cartcheckr1 = localStorage.getItem("cart1");
    var cartcheckr2 = localStorage.getItem("cart2");
    if(cartcheckr==0){
      localStorage.setItem("cart", ProductID2);
      }
      else if(cartcheckr1==0){
        localStorage.setItem("cart1", ProductID2);
      }
  
      else if(cartcheckr2==0){
        localStorage.setItem("cart2", ProductID2);
      }
      else{
  
        alert("your Cart is full Please checkout First")
      }

      document.getElementById("checkouts").style.display = "block";
      document.getElementById("addcarts").style.display = "none";
   }





   
