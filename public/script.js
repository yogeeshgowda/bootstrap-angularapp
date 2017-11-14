'use strict';

var app = angular.module('myApp', ['loginService']);
app.controller('myCtrl', function($scope,$http) {

$scope.login = function() {
$http({
  method: 'GET',
  url: 'http://localhost:8086/Getuser',
  headers:{'Content-Type': 'application/json'},
}).then(function successCallback(response) {
      console.log("Entered in successCallback ");
      console.log(JSON.stringify(response.data));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.statusText);
      $scope.birdsapi = response.data;
      for (var i=0;i<($scope.birdsapi.Data).length;i++){
      if (($scope.uname == $scope.birdsapi.Data[i].unamer) && ($scope.pwd == $scope.birdsapi.Data[i].pwdr) ){
      alert('Logged in Sucessfully ');
    }
        
  }
  }, function errorCallback(response) {
      console.log("Entered in errorCallback ");
      console.log(response.xhrStatus);
      console.log(response.status);
      console.log(response.statusText);
});   
      };
      
});


// function login(){
//     if (document.getElementById("uname").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd").value == "") {
//         alert("Password may not be blank.");
//     }
//     if((document.getElementById("uname").value == "anu") && (document.getElementById("pwd").value == "anu")){
//         window.open("loginsucess.html");
//     }
//      if((document.getElementById("uname").value != "anu") && (document.getElementById("pwd").value != "anu")){
//         alert("Please enter correct Username and Password");
//     }

// }

// function register(){
//     if (document.getElementById("uname1").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd1").value == "") {
//         alert("Password may not be blank.");
//     }else if (document.getElementById("email1").value == "") {
//         alert("Email may not be blank.");
//     }
//     if((document.getElementById("uname1").value != "") && (document.getElementById("pwd1").value != "") && (document.getElementById("email1").value != "")){
//         alert("Registered Sucessfully");
//     }

// }

