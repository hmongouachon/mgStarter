module.exports = function(grunt) {
    //grunt wrapper function 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //grunt task configuration will go here  
        ngAnnotate: {
            options: {
                // singleQuotes: true
            },
            app: {
                files: {
                    // './dist/min-safe/00-plugins.js': ['./js/plugins.js'],
                    './dist/min-safe/00-main.js': ['./js/00-config.js'],
                    './dist/min-safe/01-main.js': ['./js/01-home.js'],
                    './dist/min-safe/02-main.js': ['./js/02-lab.js'],
        	        './dist/min-safe/03-main.js': ['./js/main.js'],

                }
            }
        },
        concat: {
            js: { //target
                src: ['./dist/min-safe/main.js', './dist/min-safe/*.js'],
                dest: './dist/min/main.js'
            }
        },
        uglify: {
            js: { //target
                src: ['./dist/min/main.js'],
                dest: './dist/min/main.js'
            },
            options: {
                mangle: false,
            },
            
        },
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', ]); 

}