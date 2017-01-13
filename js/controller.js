angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home"
    })
    .controller('EventsController', function($scope) {
        $scope.title = "events"
    })
    .controller('SongsController', function($scope) {
        $scope.title = "songs"
        $scope.singles = [
            {
             name: "1. Clarksville (New)",
             cover: "/assets/images/album1.jpg",
             track: "/assets/audio/Clarksville.mp3",
            },

            {
             name: "2. Day beliver (New)",
             cover: "/assets/images/album2.jpg",
             track: "/assets/audio/DaydreamBeliever.mp3",
            },
              
            {
             name: "3. I am a beliver",
             cover: "/assets/images/album3.jpg",
             track: "/assets/audio/ImABeliever.mp3",
            },

            {
             name: "4. Stepping stone",
             cover: "/assets/images/album4.jpg",
             track: "/assets/audio/SteppingStone.mp3",
            },

            {
             name: "5. Headquarters",
             cover: "/assets/images/album5.jpg",
             track: "/assets/audio/tailtoddle_lo.mp3",
            },

            {
             name: "6. Good Times",
             cover: "/assets/images/album6.jpg",
             track: "/assets/audio/SteppingStone.mp3",
            },

            {
             name: "7. Missing Links",
             cover: "/assets/images/album7.jpg",
             track: "/assets/audio/DaydreamBeliever.mp3",
            },

            {
             name: "8. Instant Replay",
             cover: "/assets/images/album8.jpg",
             track: "/assets/audio/Clarksville.mp3",
            }
        ];

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