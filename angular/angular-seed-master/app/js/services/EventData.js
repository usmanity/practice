eventsApp.factory('eventData', function(){
   return {
       event: {
           name: 'Angular',
           date: '05/01/2013',
           location: {
               address: "260 Coleridge Street",
               city: "San Francisco"
           },
           sessions: [
               {
                   name: "google",
                   upvoteCount: 0
               },
               {
                   name: "yahoo",
                   upvoteCount: 0
               }
           ]
       }
   }
});