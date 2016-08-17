class NotesApplication {
    constructor(author, notes) {
        this.author = author;
        this.notes = notes;
    }
    create(note_content) {
        this.notes.push(note_content);
        return "created";
    }
    listNotes() {
        for (var i = 0; i < this.notes.length; i++) {

            console.log("note ID: " + i + "\n" + this.notes[i] + "\n\n" + "By Author " + this.author);
        }
    }

    get(note_id) {
        var arr = this.notes.length;
        for (let i = 0; i < arr.length; i++) {
            if (i === note_id) {
                return '*-----* ' + arr[i] + ' *-------*';
            }
        }
    }

}