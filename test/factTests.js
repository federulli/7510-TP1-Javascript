var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');


var Fact = require('../src/fact');

describe("Fact", function () {

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
    });

    afterEach(function () {
        // runs after each test in this block
    });


    describe('Interpreter Facts', function () {

        it('Facts Are equal', function () {
            var a = new Fact('padre', 'juan');
            var b = new Fact('padre', 'juan');
            assert.equal(a.match(b), true);
        });

        it('Facts Are equal with more than one variable', function () {
            var a = new Fact('padre', 'juan,pepe');
            var b = new Fact('padre', 'juan,pepe');
            assert.equal(a.match(b), true);
        });

        it('Facts with diferent name', function () {
            var a = new Fact('padre', 'juan');
            var b = new Fact('madre', 'juan');
            assert.equal(a.match(b), false);
        });

        it('Facts with diferent variables', function () {
            var a = new Fact('padre', 'juan');
            var b = new Fact('padre', 'pepe');
            assert.equal(a.match(b), false);
        });

    });

});