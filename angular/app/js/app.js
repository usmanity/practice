var app = angular.module("angularFireTest", ["firebase"]);


app.factory('Profile', ['$firebase', function($firebase){
  return function(username) {
    var ref = new Firebase('https://usmanity.firebaseio.com/profiles/').child(username);
    return $firebase(ref).$asObject();
  }
}]);

app.controller("ProfileCtrl", ["$scope", "Profile", function($scope, Profile){

  $scope.profile = {};

  $scope.checkUsername = function(username){
    Profile(username).$bindTo($scope, "profile");
  }


}]);
