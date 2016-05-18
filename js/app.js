var app = angular.module('saabApp', ['ngRoute', 'ngSanitize', 'saabAppControllers', 'saabAppServices', 'saabAppFilters']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
    })
}]);

app.directive('heroSlider', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            $(element).flexslider({
                controlNav: true,
                directionNav: false,
                animation: "fade"
            });
        }
    };
});

app.directive('heroSlide', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            var image = $(element).data('bg-image');
            $(element).css('background-image', 'url('+image+')');
            $(element).css('background-position', 'center');
        }
    };
});