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


////////Profit////Arry////
//////////////////////////


////Cost/////////Arry///
////////////////////////////////


(function() {
  
  var Letest = angular.module('Letest', [ "firebase"]);

Letest.controller('Maincontoller', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Live';
$scope.searchCost   = '';
 $scope.showData = function( ){

 $scope.itemsPerPage = 1000;
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

////////////////////OO/////////////

(function() {
  
  var FProduct = angular.module('FProduct', [ "firebase"]);

FProduct.controller('Maincontollersf', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = 'Live';
$scope.searchProfit   = 'Future';
 $scope.showData = function( ){

 $scope.itemsPerPage = 1000;
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

angular.module('FProduct').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();


//////////



 var SecondDiv = document.getElementById('Letest');
 var firstDiv = document.getElementById('FProduct');
    
       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(SecondDiv, [ 'Letest' ]);
	       angular.bootstrap(firstDiv, [ 'FProduct' ]);
			  });
	   
