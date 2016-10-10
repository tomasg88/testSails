(function() {
	'use strict';

	var signupModulo = angular.module('SignupModule');

	// Controller code
	var ctrlCode = function($scope, $http, $location, toastr){

		$scope.signupForm = { 
			loading: false 
		};
		$scope.loginForm = { 
			loading: false 
		};

		$scope.submitSignupForm = function(){
			$scope.signupForm.loading = true;
			console.log('Angular - Create user flow');
			$http.post('api/v1/user/newUser', {
				name: $scope.signupForm.name,
				title: $scope.signupForm.title,
				email: $scope.signupForm.email,
				password: $scope.signupForm.password
			})
			.then(function onSuccess(data){
				toastr.success('User created successfully: ' + data.id);
				console.log('Success: '+data);
			})
			.catch(function onError(sailsData){
				var emailInuse = sailsData.status == 409;
				if (emailInuse){
					toastr.error('The email address you entered is invalid, try again', 'Error');
				}
			})
			.finally(function eitherWay(){
				$scope.signupForm.loading = false;
			})
		};
		
		$scope.submitLoginForm = function(){
			$scope.loginForm.loading = true;
			 $http.get('/user/getByCredentials',{
                 email: $scope.loginForm.email,
                 password: $scope.loginForm.password
             }).then(function onSuccess(data){
				 alert("BIENVENIDO!\n" + data.data[0].title + " " + data.data[0].name);
				 $scope.loginForm.loading = false;
				 console.log(data)
				 //$location.path('/home');
			 }).catch(function onError(ex){
				 alert("ERRORRRR!!\n" +ex);
                 console.log("obj: "+ex);
                 $scope.loginForm.loading = false;
			 });
		};

	}
	signupModulo.controller('SignupController', ['$scope', '$http', '$location', 'toastr', ctrlCode]);
	
})();