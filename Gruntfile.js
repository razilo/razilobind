module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
				   ['babelify', {presets: ['es2015']}]
			   ]
            },
            files: {
               "./dist/razilobind.js": ["./index.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./index.js", "./src/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};
