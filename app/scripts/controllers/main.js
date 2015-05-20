'use strict';

/**
 * @ngdoc function
 * @name nohumanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nohumanApp
 */
angular.module('nohumanApp')
  .controller('MainCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://nohuman.firebaseio.com/");
    
    $scope.messages = $firebaseArray(ref);
  });
