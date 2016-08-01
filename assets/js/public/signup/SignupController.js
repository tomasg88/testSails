var signupModulo = angular.module('SignupModule');

// Controller code
var ctrlCode = function($scope, $http){
    
    $scope.signupForm = { loading: false };
    
    $scope.submitSignupForm = function(){
        $scope.signupForm.loading = true;
        console.log('Create user');
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
            console.log('sailsData: ' + sailsData);
        })
        .finally(function eitherWay(){
            $scope.signupForm.location = false;
        })
    };
    
    $scope.submitLoginForm = function(){
        $http.get('/user?email'+$scope.submitLoginForm.email);
    }
    
}
signupModulo.controller('SignupController', ['$scope', '$http', ctrlCode]);
                        
