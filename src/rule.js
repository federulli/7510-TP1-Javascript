var FactRuleCreator = require('./fact_rule_creator');

var Rule = function (name, variables, facts) {
    this.name = name;
    this.variables = variables;
    this.facts = facts;

    this.match_with_fact = function (fact) {
        if (this.name != fact.name) return false;
        var fact_variables = fact.variables.split(',');
        var this_variables = this.variables.split(',');
        if (fact_variables.length != this_variables.length) return false;
        return false;
    };

    this.get_facts_list = function (facts_string, variables_map) {
        var splited_facts = facts_string.split(/,(?=[a-z])/);
        splited_facts = this.replace_map(splited_facts, variables_map);
        var creator = new FactRuleCreator();
        var facts = [];
        for(var i=0; i < splited_facts.length; i++) {
            facts.push(creator.create(splited_facts[i]));
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

    this.match = function (entity) {
        return entity.match_with_fact(this)
    };
};

module.exports = Rule;