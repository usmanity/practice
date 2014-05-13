'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope){
        $scope.saveEvent = function(event){
            window.alert('event' + event.name + ' saved!');
        };
    }
);
