var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter, $timeout, $filter, $http) {

    $scope.name = 'trapp';

    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('changed!');
        console.info('Old: ' + oldValue);
        console.info('New: ' + newValue);
    });

    $scope.characters = 5;

    $scope.rules = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
    ];

    $scope.chuckNorrisResponse = "";

    $http.get('https://api.chucknorris.io/jokes/random')
        .then(function(result) {

            $scope.chuckNorrisResponse = result.data;
            return result;

        }, function (error) {
            console.error(error);
        }); 

    // var chuckNorrisRequest = new XMLHttpRequest(); 
    // chuckNorrisRequest.onreadystatechange = function() {

    //     $scope// change any model outside of the Angular context,
    //     // to inform Angular of the changes by calling $apply() manually
    //     $scope.$apply(function() {
            
    //         if (chuckNorrisRequest.readyState == 4 && chuckNorrisRequest.status == 200){

    //             $scope.chuckNorrisResponse = JSON.parse(chuckNorrisRequest.responseText);
    //         }
    //     });
    // }

    // chuckNorrisRequest.open("GET", "https://api.chucknorris.io/jokes/random", true);
    // chuckNorrisRequest.send();

    // $timeout(function() {
    //     $scope.handle = 'newTwitterHandle';
    //     console.log('scope changed');

    // }, 3000);
});