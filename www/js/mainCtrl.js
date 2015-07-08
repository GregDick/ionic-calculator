angular
.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';

  var number;

  $scope.viewSpace;

//functions for number keys
  $scope.set = function(num){
    $scope.viewSpace = num;
  }



}])
