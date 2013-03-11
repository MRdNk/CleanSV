#!/usr/bin/env node

var program = require('commander')
var CleanSV = require('./index.js')
var fs = require('fs')

function filename (val) {
	//console.log('val: ', val)
	return val
}

program
	.version('0.0.1')
	.option('-f, --filename [type]', 'filename to pipe to', filename)
	.parse(process.argv)

if (program.filename) {
	process.stdin.pipe(CleanSV(null)).pipe(fs.createWriteStream(program.filename))
}

