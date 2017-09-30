var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');


var Rule = require('../src/rule');
var Fact = require('../src/fact');

describe("Rule", function () {

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


    describe('Rule Tests', function () {

        it('Get Facts List', function () {
            var aux_fact1 = new Fact("varon", "juan");
            var aux_fact2 = new Fact("padre", "pepe,juan");
            var rule = new Rule("test", "test", "test");
            var r = rule.get_facts_list("varon(X),padre(Y,X)", {"X": "juan", "Y": "pepe"});
            assert.equal(r[0].match(aux_fact1), true);
            assert.equal(r[1].match(aux_fact2), true);
        });

    });

});