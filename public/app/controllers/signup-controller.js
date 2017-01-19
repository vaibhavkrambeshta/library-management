/**
 * Created by vaibhav on 19-01-2017.
 */
app.controller("signupController", function ($scope, $state, $stateParams, $q, $location, httpservice,  $rootScope, mainService) {
    $scope.signup = function(username, name, email, contact, password){
        var obj = {};
        obj.email = username;
        obj.passwprd = name;
        obj.passwprd = email;
        obj.passwprd = contact;
        obj.passwprd = password;
        mainService.adminLogin(obj).then(function (success) {
            if(success){
                $state.go("find-book");
            }
        });
    }

});