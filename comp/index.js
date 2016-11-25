const generators = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.argument('name', {type: String, required: true});
        this.fileName = _.kebabCase(this.name);
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
    writing: {
        scripts: function() {
            this.fs.copyTpl(
                this.templatePath('_ng.component.js'),
                this.destinationPath(this.fileName + '.component.js'),
                {
                    name: this.name,
                }
            );
        },
        html: function() {
            if(this.hasView) {
                this.fs.copyTpl(
                    this.templatePath('_ng.component.html'),
                    this.destinationPath(this.fileName + '.component.html'),
                    {
                        name: this.name
                    }
                );
            }
        },
        styles: function() {
            if(this.hasStyles) {
                this.fs.copyTpl(
                    this.templatePath('_ng.component.scss'),
                    this.destinationPath(this.fileName + '.component.scss'),
                    {
                        name: this.name
                    }
                );
            }
        }
    }
});
