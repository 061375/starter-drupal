module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify: {
          my_target: {
            files: {
                //'_/js/script.js':['_/components/jquery/jquery-1.9.1.min.js','_components/jquery/jquery-migrate.js','_/components/js/*.js']
                'js/scripts.js':['_/components/js/*.js'] 
            }
          }
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: { livereload: true },
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['*.html']
            }
        }
    }) //initconfig
    grunt.registerTask('default', 'watch');
} // exports