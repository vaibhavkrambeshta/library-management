/**
 * Created by Eswer on 11/23/2016.
 */
var app = angular.module("app", ["ui.router", ]);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/signin-admin");
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
    $stateProvider
        .state('adminSignin', {
            url: "/signin-admin",
            templateUrl: "app/views/signin-admin.html",
            controller: "mainController"
        })
        .state('adminSignup', {
            url: "/signup-admin",
            templateUrl: "app/views/signup-admin.html",
            controller: "signupController"
        })
        .state('assignBook', {
            url: "/assign-book",
            templateUrl: "app/views/assign-book.html",
            controller: "bookAssignmentController"
        })
        .state('listing', {
            url: "/listing",
            templateUrl: "app/views/listing.html",
            controller: "listingController"
        })
        .state('find-book', {
            url: "/find-book",
            templateUrl: "app/views/find-book.html",
            controller: "listingController"
        })


  });
