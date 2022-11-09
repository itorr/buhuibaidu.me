module.exports = function (grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {
			build:{
				options: {
					removeComments: true,
					removeCommentsFromCDATA: true,
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true,
					minifyJS: 1,
					minifyCSS:1
				},
				files: {
					'index.html':'home.html'
				}
			}
		},
		
	});


	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// grunt.loadNpmTasks('grunt-git');

	// 默认任务
	grunt.registerTask('default', [
		'htmlmin'
	]);//
}