//var sum = require('../sum.js');
var Note = require('../noteApp.js');
var expect = require('chai').expect;
var app = new Note('louis');
describe("The NotesApp ", function() {

    it("expects value to be a string", function() {
        expect(app.author).to.be.a("string");
    });
});

describe("The create method", function() {
    it("should only accept strings", function() {
        expect(app.create("This is a text.")).to.be.a("string");
    });
});
describe("The listNotes method", function() {
    it('should be a property of the noteApp class and ...', function() {
        expect(Note.prototype.hasOwnProperty('listNotes')).to.be.true;
    });
    app.create("text 1");
    app.create("text 2");
    it("should return true if not empty", function() {
        expect(app.listNotes()).to.be.a("string");
    });
});