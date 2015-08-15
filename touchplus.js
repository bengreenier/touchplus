#!/usr/bin/env node
var program = require('commander');
var touchplus = require('./lib');

program
	.alias('tt')
	.usage('[options] <file...>')
	.version(require('./package.json').version)
	.option('-f, --force', 'bool (ignored)')
	.option('-t, --time <date>', 'parse <date> and use it instead of current time')
	.option('-a, --atime <val>', 'change only access time. <val> can be a bool or a Date')
	.option('-m, --mtime <val>', 'change only modification time. <val> can be a bool or a Date')
	.option('-r, --ref <file>', 'use this file\'s times instead of current time')
	.option('-c, --nocreate', 'bool. do not create any files')
	.parse(process.argv);
	
touchplus.process(program.args, {
	args: program
});