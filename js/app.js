angular.module('AppS1', ['ngRoute', 'RouteControllers']);
 
angular.module('AppS1').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/events', {
        templateUrl: 'templates/events.html',
        controller: 'EventsController'
    })
    .when('/songs', {
        templateUrl: 'templates/songs.html',
        controller: 'SongsController'
    })
    .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController' 
    })
    .when('/bookings', {
        templateUrl: 'templates/bookings.html',
        controller: 'BookingsController' 
    })
    .when('/about us', {
        templateUrl: 'templates/about us.html',
        controller: 'AboutusController'
    })
    .when('/terms & conditions', {
        templateUrl: 'templates/terms & conditions.html',
        controller: 'Terms&conditionsController'
    });
});