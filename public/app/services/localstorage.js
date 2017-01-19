/**
 * Created by Eswer on 11/27/2016.
 */
(function () {
  angular
    .module('app')
    .factory('localStorageService', ['$window', localStorageService]);
  function localStorageService($window) {
    var methods = {};
    methods.checkLocalStorage = function(method,prop,value){
      function hasLocalStorage() {
        try {
          var a = $window.localStorage[prop]
          console.log("Cookies present",typeof a == "string");
          return true;
        } catch (e) {
          return false;
        }
      }
      if (!hasLocalStorage()) {
        //window.sessionStore = {};
        if(method == 'get'){
          if(window.store[prop]){
            return JSON.parse(window.store[prop]);
          }
        }else if(method == 'add'){
          window.store[prop] = JSON.stringify(value);
        }else if(method == 'delete'){
          delete window.store[prop];
        }
      }else{
        if(method == 'get'){
          if($window.localStorage[prop]){
            return JSON.parse($window.localStorage[prop]);
          }
        }else if(method == 'add'){
          $window.localStorage[prop] = JSON.stringify(value);
        }else if(method == 'delete'){
          $window.localStorage.removeItem(prop);
        }
      }
    };
    return methods;
  }
})();
