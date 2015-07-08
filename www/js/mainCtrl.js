angular
.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';

  var number = [];

  $scope.values = [];

  $scope.viewSpace = 0;


  if(($scope.viewSpace + '').indexOf('.')=== -1){
    document.querySelector('.decimal').classList.remove('disabled');
  }


//functions for number keys
  $scope.set = function(digit){
    if($scope.negative){
      number.push(digit * -1);
    }else{
      number.push(digit);
    }
    $scope.viewSpace = number.join('');
    //only allow one decimal point in viewSpace
    if(($scope.viewSpace + '').indexOf('.')=== -1){
      document.querySelector('.decimal').classList.remove('disabled');
    }else{
      document.querySelector('.decimal').classList.add('disabled');
    }
    $scope.negative = false;
  }

//addition function
  $scope.add = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'addition';
    $scope.negative = false;
  }

//subtraction function
  $scope.sub = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'subtraction';
    $scope.negative = false;
  }

//multiplication function
  $scope.multiply = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'multiplication';
    $scope.negative = false;
  }

//division function
  $scope.divide = function(viewSpace){
    if(!$scope.operation){
      $scope.values.push(viewSpace * 1);
      number.length = 0;
    }
    $scope.operation = 'division';
    $scope.negative = false;
  }

//square function
  $scope.square = function(viewSpace){
    $scope.viewSpace = viewSpace * viewSpace;
  }

//square root function
  $scope.sqrt = function(viewSpace){
    $scope.viewSpace = Math.sqrt(viewSpace);
  }

//sin function
  $scope.sin = function(viewSpace){
    $scope.viewSpace = Math.sin(viewSpace);
  }

//cos function
  $scope.cos = function(viewSpace){
    $scope.viewSpace = Math.cos(viewSpace);
  }

//tan function
  $scope.tan = function(viewSpace){
    $scope.viewSpace = Math.tan(viewSpace);
  }

//arcsin function
  $scope.asin = function(viewSpace){
    $scope.viewSpace = Math.asin(viewSpace);
  }

//arccos function
  $scope.acos = function(viewSpace){
    $scope.viewSpace = Math.acos(viewSpace);
  }

//arctan function
  $scope.atan = function(viewSpace){
    $scope.viewSpace = Math.atan(viewSpace);
  }

//negate function
  $scope.negate = function(viewSpace){
    $scope.viewSpace = viewSpace * -1;
    $scope.negative = $scope.negative===true ? false : true;
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
    $scope.negative = false;
  }


}])
