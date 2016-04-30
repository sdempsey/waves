module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src/content/',
			src: ['**'],
			dest: 'dist/'
		}]
	},
    scripts: {
        files: [{
            expand: true,
            cwd: 'src/js/lib/',
            src: ['**'],
            dest: 'dist/assets/js/lib/'
        }]
    }
};