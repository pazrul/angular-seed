'use strict';


// Declare app level module which depends on filters, and services
angular.module('tossersHonor', ['tossersHonor.filters', 'tossersHonor.services', 'tossersHonor.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/cities', {templateUrl: 'partials/city.html', controller: CitiesListCtrl}).
   		when('/games', {templateUrl: 'partials/game-in-progress.html', controller: CtrlMove}).
    	when('/players', {templateUrl: 'partials/players.html', controller: CtrlMove}).
    	when('/game', {templateUrl: 'partials/game.html', controller: CtrlMove}).
    	when('/game/:cityId', {templateUrl: 'partials/city-detail.html', controller: CityDetailCtrl}).
    	otherwise({redirectTo: '/cities'});
  }]);
