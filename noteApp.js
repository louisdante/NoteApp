class NotesApplication {
    constructor(author, notes) {
        this.author = author;
        this.arr = arr;
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


}