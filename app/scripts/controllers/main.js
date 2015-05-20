'use strict';

/**
 * @ngdoc function
 * @name nohumanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nohumanApp
 */
angular.module('nohumanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
