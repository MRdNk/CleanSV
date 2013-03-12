#!/usr/bin/env node

var program = require('commander')
var CleanSV = require('./index.js')
var fs = require('fs')

/*function filename (val) {
  //console.log('val: ', val)
  return val
}*/

function list (val) {
  return val.split(',')
}

var opts = {
    delim: ','
  , headers: true
  //, outDelim: ''
  //, removeQuotes: true
}

program
  .version('0.1.2')
  .option('-f, --filename [type]', 'Filename to pipe into')//, filename)
  .option('--nt, --noTrim <columns>', 'Columns not to Trim', list)
  .option('--od, --outputDelim [delim]', 'The output delimiter')
  .option('--rq, --removeQuotes', 'Remove all quotes')

  .parse(process.argv)

if (program.filename) {
  if (program.noTrim) opts.noTrim = program.noTrim
  if (program.outputDelim) opts.outDelim = program.outputDelim
  if (program.removeQuotes) opts.removeQuotes = program.removeQuotes

  //console.log(opts)

  process.stdin.pipe(CleanSV(opts)).pipe(fs.createWriteStream(program.filename))
}