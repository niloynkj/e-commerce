//////////////////////////////Releted/Product////////////
var config = {
    apiKey: "AIzaSyCWGbJi9qeD7h6BPhAKBoWupHv21Tge3ck",
  authDomain: "effort-5efac.firebaseapp.com",
  databaseURL: "https://effort-5efac.firebaseio.com",
  projectId: "effort-5efac",
  storageBucket: "effort-5efac.appspot.com",
  messagingSenderId: "771931121287",
  appId: "1:771931121287:web:9fe9abdcab7c369f277a22",
  measurementId: "G-GLD9CY5VPF"};
firebase.initializeApp(config);

////////trgull menu////Arry////


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
//////////////////////////

(function() {
  
  var mycartprice = angular.module('mycartprice', [ "firebase"]);

mycartprice.controller('Maincontollers', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

$scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  
$scope.searchFish   = '';
$scope.searchProfit   = ''; // Extra Search path
 $scope.showData = function( ){

 $scope.itemsPerPage = 10000;
 $scope.currentPage = 0;
 
 var carttoken = localStorage.getItem("CartToken");
 
 var live = "BE-commerce/Purchase/"+carttoken;
var ref = firebase.database().ref().child(live);

  $scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
      
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
};


}]);

angular.module('mycartprice').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();


////////////Add Another ///
////////////////////////////////

 var firstDiv = document.getElementById('mycartprice');

    
       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(firstDiv, [ 'mycartprice' ]); 
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

var REDSE = firebase.database().ref("Admin").child('ServiceCharge');
            REDSE.on('value', function(snapshot) {
            var Reddata = (snapshot.val());
			
			document.getElementById("Stext").innerHTML = Reddata;
      dotimers(Reddata);
      document.getElementById("Stext2").innerHTML = "Servece Charge: ৳ "+ Reddata;
			
			}); 


      var REDSE1 = firebase.database().ref("Admin").child('Bikash');
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
              console.log(sumVal);
     var FTotal = +CartEstimate+Reddata   
    document.getElementById("Fsubtotal").innerHTML = CartEstimate;
    document.getElementById("Ftotal").innerHTML = FTotal;

    finallyup(CartEstimate);
    
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


  var REDSE2 = firebase.database().ref("Admin").child('ServiceCharge');
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

    var REDSE3 = firebase.database().ref("Admin").child('ServiceCharge');
    REDSE3.on('value', function(snapshot) {
    var Reddata = (snapshot.val());
    dotimers(Reddata);

});

  }


  /////////////////////////////User Data Red///////////////////
