angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home"
    })
    .controller('EventsController', function($scope) {
        $scope.title = "events"
    })
    .controller('SongsController', function($scope, $filter) {
        $scope.title = "songs" 
        $scope.singles = [
            {
             name: "Clarksville",
             cover: "/assets/images/album1.jpg",
             track: "/assets/audio/Clarksville.mp3",
            },

            {
             name: "Day dream beliver",
             cover: "/assets/images/album2.jpg",
             track: "/assets/audio/DaydreamBeliever.mp3",
            },
              
            {
             name: "I am a beliver",
             cover: "/assets/images/album3.jpg",
             track: "/assets/audio/ImABeliever.mp3",
            },

            {
             name: "Stepping stone",
             cover: "/assets/images/album4.jpg",
             track: "/assets/audio/SteppingStone.mp3",
            },

            {
             name: "Headquarters",
             cover: "/assets/images/album5.jpg",
             track: "/assets/audio/tailtoddle_lo.mp3",
            },

            {
             name: "Good Times",
             cover: "/assets/images/album6.jpg",
             track: "/assets/audio/SteppingStone.mp3",
            },

            {
             name: "Missing Links",
             cover: "/assets/images/album7.jpg",
             track: "/assets/audio/DaydreamBeliever.mp3",
            },

            {
             name: "Instant Replay",
             cover: "/assets/images/album8.jpg",
             track: "/assets/audio/Clarksville.mp3",
            }
          ];

        $scope.singles2 = $scope.singles;

        $scope.$watch('search', function(val)
        {

          $scope.singles = $filter('filter')($scope.singles2, val);

        });

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
    })

    .controller('FooterController', ['$scope', function($scope) {
        $scope.someFunc = function() {
        alert("Subscribed!");
    };

}]);


