/**
 * Created by vaibhav on 19-01-2017..
 */
app.service("mainService", function ($q, httpservice, localStorageService, $location) {
    var methods = {};
    methods.adminLogin  = adminLogin;
    function adminLogin(requestObj){
        var deffered = $q.defer();
        var obj = {};
        obj.email = requestObj.email;
        obj.password = requestObj.password;
        httpservice.httppromise('POST', '/login' , {}, true).then(function (success) {
            if (success ) {
                deffered.resolve(success);
            } else {
                return deffered.reject();
            }
        }, function (error) {
            return deffered.reject();
        });
        return deffered.promise;
    }
    function adminSignup(requestObj){
        var deffered = $q.defer();
        var obj = {};
        obj.username = requestObj.username;
        obj.name = requestObj.name;
        obj.email = requestObj.email;
        obj.contact = requestObj.contact;
        obj.password = requestObj.password;
        httpservice.httppromise('POST', '/login' , obj, true).then(function (success) {
            if (success ) {
                deffered.resolve(success);
            } else {
                return deffered.reject();
            }
        }, function (error) {
            return deffered.reject();
        });
        return deffered.promise;
    }
    return methods;
});
