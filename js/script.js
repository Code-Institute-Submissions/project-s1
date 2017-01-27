var myval = angular.module('myval', []);

 myval.controller('MyValCtrl', ['$scope', function ($scope) { 
    $scope.formModel = {};

    $scope.onSubmit = function () {
     console.log('Hey im submitted!');
     console.log($scope.formModel);
   };     

}]);

