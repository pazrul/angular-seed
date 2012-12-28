'use strict';

/* Controllers */


function CtrlMove() {}
CtrlMove.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function CitiesListCtrl($scope, $http) {
	$http.get('cities/cities.json').success(function(data){
		$scope.cities = data;
	});
}
//CitiesListCtrl.$inject = ['$scope', '$http'];

function CityDetailCtrl($scope, $routeParams, $http) {
$http.get('cities/' + $routeParams.cityId + '.json').success(function(data) {
  $scope.city = data;
});
}
//CityDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];