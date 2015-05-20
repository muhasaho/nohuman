'use strict';

/**
 * @ngdoc function
 * @name nohumanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nohumanApp
 */
angular.module('nohumanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
