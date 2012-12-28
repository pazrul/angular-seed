'use strict';


// Declare app level module which depends on filters, and services
angular.module('tossersHonor', ['tossersHonor.filters', 'tossersHonor.services', 'tossersHonor.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cities', {templateUrl: 'partials/city.html', controller: CitiesListCtrl});
    $routeProvider.when('/games', {templateUrl: 'partials/game-in-progress.html', controller: CtrlMove});
    $routeProvider.when('/players', {templateUrl: 'partials/players.html', controller: CtrlMove});
    $routeProvider.when('/game', {templateUrl: 'partials/game.html', controller: CtrlMove});
    $routeProvider.otherwise({redirectTo: '/cities'});
  }]);
