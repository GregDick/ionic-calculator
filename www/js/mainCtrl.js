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
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'addition';
  }

//subtraction function
  $scope.sub = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'subtraction';
  }

//multiplication function
  $scope.multiply = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'multiplication';
  }

//division function
  $scope.divide = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'division';
  }

//enter function
  $scope.execute = function(viewSpace){
    $scope.values.push(viewSpace * 1);
    number.length = 0;
    //do addition
    if($scope.operation === 'addition'){
      $scope.viewSpace = $scope.values[0] + $scope.values[1];
      $scope.operation = '';
      $scope.values.length = 0;
    }
    //do subtraction
    else if($scope.operation === 'subtraction'){
      $scope.viewSpace = $scope.values[0] - $scope.values[1];
      $scope.operation = '';
      $scope.values.length = 0;
    }
    //do multiplication
    else if($scope.operation === 'multiplication'){
      $scope.viewSpace = $scope.values[0] * $scope.values[1];
      $scope.operation = '';
      $scope.values.length = 0;
    }
    //do division
    else if($scope.operation === 'division'){
      $scope.viewSpace = $scope.values[0] / $scope.values[1];
      $scope.operation = '';
      $scope.values.length = 0;
    }

  }

//clear function
  $scope.clear = function(){
    number.length = 0;
    $scope.values.length = 0;
    $scope.viewSpace = 0;
    $scope.operation = '';
  }


}])
