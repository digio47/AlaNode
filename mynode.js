/**
 * Created by sum on 21/09/15.
 */


var mynode = angular.module("mynode",[]);

mynode.controller('SiteConfigController',function($scope){
   $scope.title = "MyNode";

   $scope.menuitem = [
      {
         "name":"Home",
         "url":"/mynode/"
      },
      {
         "name": "Contacts",
         "url": "/mynode/contacts"
      },
      {
         "name": "Info",
         "url": "/mynode/info"
      }
   ];
});

mynode.controller('MyController', function($scope){
   $scope.datas = [
      { "name":"Mario", "lastname":"Marrazzo", "age":45, "address":"Via Mare, 6" },
      { "name":"Laura", "lastname":"Russo", "age":25, "address":"Via Roma, 12" },
      { "name":"Francesco", "lastname":"Terzi", "age":31, "address":"Via Teora, 4" }
   ]
});

mynode.controller('UrlDatas', function($scope, $http){
   $http.get("http://www.w3schools.com/angular/customers.php")
       .success(function(response) {
          $scope.records = response.records;
       });
});
