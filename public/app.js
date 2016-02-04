var app = angular.module('instagramGallery', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/gallery', {
        templateUrl: 'views/gallery.view.html',
        controller: 'GalleryCtrl'
    })
    .otherwise({redirectTo: '/gallery'});
}]);