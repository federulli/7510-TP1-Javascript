var FactRuleCreator = require('./fact_rule_creator');

var Interpreter = function () {
    this.db = [];
    this.fact_rule_creator = new FactRuleCreator();
    this.parseDB = function (db) {
        for (var i = 0; i < db.length; i++) {
            this.db.push(this.fact_rule_creator.create(db[i]));
        }
    };

    this.checkQuery = function (query) {
        var fact = this.fact_rule_creator.create(query);
        for (var i = 0; i < this.db.length; i++) {
            if (fact.match(this.db[i], this))
                return true;
        }
        return false;
    };

};

module.exports = Interpreter;
