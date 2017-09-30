var FactRuleCreator = require('./fact_rule_creator');

var Rule = function (name, variables, facts) {
    this.name = name;
    this.variables = variables;
    this.facts = facts;

    this.match_with_fact = function (fact, interpreter) {
        if (this.name != fact.name) return false;
        var fact_variables = fact.variables.split(',');
        var this_variables = this.variables.split(',');
        if (fact_variables.length != this_variables.length) return false;
        return this.are_all_facts_true(fact, interpreter);
    };

    this.get_facts_list = function (facts_string, variables_map) {
        var splited_facts = facts_string.split(/,(?=[a-z])/);
        splited_facts = this.replace_map(splited_facts, variables_map);
        var facts = [];
        for(var i=0; i < splited_facts.length; i++) {
            facts.push(splited_facts[i]);
        }
        return facts
    };

    this.replace_map = function(list, map) {
        var replaced_list = [];
        for(var i=0; i < list.length; i++) {
            var string = list[i];
            for (var key in map) {
                string = string.replace(new RegExp(key, "g"), map[key]);
            }
            replaced_list.push(string);
        }
        return replaced_list;
    };

    this.are_all_facts_true = function(fact, interpreter) {
        var fact_variables = fact.variables.split(',');
        var this_variables = this.variables.split(',');
        var facts = this.get_facts_list(this.facts, this.zip_map(this_variables, fact_variables));
        for (var i = 0; i < facts.length; i++) {
            if (interpreter.checkQuery(facts[i]) != true){
                return false;
            }
        }
        return true;
    };

    this.zip_map = function(list1, list2) {
        var map = {};
        for (var i = 0; i < list1.length; i++) {
            map[list1[i]] = list2[i];
        }
        return map;
    }
};

module.exports = Rule;