// This module simply holds and displays the configuration.
// Valid arguments and their meaning:
//
//`?, -h --help`
//    - display this screen
//
//`-v, --version`
//    - display the version number
//
//`-s, --strict`
//    - adhere strictly to the RFC 5234 ABNF specification
//    - no additional SABNF features allowed
//
//`-r, --CRLF`
//    - convert all line endings to CRLF (carriage return \r, line feed \n),
//    - line end added to last line if missing
//
//`-l, --LF`
//    - convert all line endings to LF (line feed only \n),
//    - line end added to last line if missing
//
//`--in=<file>[,<file>...], -in <file>[,<file>...]`
//    - input grammar filename(s) (required)
//    - no spaces in file names or between commas allowed(\*)
//    - multiple filenames allowed
//    - files will be concatenated into a single grammar in the order they are found
//    - a comma-delimited list of names may be given
//    - multiple input parameters are allowed and are treated the same as a comma-delimited list
//
//`--HTML=<directory>, -html <directory>`
//    - `<directory>` is the directory name of the output html files<br> (default = `./html`)
//    - `<directory>` must exist or be creatable with mkdir
//
//`--C=<name>, -c <name>`
//   - generate an APG 6.3 C-language parser
//   - files <name>.c and <name>.h will be generated(\*)(\*\*)
//
//`--Cpp=<name>, -cpp <name>`
//   - generate an APG 6.3 C++ language parser
//   - files `<name>.cpp` and `<name>.h` will be generated(\*)(\*\*)
//
//`--JavaScript=<name>, -js <name>`
//   - generate a JavaScript APG 2.0.0 parser
//   - file `<name>.js` will be generated(\*)
//
//`--Java=<name>, -java <name>`
//   - generate a Java APG 1.0 parser
//   - file `<name>.java` will be generated(\*)(\*\*)
//
//(\*)NOTE: `<name>` or `<file>` may include absolute or relative path, but the path must exist<br>
//(\*\*)NOTE: not yet implemented

