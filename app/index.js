var generators = require('yeoman-generator');
var YAML = require('yamljs');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  parseConfig: function() {
    this.config = YAML.load('config.yml');
    this.config.snakeName = this.config.name.toLowerCase().replace(' ', '-');
  },

  writing: function() {
    var config = this.config;
    this.sourceRoot('src');
    this.destinationRoot(config.snakeName);

    // Replacements for templates
    var replacements = config;
    replacements.year = new Date().getFullYear();
    replacements.machine_name = config.name.replace(' ', '').toLowerCase();

    // Files that should be copied
    // Prefix the filename with "!" if you don't want it to be treated as a template
    var files = [
      'LICENSE',
      'scripts',
      'README.md',
      'build/chrome/.gitkeep',
      'releases/.gitkeep',
      'config.json.example',
      'gulpfile.babel.js',
      'package.json',
      'webpack',
      '!test',
      'src/assets',
      'src/chrome',
      'src/app',
      'src/web',
      'src/android',
      'src/android/.babelrc',
      'src/android/.flowconfig',
      'src/android/.watchmanconfig',
      '.gitignore',
      '.babelrc'
    ];

    for (var i = 0; i < files.length; i++) {
      var path = files[i];
      
      // Copy files without parsing
      if (path[0] === '!') {
        path = path.replace(/^!/, '');
        this.fs.copy(
          this.templatePath(path),
          this.destinationPath(path)
        );
      }
      
      // Parse files as templates
      else {
        this.fs.copyTpl(
          this.templatePath(path),
          this.destinationPath(path),
          replacements
        );
      }
    }
  },

  end: function() {
    var that = this;
    
    // Initialize a Git repository
    console.log('Initializing git repository...');
    this.composeWith('git-init', {
      options: { commit: 'Initial commit' }
    }, {
      local: require.resolve('generator-git-init')
    });

    // Install and compile
    console.log('Installing app...');
    this.installDependencies({
      callback: function() {
        that.spawnCommand('npm', ['run', 'try'])
        .on('close', function () {

          // Add new files to Git
          that.spawnCommandSync('cd', [that.config.snakeName]);
          that.spawnCommandSync('git', ['add', '*']);
          that.spawnCommandSync('git', ['commit', '-a', '-m', 'First compilation']);
          that.spawnCommandSync('git', ['log']);
          that.spawnCommandSync('git', ['status']);

          // Finish
          console.log('Your application was generated! Try it and run the tests! Information about those things are in the README.');

        });
      }
    });
  }
});
