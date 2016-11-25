var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: true });
    },
    prompting: function() {
        this.log(yosay('Let\'s build your ' + chalk.cyan(this.name) + ' Component'));

        this.prompt([
            {
                type: 'confirm',
                name: 'hasView',
                message: 'Do you want a corresponding view?'
            }
        ]).then(function(answers) {
            this.log(answers)
        }.bind(this));
    },
    writing: function() {

    }
});
