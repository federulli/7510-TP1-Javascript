var Fact = require('./fact');
var Rule = require('./rule');

var FactRuleCreator = function () {
    
    this.create = function (fact_rule_string) {
        var fact_or_rule = fact_rule_string.replace(/[\s\.]/g,'')
        if (this.is_a_fact(fact_or_rule)) {
            return new Fact(this.get_name(fact_or_rule), this.get_variables(fact_or_rule));
        } else {
            return new Rule(
                this.get_name(fact_or_rule),
                this.get_variables(fact_or_rule),
                this.get_facts_string(fact_or_rule)
            )
        }
    };
    
    this.get_name = function (fact_rule_string) {
        try {
            return fact_rule_string.match(/([^\(]*)\(/)[1];
        } catch (e) {
            throw new Error("Invalid Fact or Rule: " + fact_rule_string);
        }
    };

    this.get_variables = function(fact_rule_string) {
        try {
            return fact_rule_string.match(/\(([^\(]*)\)/)[1];
        } catch (e) {
            throw new Error("Invalid Fact or Rule: " + fact_rule_string);
        }
    };

    this.get_facts_string = function(string_rule) {
        try {
            return string_rule.match(":-(.*)")[1]
        } catch (e) {
            throw new Error("Invalid Rule: " + string_rule);
        }
    };

    this.is_a_fact = function(fact_rule_string) {
        if (fact_rule_string.match(":-"))
            return false;
        return true
    }

};

module.exports = FactRuleCreator;