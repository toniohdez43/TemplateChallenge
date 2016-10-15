/**
 * Created by antoniohernandez on 10/14/16.
 */

 var app = angular.module('myBackend',[]);

    app.controller("BlogController",function($scope, $http){
        console.log("hola");
        $scope.title1 = "";
        $scope.title2 = "";
        $scope.desc1 = "";
        $scope.desc2 = "";
       return $http({
            method: 'GET',

            url: 'http://localhost:8080/blogData/'
        }).then(function successCallback(response) {
            $scope.title1 = response.blogData[0].title;
            $scope.title2 = response.blogData[1].title;
            $scope.desc1 = response.blogData[0].desc;
            $scope.desc2 = response.blogData[1].desc;
            console.log(response);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(err) {
            console.log(err);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


});