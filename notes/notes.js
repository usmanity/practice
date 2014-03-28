var notesApp = {
  init: function(){
    var appName = "notesApp";
    if(localStorage.appName == appName) {
      var notes = notesApp.getNotes();      
      notesApp.noteID = notesApp.incrementID(notesApp.findTotalNotes(notes))
    } else {
      localStorage.setItem("appName", appName);
      localStorage.setItem("notes", JSON.stringify({}));
      notesApp.notesID = notesApp.incrementID(0);
    }
  },
  handleEnterKey: function(e){
    if (e.target.id == "note-title"){
      document.getElementById("note-body").focus();
      notesApp.save();
      e.preventDefault();
    }
  },
  save: function(){
    var title = document.getElementById("note-title").innerText;
    var body = document.getElementById("note-body").innerText;
    if (body.length !== 0 || title.length !== 0)
    notesApp.addToStorage(title, body, notesApp.noteID);
  },
  addToStorage: function(noteTitle, noteBody, noteID) {
    var notes = notesApp.getNotes();
    notes[noteID] = { 
      title: noteTitle,
      body:  noteBody
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  },
  intervalSaves: function(){
    setInterval(notesApp.save, 1200);
  },
  getNotes: function(){
    notes = JSON.parse(localStorage.notes);
    return notes;
  },
  incrementID : function(id) {
    return id + 1;
  },
  findTotalNotes: function(obj){
    var size = 0, key;
    for (key in obj){
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  },
  noteID : 0
};

var menu = {
  toggleDrawer : function() {
    var icon   = $("#menu-icon");
    var drawer = $("#drawer");
    if (drawer.hasClass("hidden")){
      menu.draw();
      drawer.removeClass("hidden");

    } else {
      drawer.addClass("hidden");
    }
  },
  draw: function(){
    var notes = JSON.parse(localStorage.notes);
    for (var note in notes){
      var li = document.createElement('li');
      li.innerHTML = notes[note].title;
      $("#notes").append(li);
    }
  }
};

$(document).keypress(function(e){
  switch(e.keyCode) {
    case 13 :
      notesApp.handleEnterKey(e);
      break;
  }
});

$("#menu-icon").on("click", function(){
  menu.toggleDrawer();
});

notesApp.init();
notesApp.intervalSaves();