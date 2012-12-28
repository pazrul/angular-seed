'use strict';


// Declare app level module which depends on filters, and services
angular.module('tossersHonor', ['tossersHonor.filters', 'tossersHonor.services', 'tossersHonor.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cities', {templateUrl: 'partials/city.html', controller: MyCtrl1});
    $routeProvider.when('/games', {templateUrl: 'partials/game-in-progress.html', controller: MyCtrl2});
    $routeProvider.when('/players', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
