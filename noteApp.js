var NotesApplication = function(author) {

    this.author = author;
    this.notes = [];
};

//
NotesApplication.prototype.create = function(note_content) {
    this.notes.push(note_content);
    return "created";
};
NotesApplication.prototype.listNotes = function() {
    for (var i = 0; i < this.notes.length; i++) {

        console.log("note ID: " + i + "\n" + this.notes[i] + "\n\n" + "By Author " + this.author);
    }
};

//
NotesApplication.prototype.get = function(note_id) {
    var arr = this.notes;
    for (var i = 0; i < arr.length; i++) {
        if (i === note_id) {
            return '*-----* ' + arr[i] + ' *-------*';
        }
    }
};

//
NotesApplication.prototype.search = function(search_text) {
    console.log("Showing results for search " + search_text);

    for (var i = 0; i < this.notes.length; i++) {
        if (this.notes[i].search(search_text)) {

            console.log("note ID: " + i + "\n" + this.notes[i] + "\n\n" + "By Author " + this.author);
        }

    }

};

//
NotesApplication.prototype.delete = function(note_id) {
    if (note_id > this.notes.length || note_id < 0) {
        return "the number entered doesnt exit";
    } else {
        this.notes.splice(note_id);
        return "deleted";
    }
};

//
NotesApplication.prototype.edit = function(note_id, new_content) {
    this.notes[note_id] = new_content;
};
module.exports = NotesApplication;