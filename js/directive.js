var mydir = angular.module('mydir', []);

mydir.directive('directiveOne', function() {
    return {
      restrict : 'E',
      controller: 'SongsController',
      templateUrl: 'templates/directives/songsdirective.html',
    }
});

