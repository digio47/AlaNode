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
      }
   ];
});

mynode.controller('MyController', function($scope){

   $scope.name = "Davide";
   $scope.datas = {
      "name":"Davide",
      "lastname":"Milazzo",
      "age":25,
      "address":"Via simone cuccia, 46"
   }
});