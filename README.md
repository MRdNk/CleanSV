CleanSV
=======

A nodejs module for cleaning up CSV files in a nice streaming parser.

Trims white space, changes delimiter to another one, remove spaces. 

Using the module: Bash / cmd
------------------------------

Unix pipe a file straight into the CleanSV and select an -filename name

```bash
cat myfile.csv | node CleanSV -f clean.csv

```

Usage
```bash
  Usage: CleanSV.js [options]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -f, --filename [type]        Filename to pipe into
    --nt, --noTrim <columns>     Columns not to Trim
    --od, --outputDelim [delim]  The output delimiter
    --rq, --removeQuotes         Remove all quotes

```

Example with noTrim
-------------------

Take a csv file
```bash
A,B,C
  fred,XX,  X
lisa  ,X   X,    X
```

- fred & lisa in column A has a space at the beginning - we want that trimmed.
- the Xs in columns B & C we want to keep as the spaces are important to the data.

So ...
```bash
cat myfile.csv | node CleanSV -f clean.csv -t B,C
```

Cat myfile.csv piped into CleanSV
- The output filename is clean.csv (-f clean.csv)
- We don't want to trim column B and C (-t B,C)


The resulting output file (clean.csv)
```bash
A,B,C
fred,XX,  X
list,X   X,    X
```

