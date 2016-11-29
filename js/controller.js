angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home"
    })
    .controller('EventsController', function($scope) {
        $scope.title = "events"
    })
    .controller('SongsController', function($scope) {
        $scope.title = "songs"
    })
    .controller('GalleryController', function($scope) {
        $scope.title = "gallery"
    })
    .controller('BookingsController', function($scope) {
        $scope.title = "bookings"
    });