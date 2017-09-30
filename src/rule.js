
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

    this.match = function (entity) {
        return entity.match_with_fact(this)
    };
};

module.exports = Rule;