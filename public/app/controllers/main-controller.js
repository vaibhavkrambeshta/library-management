/**
 * Created by vaibhav on 19-01-2017.
 */
app.controller("mainController", function ($scope, $state, $stateParams, $q, $location, httpservice,  $rootScope, mainService) {
$scope.login = function(email, password){
    var obj = {};
    obj.email = email;
    obj.passwprd = password;
    mainService.adminLogin(obj).then(function (success) {
        if(success){
            $state.go("find-book");
        }
    });
}

});
