var hs = require('hulksmash');
var cp = require('child_process');
var touch = require('touch');
var path = require('path');
var fst = require('fs-tools');

// the default touching function
// TODO: async
function touchFunc (file, makeDirs, args) {
	makeDirs = makeDirs || true;
	args = args || {};
	
	if (makeDirs) {
		fst.mkdirSync(path.dirname(file));
	}
	touch.sync(file, args);
}

// a function for processing files
function process (files, opts) {
	opts = hs.objects({
		touchFunc: touchFunc,
		makeDirs: true,
		args: {}
	}, opts);
	
	files.forEach(function (v) {
		opts.touchFunc(v, opts.makeDirs, opts.args);
	});
}

// export our functionality
module.exports = {
	process: process
};