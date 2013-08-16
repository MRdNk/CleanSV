var fs = require('fs')
var path = require('path')
var cleansv = require('../index.js')

function runtest (file) {

  var opts = {
    outDelim: '|',
    removeQuotes: true
   /* // delim : '\t'
    delim : ',',
    columns: ['Column1', 'Column2', 'Column3'],
    headers: true,
    headersOut: true,
    outputArray: false,
    //noTrim: ['DAYS_OF_WEEK']
		noTrim: ['C']*/
  }

  // console.log('opts: ', opts)

  fs.createReadStream(path.resolve(__dirname, file)).pipe(cleansv(opts)).pipe(fs.createWriteStream(path.resolve(__dirname, 'clean.csv')))
}

module.exports = runtest
