
var Fact = function (name, variables) {
    this.name = name;
    this.variables = variables;

    this.match_with_fact = function (other_fact, interpreter) {
        if (this.name == other_fact.name && this.variables == other_fact.variables) return true;
        return false;
    };

    this.match = function (entity, interpreter) {
        return entity.match_with_fact(this, interpreter);
    };
};

module.exports = Fact;