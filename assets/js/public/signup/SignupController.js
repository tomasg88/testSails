var signupModulo = angular.module('SignupModule');

// Controller code
var ctrlCode = function($scope, $http, toastr){
    
    $scope.signupForm = { 
        loading: false 
    };
    
    $scope.submitSignupForm = function(){
        $scope.signupForm.loading = true;
        console.log('Angular - Create user');
        $http.post('/signup', {
            name: $scope.signupForm.name,
            title: $scope.signupForm.title,
            email: $scope.signupForm.email,
            password: $scope.signupForm.password
        })
        .then(function onSuccess(){
            window.location = '/user'
        })
        .catch(function onError(sailsData){
            var emailInuse = sailsData.status == 409;
            if (emailInuse){
                toastr.error('The email address you entered is invalid');
            }
        })
        .finally(function eitherWay(){
            $scope.signupForm.loading = false;
        })
    };
    
}
signupModulo.controller('SignupController', ['$scope', '$http', 'toastr', ctrlCode]);
                        
