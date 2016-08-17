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
    search(search_text) {
        console.log("Showing results for search " + search_text);

        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].search(search_text)) {

                console.log("note ID: " + i + "\n" + this.notes[i] + "\n\n" + "By Author " + this.author);
            }

        }

    }
    delete(note_id) {
        if (note_id > this.notes.length || note_id < 0) {
            return "the number entered doesnt exit";
        } else {
            this.notes.splice(note_id);
            return "deleted";
        }
    }
    edit(note_id, new_content) {
        this.notes[note_id] = new_content;
    }
}