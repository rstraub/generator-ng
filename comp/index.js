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

    },
    writing: function() {

    }
});
