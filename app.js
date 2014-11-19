var myApp = angular.module('prac_App',[]);

myApp.controller('ctrl1',function($scope,$http){	
	$scope.planets = [];

	$http({url:'planets.json',method:'GET'})
	.success(function(resp){
		$scope.planets = resp.planetsArray;
	});

	//shortcuts---> $http.get('planets.json').success(function(resp){})
	//.error(function(e){});
	//look for more in api reference

});

myApp.filter('planetSorter',function(){
	return function(input){
		var temp = [];
		temp.push(input[0]);
		temp.push(input[2]);
		return temp;
	};
});


