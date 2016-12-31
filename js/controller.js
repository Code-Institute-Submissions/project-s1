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
    })
    .controller('AboutusController', function($scope) {
        $scope.title = "about us"
    })
    .controller('ContactsController', function($scope) {
        $scope.title = "contacts"
    })
    .controller('Terms&conditionsController', function($scope) {
        $scope.title = "terms & conditions"
    })
    .controller('PrivacypolicyController', function($scope) {
        $scope.title = "privacy policy"
    });