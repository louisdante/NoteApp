//var sum = require('../sum.js');
var Note = require('../noteApp.js');
var expect = require('chai').expect;
var app = new Note('louis');
console.log(app);
describe("The NotesApp ", function() {
    it("expects value to be a string", function() {
        expect(app.author).to.be.a("string");
    });
});

describe("The create method", function() {
    it("should only accept strings", function() {
        expect(app.create("This is a text.")).to.be.a("string");
        console.log(app.notes);
    });

});

describe("The listNotes method", function() {
    it('should be a property of the noteApp class and ...', function() {
        expect(Note.prototype.hasOwnProperty('listNotes')).to.be.true;

    });
    it(" has to get a note with an index that exists", function() {
        var result = app.listNotes();
        expect(result).not.to.be.null;
    });

});
describe("The get method", function() {
    it('should be a property of the noteApp class and', function() {
        expect(Note.prototype.hasOwnProperty('get')).to.be.true;

    });
    it(" has to get a note with an index that exists", function() {
        expect(app.get()).not.to.be.null;
        expect(Note).to.respondTo('get');
    });
    it(" has to get a note with an index that exists", function() {
        var result = app.get(1);
        expect(app.notes[1]).to.equal(result);
    });
});

describe("The search method", function() {
    it('be a property of the noteApp class and..', function() {
        expect(Note.prototype.hasOwnProperty('search')).to.be.true;
    });

    it("should be a match string", function() {
        app.create("this is a new test");
        var result = app.search('is');
        expect(result).to.include('is');
        // expect(app.search()).to.be.undefined;
    });
    it('should log an error if parameter passed is not a string', function() {
        var result = app.search(1);
        expect(result).to.not.be.ok;
    });

});

describe("delete", function() {
    it('should be a property of the noteApp class and..', function() {
        expect(Note.prototype.hasOwnProperty('delete')).to.be.true;
    });
    it("the deleted note at index should not exists", function() {
        app.create("First time");
        app.create("Second time");
        expect(app.delete(0)).to.equal('deleted');
    });
    it(" has to delete a note with an index that exists", function() {
        expect(app.delete()).not.to.be.null;
        expect(Note).to.respondTo('delete');
    });


});
describe("The edit method", function() {
    it('should be a property of the noteApp class and..', function() {
        expect(Note.prototype.hasOwnProperty('delete')).to.be.true;
    });

    it('should replace index value with new text', function() {
        app.create("First time");
        app.notes[0] = 'louis got served';
        expect(app.notes[0]).to.equal('louis got served')
    });
    it(" has to delete a note with an index that exists", function() {
        expect(app.edit()).not.to.be.null;
        expect(Note).to.respondTo('edit');
    });
});