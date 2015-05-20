'use strict';

/**
 * @ngdoc function
 * @name nohumanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nohumanApp
 */
angular.module('nohumanApp')
.filter('toArray', function () {
    'use strict';

    return function (obj) {
        if (!(obj instanceof Object)) {
            return obj;
        }

        return Object.keys(obj).map(function (key) {
            return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
        });
    };
})

  .controller('MainCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://nohuman.firebaseio.com/");
    
    $scope.messages = $firebaseArray(ref);
  });
