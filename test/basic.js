var memfs = require('mem-fs');
var File = require('vinyl');
var assert = require('assert');
var path = require('path');

var tt = require('../lib');

// a punchout func that doesn't actually touch the file system
function inMemoryTouchFunc (file, makeDir, opts) {
	var f = new File({
		cwd: '/',
		base: path.dirname(file),
		path: file
	});
	
	this.store.add(f);
}

function validateOpts (file, makeDir, opts) {
	assert.deepEqual(this.expected, opts);	
}

function validateMakeDir (file, makeDir, opts) {
	assert.equal(this.expected, makeDir);
}

describe("touchplus", function () {
	it("passes through arguments", function () {
		tt.process(['file'], {
			touchFunc: validateOpts.bind({expected: {
				force: true,
				time: "",
				atime: "",
				mtime: true,
				nocreate: true,
				ref: ""
			}}),
			args: {
				force: true,
				time: "",
				atime: "",
				mtime: true,
				nocreate: true,
				ref: ""
			}
		});
	});
});