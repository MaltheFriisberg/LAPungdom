/**
 * Created by Mal on 14-10-2015.
 */
angular.module('MyApp', ['facebook', 'ui.router'])

    .config([
        'FacebookProvider',
        function(FacebookProvider) {
            var myAppId = 'YOUR_APP_ID';
            var accessToken = 'YOUR_ACCESS_TOKEN';
            var fbPage = 'BrightonMusicHall';

            // You can set appId with setApp method
            // FacebookProvider.setAppId('myAppId');

            /**
             * After setting appId you need to initialize the module.
             * You can pass the appId on the init method as a shortcut too.
             */
            FacebookProvider.init(myAppId);

        }
    ])

    .controller('MainCtrl', [
        '$scope',
        '$timeout',
        'Facebook',
        function($scope, $timeout, Facebook) {

            $scope.events = {};

            $scope.eve = function() {
                Facebook.api('/'+fbPage+'/events?access_token='+accessToken+'&since=today&limit=200', function(response) {
                    /**
                     * Using $scope.$apply since this happens outside angular framework.
                     */
                    $scope.$apply(function() {
                        $scope.events = response;
                    });
                });
            };

            $scope.eve();
        }
    ])

/**
 * Just for debugging purposes.
 * Shows objects in a pretty way
 */
    .directive('debug', function() {
        return {
            restrict: 'E',
            scope: {
                expression: '=val'
            },
            template: '<pre>{{debug(expression)}}</pre>',
            link: function(scope) {
                // pretty-prints
                scope.debug = function(exp) {
                    return angular.toJson(exp, true);
                };
            }
        }
    });