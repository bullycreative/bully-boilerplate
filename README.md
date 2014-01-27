# A Lightweight Front-End Boilerplate
This boilerplate uses content delivery networks to deliver assets we frequently use during front-end development. The goal was to create a super lightweight package to be used as a common structure and baseline as projects start up. It will minimize the time and effort required to gain momentum on smaller static projects, and allow for rapid execution of ideas, concepts, or prototypes.

## Assets Included
- Bootstrap 3.0.3
- Modernizr 2.7.1
- jQuery 2.0.3
- OpenGraph metadata
- Twitter Card metadata
- Retina favicon.ico template
- OpenGraph image template
- Apple Touch Icon template

## Grunt.js
We've included some of our favourite Grunt.js plugins:
- grunt-contrib-copy
- grunt-contrib-jshint
- grunt-contrib-uglify
- grunt-contrib-watch
- grunt-htmlhint
- grunt-recess

## How to Use
If you're using Grunt.js, start the Grunt Watch, and begin development in the HTML, assets/js, and assets/less.

If you're not using Grunt.js, comment out the minified and compiled assets (custom.min.css and app.min.js), then uncomment custom.less, less.js, plugins.js, and main.js.

Then get to work.