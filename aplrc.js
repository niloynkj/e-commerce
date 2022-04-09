///////////////APLRC=Angular Product List Request Controler//////////
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


////////Letest Product-1////
//////////////////////////

(function() {
  
    var Letest = angular.module('Letest', [ "firebase"]);
  
  Letest.controller('Maincontollerletest', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
  
    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = 'Live';
  $scope.searchProfit   = '';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 10;
   $scope.currentPage = 0;
   
   var live = "BE-commerce/Post";
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
  
  angular.module('Letest').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
    
  });
  })();
  
////////////////////////////////////////////////
////////////////Future Product-2///////////////////////
///////////////////////////////////////////////////////

(function() {
  
  var Futureproduct = angular.module('Futureproduct', [ "firebase"]);

Futureproduct.controller('Maincontollerfutureproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Live';
$scope.searchProfit   = 'Future';
 $scope.showData = function( ){

 $scope.itemsPerPage = 4;
 $scope.currentPage = 0;
 
 var live = "BE-commerce/Post";
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

angular.module('Futureproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();


///////////////////////////////
/////////////Exclucive Product-3///////////////////

(function() {
  
    var Exclusiveproduct = angular.module('Exclusiveproduct', [ "firebase"]);
  
  Exclusiveproduct.controller('Maincontollerexclusiveproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
  
    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = 'Live';
  $scope.searchProfit   = 'Exclusive';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 1;
   $scope.currentPage = 0;
   
   var live = "BE-commerce/Post";
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
  
  angular.module('Exclusiveproduct').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
    
  });
  })();
  
////////////////////////////////////////////////
////////////////Discount Product-4///////////////////////
///////////////////////////////////////////////////////

(function() {
  
  var Discountproduct = angular.module('Discountproduct', [ "firebase"]);

  Discountproduct.controller('Maincontollerdiscountproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Live';
$scope.searchProfit   = 'Discount';
 $scope.showData = function( ){

 $scope.itemsPerPage = 1;
 $scope.currentPage = 0;
 
 var live = "BE-commerce/Post";
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

angular.module('Discountproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();


////////////////////////////////////////////////
////////////////related Product-5///////////////////////
///////////////////////////////////////////////////////

(function() {
  
    var Relatedproduct = angular.module('Relatedproduct', [ "firebase"]);
  
    Relatedproduct.controller('Maincontollerrelatedproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
  
    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = 'Live';
  $scope.searchProfit   = '';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 4;
   $scope.currentPage = 0;
   
   var live = "BE-commerce/Post";
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
  
  angular.module('Relatedproduct').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
  });
  
    
  })();



  ////////////////////////Cart Product-6//////////////////
  ////////////////////////////////////////////////////////

  
(function() {
  
    var Cartproduct = angular.module('Cartproduct', [ "firebase"]);
  
    Cartproduct.controller('Maincontollercartproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
  
    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';
  $scope.searchProfit   = '';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 1000;
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
  
  angular.module('Cartproduct').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
  });
  
    
  })();



  ////////////////////////////////////Check Out Products-7///////////////
  
(function() {
  
    var Checkoutproduct = angular.module('Checkoutproduct', [ "firebase"]);
  
    Checkoutproduct.controller('Maincontollercheckoutproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
    
var userIDS = localStorage.getItem("UserIDS");

    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = userIDS;
  $scope.searchProfit   = '';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 1000;
   $scope.currentPage = 0;
   
   var live = "BE-commerce/Purchase";
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
  
  angular.module('Checkoutproduct').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
  });
  
    
  })();



//////////////////////////////////Check out Ditalles-8////////////////////////

(function() {
  
    var Checkoutdetailsproduct = angular.module('Checkoutdetailsproduct', [ "firebase"]);
  
    Checkoutdetailsproduct.controller('Maincontollercheckoutdetailsproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {
  
    $scope.sortType     = 'date'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';
  $scope.searchProfit   = '';
   $scope.showData = function( ){
  
   $scope.itemsPerPage = 1000;
   $scope.currentPage = 0;
   
   var wurl = window.location.href;
var ScellIDS = wurl.replace("http://localhost/blogger/checkout-details.html?=", "")

 var live = "BE-commerce/Purchase/"+ScellIDS;
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
  
  angular.module('Checkoutdetailsproduct').filter('pagination', function(){
    return function(input, begin) {
      begin = parseInt(begin, 10);
      return input.slice(begin);
    };
  });
  
    
  })();



 var firstDiv = document.getElementById('Letest');
 var SecondDiv = document.getElementById('Futureproduct');
 var threeDiv = document.getElementById('Exclusiveproduct');
 var fourDiv = document.getElementById('Discountproduct');
 var fiveDiv = document.getElementById('Relatedproduct');
 var sixDiv = document.getElementById('Cartproduct');
 var sevenDiv = document.getElementById('Checkoutproduct');
 var eightDiv = document.getElementById('Checkoutdetailsproduct');
    
       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(firstDiv, [ 'Letest' ]);
              angular.bootstrap(SecondDiv, [ 'Futureproduct' ]);
              angular.bootstrap(threeDiv, [ 'Exclusiveproduct' ]);
              angular.bootstrap(fourDiv, [ 'Discountproduct' ]);
              angular.bootstrap(fiveDiv, [ 'Relatedproduct' ]);
              angular.bootstrap(sixDiv, [ 'Cartproduct' ]);
              angular.bootstrap(sevenDiv, [ 'Checkoutproduct' ]);
              angular.bootstrap(eightDiv, [ 'Checkoutdetailsproduct' ]);
			  });
	   
