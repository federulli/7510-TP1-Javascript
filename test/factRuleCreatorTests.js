var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');


var FactRuleCreator = require('../src/fact_rule_creator');
var Fact = require('../src/fact');
var Rule = require('../src/rule');


describe("FactRuleCreator", function () {

    var creator = null;

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        creator = new FactRuleCreator();
    });

    afterEach(function () {
        // runs after each test in this block
    });


    describe('Interpreter Facts', function () {

        it('Fact Get Name', function () {
            assert.equal(creator.get_name('varon(juan)'), "varon");
        });

        it('Rule Get Name', function () {
            assert.equal(creator.get_name('hijo(X,Y):-varon(X),padre(Y, X)'), "hijo");
        });

        it('Fact Get Name Error', function () {
            assert.throws(function () {creator.get_name('varon)juan)')}, Error, "Invalid Fact or Rule");
        });

        it('Fact Get Variables', function () {
            assert.equal(creator.get_variables('varon(juan)'), "juan");
        });
        it('Rule Get Variables', function () {
            assert.equal(creator.get_variables('hijo(X,Y):-varon(X),padre(Y, X)'), "X,Y");
        });
        it('A Rule Is a Fact', function () {
            assert.equal(creator.is_a_fact('hijo(X,Y):-varon(X),padre(Y, X)'), false);
        });
        it('A Fact Is a Fact', function () {
            assert.equal(creator.is_a_fact('varon(juan)'), true);
        });
        it('Get Facts from rule', function () {
            assert.equal(creator.get_facts_string('hijo(X,Y):-varon(X),padre(Y,X)'), 'varon(X),padre(Y,X)');
        });

        it('Create a Fact', function () {
            var fact = creator.create('hijo(pedro, pepe)');
            assert.equal(fact instanceof Fact, true);
        });

        it('Create a Rule', function () {
            var rule = creator.create('hijo(X, Y) :- varon(X), padre(Y, X)');
            assert.equal(rule instanceof Rule, true);
        });
    });

});