app.controller("SampleCtrl", function($scope, $firebase, $firebaseSimpleLogin) {
  var ref = new Firebase("https://usmanity.firebaseio.com");
  var sync = $firebase(ref);

  var profileObject = sync.$asObject();

  // profileObject.email = $scope.user.email;

  $scope.save = profileObject.save;

});
