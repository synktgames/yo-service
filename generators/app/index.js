'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts =
        [{
            name: 'serviceName',
            message: 'What would you like to name your service?',
        },{
            name: 'purpose',
            message: 'What is the purpose of the service (50 words or less)'
          }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.service = this.props.serviceName + '.js';
      this.props.now = new Date();

      done();
    }.bind(this));
  },

  writing: {
    serviceFile: function writing$serviceFile () {
        this.template(
            this.templatePath('_service.js'),
            this.destinationPath('services/'+this.props.service),
            this.props
        );
    },
      postInstall: function () {
      }
  }
});
