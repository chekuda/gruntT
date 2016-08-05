module.exports = function (grunt) {
	// Configuration of Grunt JS
	grunt.initConfig({

		//uglify
		uglify:
		{
			options:
			{
				mangle: false,
				compress:
				{
					drop_console: true
				}
			},
			js:
			{

				files:
				[{
					cwd: 'js/src/', //root of our main JS
					expand: true,   //search into subfolders
					src: "*.js",    //relative pattern to cwd
					dest: 'js/min/' //Destination of compress files
				}]
				
			}
		}
	});

	// Load the plugins by this
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// Registering task
	// @default - Name of the task
	grunt.registerTask('default',['uglify']);
};