module.exports = function() {
  "use strict";
  this.that = this;
  var VERSION = "JavaScript APG 2.0";
  var HTMLDIR = "./html";
  var FILE_DIVIDER = "/";
  var COPYRIGHT = "Copyright (C) 2105 Lowell D. Thomas, all rights reserved";

  // Getters for apg system information.
  this.getVersion = function() {
    return VERSION;
  }
  this.getHtmlDir = function() {
    return HTMLDIR;
  }
  this.getFileDivider = function() {
    return FILE_DIVIDER;
  }
  this.getCopyright = function() {
    return COPYRIGHT;
  }
  
  // The flag defaults.
  this.fHelp = false;
  this.fVersion = false;
  this.fStrict = false;
  this.fCRLF = false;
  this.fLF = false;
  
  // The key/value defaults.
  this.vInput = [];
  this.vHTMLDir = HTMLDIR;
  this.vCLang = "";
  this.vCppLang = "";
  this.vJSLang = "";
  this.vJavaLang = "";
  
  // A function to display the configuration in text format suitable for `console.log()` output.
  this.display = function() {
    var text = "";
    text += "\nconfiguration:";
    text += "\n";
    text += "?, -h --help: " + this.fHelp;
    text += "\n";
    text += "-v, --version: " + this.fVersion;
    text += "\n";
    text += "-S, --strict: " + this.fStrict;
    text += "\n";
    text += "-C, --CRLF: " + this.fCRLF;
    text += "\n";
    text += "-L, --LF: " + this.fLF;
    text += "\n";
    text += "--in: '" + this.vInput + "'";
    text += "\n";
    text += "--HTML: '" + this.vHTMLDir + "'";
    text += "\n";
    text += "--C: '" + this.vCLang + "'";
    text += "\n";
    text += "--C++, --Cpp: '" + this.vCppLang + "'";
    text += "\n";
    text += "--JS, --JavaScript: '" + this.vJSLang + "'";
    text += "\n";
    text += "--Java: '" + this.vJavaLang + "'";
    text += "\n";
    return text;
  };
  
  // A function to display the configuration in HTML format.
  // This function is used to generate the `html/configuration.html` output page.
  this.displayHtml = function() {
    var html = '<table id="config-table">\n';
    html += '<tr>\n';
    html += '<th>short<br>name</th><th>long<br>name</th><th>value</th><th>description</th>\n';
    html += '<tr>\n';
    html += '<td>-h, ?</td><td>--help</td><td>'
        + this.fHelp
        + '</td><td>display descriptions of all configuration parameters</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-v</td><td>--version</td><td>' + this.fVersion
        + '</td><td>display the JavaScript APG version number</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-S</td><td>--strict</td><td>'
        + this.fStrict
        + '</td><td>strict adherence to RFC 5234 (e.g. CRLF line endings only)</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-C</td><td>--CRLF</td><td>'
        + this.fCRLF
        + '</td><td>convert all line endings to CRLF, including last line</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-L</td><td>--LF</td><td>' + this.fLF
        + '</td><td>convert all line endings to LF, including last line</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-in</td><td>--in=</td><td>' + this.vInput
        + '</td><td>input grammar file name</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-html</td><td>--HTML=</td><td>' + this.vHTMLDir
        + '</td><td>directory to put the HTML output pages in</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-c</td><td>--C=</td><td>' + this.vCLang
        + '</td><td>base name for the generated C-lanugage parser. \'';
    html += this.vCLang + '.h\' and \'' + this.vCLang
        + '.c\' files will be created</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-cpp=</td><td>--Cpp=</td><td>' + this.vCppLang
        + '</td><td>base name for the generated C++-lanugage parser. \'';
    html += this.vCppLang + '.h\' and \'' + this.vCppLang
        + '.cpp\' files will be created</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-js=</td><td>--JavaScript=</td><td>'
        + this.vJSLang
        + '</td><td>base name for the generated JavaScript-lanugage parser. A \'';
    html += this.vJSLang + '.js\' file will be created</td>\n';
    html += '</tr>\n';
    html += '<tr>\n';
    html += '<td>-java</td><td>--Java=</td><td>' + this.vJavaLang
        + '</td><td>base name for the generated Java-lanugage parser. A \'';
    html += this.vJavaLang + '.java\' file will be created</td>\n';
    html += '</tr>\n';
    html += '</table>\n';
    return html
  };

  // Helper function to display apg usage to the help screen
  this.displayUsage = function(args) {
    var argsStr = "", text = "";
    text += "\n";
    text += "NAME:\n";
    text += "    apg";
    text += "\n\n";
    text += "USAGE:\n";
    text += "    local installation:\n";
    text += "    node index.js args\n";
    text += "\n";
    text += "    global installation:\n";
    text += "    apg args";
    text += "\n\n";
    text += "ARGS FOUND:\n";
    if (Array.isArray(args)) {
      args.forEach(function(val, index, array) {
        argsStr += " " + val;
      });
    }
    if (argsStr === "") {
      argsStr = "<no arguments>";
    }
    text += argsStr;
    text += "\n";
    return text;
  }

  // Text help screen called when `--help` or one of its equivalents is specified.
  this.helpScreen = function(args) {
    var text = this.displayUsage(args);
    text += "\n";
    text += "ARGS:\n";
    text += "?, -h --help";
    text += "\n    display this screen";
    text += "\n\n";
    text += "-v, --version" + "\n    display the version number";
    text += "\n\n";
    text += "-s, --strict"
        + "\n    adhere strictly to the RFC 5234 ABNF specification";
    text += "\n    no additional SABNF features allowed";
    text += "\n\n";
    text += "-r, --CRLF"
        + "\n    convert all line endings to CRLF (carriage return \\r, line feed \\n),";
    text += "\n    line end added to last line if missing";
    text += "\n\n";
    text += "-l, --LF"
        + "\n    convert all line endings to LF (line feed only \\n),";
    text += "\n    line end added to last line if missing";
    text += "\n\n";
    text += "--in=<file>[,<file>...], -in <file>[,<file>...]"
    text += "\n    input grammar filename(s) (required)";
    text += "\n    no spaces in file names or between commas allowed(*)";
    text += "\n    multiple filenames allowed";
    text += "\n    files will be concatenated into a single grammar in the order they are found";
    text += "\n    a comma-delimited list of names may be given";
    text += "\n    multiple input parameters are allowed and are treated the same as a comma-delimited list";
    text += "\n\n";
    text += "--HTML=<directory>, -html <directory>";
    text += "\n    <directory> is the directory name of the output html files (default = ./html)";
    text += "\n    <directory> must exist or be creatable with mkdir";
    text += "\n\n";
    text += "--C=<name>, -c <name>";
    text += "\n   generate an APG 6.3 C-language parser";
    text += "\n   files <name>.c and <name>.h will be generated(*)(**)";
    text += "\n\n";
    text += "--Cpp=<name>, -cpp <name>";
    text += "\n   generate an APG 6.3 C++ language parser";
    text += "\n   files <name>.cpp and <name>.h will be generated(*)(**)";
    text += "\n\n";
    text += "--JavaScript=<name>, -js <name>";
    text += "\n   generate a JavaScript APG 2.0.0 parser";
    text += "\n   file <name>.js will be generated(*)";
    text += "\n\n";
    text += "--Java=<name>, -java <name>";
    text += "\n   generate a Java APG 1.0 parser";
    text += "\n   file <name>.java will be generated(*)(**)";
    text += "\n\n";
    text += "(*)NOTE: <name> or <file> may include absolute or relative path, but the path must exist";
    text += "\n\n";
    text += "(**)NOTE: not yet implemented";
    text += "\n\n";
    return text;
  };
};