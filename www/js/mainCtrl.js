angular
.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';

  var number = [];

  $scope.values = [];

  $scope.viewSpace = 0;

//functions for number keys
  $scope.set = function(digit){
    number.push(digit);
    $scope.viewSpace = number.join('');
  }

//addition function
  $scope.add = function(viewSpace){
    $scope.addition = true;
    $scope.values.push(parseInt(viewSpace));
    number.length = 0;
  }

//enter function
  $scope.execute = function(viewSpace){
    $scope.values.push(parseInt(viewSpace));
    number.length = 0;
    if($scope.addition === true){
      var sum = 0;
      $scope.values.forEach(function(value){
        return sum += value;
      })
      $scope.viewSpace = sum;
      $scope.addition = false;
      $scope.values.length = 0;
    }
  }

//clear function
  $scope.clear = function(){
    number.length = 0;
    $scope.values.length = 0;
    $scope.viewSpace = 0;
  }


}])
