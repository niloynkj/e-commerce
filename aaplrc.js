///////////////AAPLRC=Angular Admin Product List Request Controler//////////
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


////////Draft Product-1////
//////////////////////////


(function() {
  
  var Draftproduct = angular.module('Draftproduct', [ "firebase"]);

Draftproduct.controller('Maincontollerdraftproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Draft';
$scope.searchProfit   = 'Draft';
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

angular.module('Draftproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
  
});
})();
  
////////////////////////////////////////////////
////////////////Published Product-2///////////////////////
///////////////////////////////////////////////////////


(function() {
  
  var Publishedproduct = angular.module('Publishedproduct', [ "firebase"]);

Publishedproduct.controller('Maincontollerpublishedproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Live';
$scope.searchProfit   = 'Live';
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

angular.module('Publishedproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
  
});
})();


///////////////////////////////////Sale Order Request-3 ////////////////////
//////////////////////////////////////////////////////////////////////

(function() {
  
  var Saleordersproduct = angular.module('Saleordersproduct', [ "firebase"]);

Saleordersproduct.controller('Maincontollersaleordersproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Pending';
$scope.searchProfit   = '';
 $scope.showData = function( ){

 $scope.itemsPerPage = 10;
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

angular.module('Saleordersproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
  
});
})();



///////////////////////////////////////////////////
/////////////////////Sale complite -4//////////////
//////////////////////////////////////////////////


(function() {
  
var Salecompliteproduct = angular.module('Salecompliteproduct', [ "firebase"]);

Salecompliteproduct.controller('MaincontollerSalecompliteproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Complite';
$scope.searchProfit   = '';
 $scope.showData = function( ){

 $scope.itemsPerPage = 20;
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

angular.module('Salecompliteproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
  
});
})();



////////////////////////////Sale Ditalles Product/////////////////////


(function() {
  
  var Saledetailsproduct = angular.module('Saledetailsproduct', [ "firebase"]);

Saledetailsproduct.controller('MaincontollerSaledetailsproduct', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';
$scope.searchProfit   = '';
 $scope.showData = function( ){

 $scope.itemsPerPage = 10;
 $scope.currentPage = 0;
 
 var wurl = window.location.href;
var ScellIDS = wurl.replace("https://wesuzz.blogspot.com/p/sale-deatils.html?=", "")

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

angular.module('Saledetailsproduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
  
});
})();




 var nineDiv = document.getElementById('Draftproduct');
 var tenDiv = document.getElementById('Publishedproduct');
 var elevenDiv = document.getElementById('Saleordersproduct');
 var twelveDiv = document.getElementById('Salecompliteproduct');
 var thirteenDiv = document.getElementById('Saledetailsproduct');
    
       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(nineDiv, [ 'Draftproduct' ]);
              angular.bootstrap(tenDiv, [ 'Publishedproduct' ]);
              angular.bootstrap(elevenDiv, [ 'Saleordersproduct' ]);
              angular.bootstrap(twelveDiv, [ 'Salecompliteproduct' ]);
              angular.bootstrap(thirteenDiv, [ 'Saledetailsproduct' ]);
			  });
	   
