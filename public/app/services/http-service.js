/**
 * Created by vaibhav on 11/24/2016.
 */
(function () {
  angular
    .module('app')
    .factory('httpservice', ['$http','$q',httpservice]);
    function httpservice ($http,$q) {
        var httpservice = {};
        httpservice.httppromise = httppromise;
        httpservice.httpjsonp = httpjsonp;
        function httppromise(method,url,data,isjson){
            var deffered, finalurl, contenttype;
            deffered = $q.defer();
            finalurl = "http://localhost:3000" + url;
            contenttype = 'application/x-www-form-urlencoded';
            isjson === true ? contenttype = 'application/json' : isjson === false ? true : contenttype = isjson;
            var headers = {};
            if(isjson == true || isjson == false){
                headers = { 'Content-Type': contenttype };
            }else{
                headers = isjson;
            }
            $http( {
                method: method,
                url: finalurl,
                headers: headers,
                data: data
            }).then(function (success) {
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
        function httpjsonp(url,data){
            return $http.jsonp("http:localhost:3000" + url +"?callback=JSON_CALLBACK&data="+encodeURIComponent(JSON.stringify(data)));
        }
        return httpservice;
  }
})();
