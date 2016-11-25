var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.argument('name', {type: String, required: true});
    },
    prompting: function() {
        this.log(yosay('Let\'s cook up your ' + chalk.cyan(this.name) + ' Component'));
        var done = this.async();
        this.prompt([{
            type: 'confirm',
            name: 'hasView',
            message: 'Do you want a view on the side ser?'
        }, {
            type: 'confirm',
            name: 'hasStyles',
            message: 'Some styling with that?'
        }]).then(function(answers) {
            this.hasView = answers.hasView;
            this.hasStyles = answers.hasStyles;
            done();
        }.bind(this));
    },
    writing: function() {
        this.log(this.hasView, this.hasStyles);
    }
});
