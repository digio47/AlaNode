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

   $scope.name = "Mario";
   $scope.datas = {
      "name":"Mario",
      "lastname":"Marrazzo",
      "age":45,
      "address":"Via simone lala, 6"
   }
});
