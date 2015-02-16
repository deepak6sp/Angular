var app = angular.module('consultancyApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "partials/jobseekers.html",
		controller:"aboutCtrlr"
	})
	.when("/SW",{
		templateUrl: "partials/software&web.html",
		controller:"SWCtrl"
	})
	.when("/employers",{
		templateUrl: "partials/employers.html",
		controller:"employerCtrl"
	})
	.when("/jobseekers",{
		templateUrl: "partials/jobseekers.html",
		controller:"employerCtrl"
	})
	.when("/contact",{
		templateUrl: "partials/contact.html",
		controller:"contactCtrl"
	})
	.when("/aboutus",{
		templateUrl: "partials/about.html",
		controller:"contactCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
}]);