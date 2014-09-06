eventsApp.controller('EventController', function($scope, eventData){
  // eventData.getEvent(),
  $scope.upvoteSession = function(session){
    session.upvoteCount++
  },
  $scope.downvoteSession = function(session){
    session.upvoteCount--
  }
});
