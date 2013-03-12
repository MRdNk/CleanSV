#!/usr/bin/env node

var program = require('commander')
var CleanSV = require('./index.js')
var fs = require('fs')

function filename (val) {
	//console.log('val: ', val)
	return val
}

function list (val) {
	return val.split(',')
}

var opts = {
		delim: ','
	,	headers: true
	, outDelim: '|'
	, removeQuotes: true
}

program
	.version('0.0.1')
	.option('-f, --filename [type]', 'filename to pipe to', filename)
	.option('-t, --noTrim <columns>', 'columns to not trim', list)
	.parse(process.argv)

if (program.filename) {
	if (program.noTrim) {
		opts.noTrim = program.noTrim
	}
	process.stdin.pipe(CleanSV(opts)).pipe(fs.createWriteStream(program.filename))
}