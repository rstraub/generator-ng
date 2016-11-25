const generators = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.argument('name', {type: String, required: true});
    },
    prompting: function() {
        this.log(yosay(`Let\'s cook up your ${chalk.cyan(this.name)} Component`));
        const done = this.async();
        this.prompt([{
            type: 'confirm',
            name: 'hasView',
            message: 'Do you want a view on the side ser?'
        }, {
            type: 'confirm',
            name: 'hasStyles',
            message: 'Some styling with that?'
        }]).then(answers => {
            this.hasView = answers.hasView;
            this.hasStyles = answers.hasStyles;
            done();
        });
    },
    writing: function() {
        const fileName = _.kebabCase(this.name);
        this.fs.copyTpl(
            this.templatePath('_ng.component.js'),
            this.destinationPath(fileName + '.component.js'),
            {
                name: this.name
            }
        );

        if(this.hasView) {
            this.fs.copyTpl(
                this.templatePath('_ng.component.html'),
                this.destinationPath(fileName + '.component.html'),
                {
                    name: this.name
                }
            );
        }

        if(this.hasStyles) {
            this.fs.copyTpl(
                this.templatePath('_ng.component.scss'),
                this.destinationPath(fileName + '.component.scss'),
                {
                    name: this.name
                }
            );
        }
    }
});
