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
            var rule = new Rule("test", "test", "test");
            var r = rule.get_facts_list("varon(X),padre(Y,X)", {"X": "juan", "Y": "pepe"});
            assert.equal(r[0], "varon(juan)");
            assert.equal(r[1], "padre(pepe,juan)");
        });

        it('Zip map ok', function () {
            var rule = new Rule("test", "test", "test");
            var l1 = ["X", "Y"];
            var l2 = ["juan", "pepe"];
            var map = rule.zip_map(l1, l2);
            assert.deepEqual(map, {"X": "juan", "Y": "pepe"});
        });
    });

});