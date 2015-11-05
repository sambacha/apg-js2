// This module simply defines several HTML quantities as text strings.
// This avoids the need for the application to carry along 
// resource functions that need to be available and read in.

"use strict;"
// screencss is the main CSS file used to display the apg output in HTML format.
// All of the pages, `/html/console.html`, etc. use it.
var screencss  = "";
screencss += "\/*************************************\n";
screencss += " * TITLE: Sinorca Screen Stylesheet  *\n";
screencss += " * URI  : sinorca\/sinorca-screen.css *\n";
screencss += " * MODIF: 2003-Apr-30 19:31 +0800    *\n";
screencss += " *************************************\/\n";
screencss += "\n";
screencss += "\/* ##### Common Styles ##### *\/\n";
screencss += "pre {\n";
screencss += "	line-height: 1.2em;\n";
screencss += "}\n";
screencss += "\n";
screencss += "body {\n";
screencss += "	color: black;\n";
screencss += "	background-color: rgb(240, 240, 240);\n";
screencss += "	font-family: verdana, helvetica, arial, sans-serif;\n";
screencss += "	font-size: 71%; \/* Enables font size scaling in MSIE *\/\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "html>body {\n";
screencss += "	font-size: 8.5pt;\n";
screencss += "}\n";
screencss += "\n";
screencss += "acronym, .titleTip {\n";
screencss += "	border-bottom: 1px dotted rgb(153, 153, 153);\n";
screencss += "	cursor: help;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0 0 0.4px 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".doNotDisplay {\n";
screencss += "	display: none;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".smallCaps {\n";
screencss += "	font-size: 110%;\n";
screencss += "	font-variant: small-caps;\n";
screencss += "}\n";
screencss += "\n";
screencss += "\/* ##### Header ##### *\/\n";
screencss += ".superHeader {\n";
screencss += "	color: white;\n";
screencss += "	background-color: rgb(100, 135, 220);\n";
screencss += "	height: 2em;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".superHeader a {\n";
screencss += "	color: white;\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: none;\n";
screencss += "	font-size: 91%;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0 0.5ex 0 0.25ex;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".superHeader a:hover {\n";
screencss += "	text-decoration: underline;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".superHeader .left {\n";
screencss += "	position: absolute;\n";
screencss += "	left: 1.5mm;\n";
screencss += "	top: 0.75ex;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".superHeader .right {\n";
screencss += "	position: absolute;\n";
screencss += "	right: 1.5mm;\n";
screencss += "	top: 0.75ex;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".midHeader {\n";
screencss += "	color: rgb(39, 78, 144);\n";
screencss += "	background-color: rgb(140, 170, 230);\n";
screencss += "}\n";
screencss += "\n";
screencss += ".headerTitle {\n";
screencss += "	font-size: 337%;\n";
screencss += "	font-weight: normal;\n";
screencss += "	margin: 0 0 0 4mm;\n";
screencss += "	padding: 0.25ex 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".subHeader {\n";
screencss += "	color: white;\n";
screencss += "	background-color: rgb(0, 51, 153);\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 1ex 1ex 1ex 1.5mm;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".subHeader a {\n";
screencss += "	color: white;\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: none;\n";
screencss += "	font-weight: bold;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0 0.75ex 0 0.5ex;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".subHeader a:hover {\n";
screencss += "	text-decoration: underline;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".superHeader .highlight, .subHeader .highlight {\n";
screencss += "	color: rgb(253, 160, 91);\n";
screencss += "	background-color: transparent;\n";
screencss += "}\n";
screencss += "\n";
screencss += "\/* ##### Side Bar ##### *\/\n";
screencss += "#side-bar {\n";
screencss += "	width: 15em;\n";
screencss += "	float: left;\n";
screencss += "	clear: left;\n";
screencss += "	border-right: 1px solid rgb(153, 153, 153);\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar div {\n";
screencss += "	border-bottom: 1px solid rgb(153, 153, 153);\n";
screencss += "}\n";
screencss += "\n";
screencss += ".sideBarTitle {\n";
screencss += "	font-weight: bold;\n";
screencss += "	margin: 0 0 0.5em 2.5mm;\n";
screencss += "	padding: 1em 0 0 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar ul {\n";
screencss += "	list-style-type: none;\n";
screencss += "	list-style-position: outside;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0 0 1.1em 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar li {\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0.1ex 0; \/* Circumvents a rendering bug (?) in MSIE 6.0 *\/\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar a, .thisPage {\n";
screencss += "	color: rgb(0, 102, 204);\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: none;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0.75em 1ex 0.75em 5mm;\n";
screencss += "	display: block;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".thisPage {\n";
screencss += "	color: black;\n";
screencss += "	background-color: white;\n";
screencss += "	padding-left: 4mm;\n";
screencss += "	border-top: 1px solid rgb(153, 153, 153);\n";
screencss += "	border-bottom: 1px solid rgb(153, 153, 153);\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar a:hover {\n";
screencss += "	color: white;\n";
screencss += "	background-color: rgb(100, 135, 220);\n";
screencss += "	text-decoration: none;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".sideBarText {\n";
screencss += "	line-height: 1.5em;\n";
screencss += "	margin: 0 0 1em 0;\n";
screencss += "	padding: 0 1.5ex 0 2.5mm;\n";
screencss += "	display: block;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar .sideBarText a {\n";
screencss += "	text-decoration: underline;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 0;\n";
screencss += "	display: inline;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#side-bar .sideBarText a:hover {\n";
screencss += "	color: rgb(0, 102, 204);\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: none;\n";
screencss += "}\n";
screencss += "\n";
screencss += ".lighterBackground {\n";
screencss += "	color: inherit;\n";
screencss += "	background-color: white;\n";
screencss += "}\n";
screencss += "\n";
screencss += "\/* ##### Main Copy ##### *\/\n";
screencss += "#main-copy {\n";
screencss += "	color: black;\n";
screencss += "	background-color: white;\n";
screencss += "	text-align: justify;\n";
screencss += "	line-height: 1.5em;\n";
screencss += "	margin: 0 0 0 15em;\n";
screencss += "	padding: 0.5mm 5mm 5mm 5mm;\n";
screencss += "	border-left: 1px solid rgb(153, 153, 153);\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy p {\n";
screencss += "	margin: 1em 1ex 2em 1ex;\n";
screencss += "	padding: 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy a {\n";
screencss += "	color: rgb(0, 102, 204);\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: underline;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy a:hover {\n";
screencss += "	text-decoration: none;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy h1 {\n";
screencss += "	color: white;\n";
screencss += "	background-color: rgb(100, 135, 220);\n";
screencss += "	font-size: 100%;\n";
screencss += "	font-weight: bold;\n";
screencss += "	margin: 3em 0 0 0;\n";
screencss += "	padding: 0.5ex 0 0.5ex 1ex;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy .topOfPage {\n";
screencss += "	color: white;\n";
screencss += "	background-color: transparent;\n";
screencss += "	font-size: 91%;\n";
screencss += "	font-weight: bold;\n";
screencss += "	text-decoration: none;\n";
screencss += "	margin: 2.5ex 1ex 0 0; \/* For MSIE *\/\n";
screencss += "	padding: 0;\n";
screencss += "	float: right;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#main-copy>.topOfPage {\n";
screencss += "	margin: 2.75ex 1ex 0 0; \/* For fully standards-compliant user agents *\/\n";
screencss += "}\n";
screencss += "\n";
screencss += "dl {\n";
screencss += "	margin: 1em 1ex 2em 1ex;\n";
screencss += "	padding: 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "dt {\n";
screencss += "	font-weight: bold;\n";
screencss += "	margin: 0 0 0 0;\n";
screencss += "	padding: 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "dd {\n";
screencss += "	margin: 0 0 2em 2em;\n";
screencss += "	padding: 0;\n";
screencss += "}\n";
screencss += "\n";
screencss += "\/* ##### Footer ##### *\/\n";
screencss += "#footer {\n";
screencss += "	color: white;\n";
screencss += "	background-color: rgb(100, 135, 220);\n";
screencss += "	font-size: 91%;\n";
screencss += "	margin: 0;\n";
screencss += "	padding: 1em 2.5mm 2.5ex 2.5mm;\n";
screencss += "	clear: both;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#footer .left {\n";
screencss += "	line-height: 1.45em;\n";
screencss += "	float: left;\n";
screencss += "	clear: left;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#footer .right {\n";
screencss += "	text-align: right;\n";
screencss += "	line-height: 1.45em;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#footer a {\n";
screencss += "	color: white;\n";
screencss += "	background-color: transparent;\n";
screencss += "	text-decoration: underline;\n";
screencss += "}\n";
screencss += "\n";
screencss += "#footer a:hover {\n";
screencss += "	text-decoration: none;\n";
screencss += "}\n";
screencss += "\n";
screencss += "\/* #### Grammar Page #### *\/\n";
screencss += "table.apg-table,\n";
screencss += ".apg-table th,\n";
screencss += ".apg-table td{text-align:right;border:1px solid black;border-collapse:collapse;}\n";
screencss += ".apg-table th:last-child{text-align:left;}\n";
screencss += ".apg-table td:last-child{text-align:left;}\n";
screencss += ".apg-table b, \/*match*\/\n";
screencss += ".apg-table i, \/* empty *\/\n";
screencss += ".apg-table kbd, \/* no-match *\/\n";
screencss += ".apg-table em, \/* invalid characters *\/\n";
screencss += ".apg-table code, \/*control characters*\/\n";
screencss += ".apg-table strong, \/* bold *\/\n";
screencss += ".apg-table samp,\n";
screencss += ".apg-table var\n";
screencss += "{font-family:monospace;font-size:100%;font-style:normal;font-weight:normal;}\n";
screencss += ".apg-table caption\n";
screencss += "{font-family:monospace;font-size:125%;font-style:normal;font-weight:bold;text-align:left;}\n";
screencss += ".apg-table b{color:#0000ff;}\n";
screencss += ".apg-table i{color:#00ff00;}\n";
screencss += ".apg-table kbd{color:#ff0000;}\n";
screencss += ".apg-table em{color:#cc0000;font-style:italic;font-weight:bold;}\n";
screencss += ".apg-table strong{font-weight:bold;}\n";
screencss += ".apg-table code{color:blue;font-style:italic;font-weight:bold;font-size:75%;}\n";
screencss += ".apg-table samp{background-color:#b2ffb2;color:#008000;}\n";
screencss += ".apg-table var{color:#cc0000;font-weight:bold;}\n";
screencss += "table.attr-table,\n";
screencss += ".attr-table th,\n";
screencss += ".attr-table td{text-align:center;border:1px solid black;border-collapse:collapse;}\n";
screencss += ".attr-table b,\n";
screencss += ".attr-table i,\n";
screencss += ".attr-table kbd,\n";
screencss += ".attr-table em,\n";
screencss += ".attr-table code,\n";
screencss += ".attr-table strong,\n";
screencss += ".attr-table samp,\n";
screencss += ".attr-table var\n";
screencss += "{font-family:monospace;font-size:100%;font-style:normal;font-weight:normal;}\n";
screencss += ".attr-table caption\n";
screencss += "{font-family:monospace;font-size:125%;font-style:normal;font-weight:bold;text-align:left;}\n";
screencss += ".attr-table th:nth-child(1){text-align:right;}\n";
screencss += ".attr-table th:nth-child(2){text-align:right;}\n";
screencss += ".attr-table td:nth-child(1){text-align:right;}\n";
screencss += ".attr-table td:nth-child(2){text-align:right;}\n";
screencss += ".attr-table b{color:#0000ff;}\n";
screencss += ".attr-table i{color:#00ff00;}\n";
screencss += ".attr-table kbd{color:#ff0000;}\n";
screencss += ".attr-table em{color:#cc0000;font-style:italic;font-weight:bold;}\n";
screencss += ".attr-table strong{font-weight:bold;}\n";
screencss += ".attr-table code{color:blue;font-style:italic;font-weight:bold;font-size:75%;}\n";
screencss += ".attr-table samp{background-color:#b2ffb2;color:#008000;}\n";
screencss += ".attr-table var{color:#cc0000;font-weight:bold;}\n";
screencss += ".attr-table b > em {font-size: 150%;font-weight:bold;}\n";
screencss += ".attr-table i > em {font-size: 150%;font-weight:bold;}\n";
screencss += ".attr-table kbd > em {font-size: 150%;font-weight:bold;}\n";
screencss += "\n";

// An alternative CSS style sheet to be used for printing an HTML page.
var printcss  = "\n";
printcss += "\/************************************\n";
printcss += " * TITLE: Sinorca Print Stylesheet  * \n";
printcss += " * URI  : sinorca\/sinorca-print.css *\n";
printcss += " * MODIF: 2003-May-01 19:30 +0800   *\n";
printcss += " ************************************\/\n";
printcss += "\n";
printcss += "\n";
printcss += "\/* ##### Common Styles ##### *\/\n";
printcss += "\n";
printcss += "body {\n";
printcss += "  color: black;\n";
printcss += "  background-color: white;\n";
printcss += "  font-family: \"times new roman\", times, roman, serif;\n";
printcss += "  font-size: 12pt;\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "acronym, .titleTip {\n";
printcss += "  font-style: italic;\n";
printcss += "  border-bottom: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += "acronym:after, .titleTip:after {  \/* Prints titles after the acronyms\/titletips. Doesn't work in MSIE *\/\n";
printcss += "  content: \"(\" attr(title) \")\\n";
printcss += "  font-size: 90%;\n";
printcss += "  font-style: normal;\n";
printcss += "  padding-left: 1ex;\n";
printcss += "}\n";
printcss += "\n";
printcss += ".doNotPrint {\n";
printcss += "  display: none !important;\n";
printcss += "}\n";
printcss += "\n";
printcss += "\n";
printcss += "\/* ##### Header ##### *\/\n";
printcss += "\n";
printcss += "#header {\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0;\n";
printcss += "  border-bottom: 1px solid black;\n";
printcss += "}\n";
printcss += "\n";
printcss += ".superHeader {\n";
printcss += "  display: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += ".headerTitle {\n";
printcss += "  color: black;\n";
printcss += "  background-color: transparent;\n";
printcss += "  font-family: \"trebuchet ms\", verdana, helvetica, arial, sans-serif;\n";
printcss += "  font-size: 200%;\n";
printcss += "  font-weight: normal;\n";
printcss += "  text-decoration: none;\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0 0 0.5ex 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += ".subHeader {\n";
printcss += "  display: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += "\n";
printcss += "\/* ##### Side Bar ##### *\/\n";
printcss += "\n";
printcss += "#side-bar {\n";
printcss += "  display: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += "\n";
printcss += "\/* ##### Main Copy ##### *\/\n";
printcss += "\n";
printcss += "#main-copy {\n";
printcss += "  text-align: justify;\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "#main-copy h1 {\n";
printcss += "  font-family: \"trebuchet ms\", verdana, helvetica, arial, sans-serif;\n";
printcss += "  font-size: 120%;\n";
printcss += "  margin: 2ex 0 1ex 0;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "#main-copy a {\n";
printcss += "  color: black;\n";
printcss += "  background-color: transparent;\n";
printcss += "  text-decoration: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += "#main-copy a:after {  \/* Prints the links' URIs after the links' texts. Doesn't work in MSIE *\/\n";
printcss += "  content: \"<\" attr(href) \">\\n";
printcss += "  font-size: 90%;\n";
printcss += "  padding-left: 1ex;\n";
printcss += "}\n";
printcss += "\n";
printcss += "p {\n";
printcss += "  margin: 0 0 2ex 0;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "dl {\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "dt {\n";
printcss += "  font-weight: bold;\n";
printcss += "  margin: 0;\n";
printcss += "  padding: 0 0 1ex 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += "dd {\n";
printcss += "  margin: 0 0 2ex 1.5em;\n";
printcss += "  padding: 0;\n";
printcss += "}\n";
printcss += "\n";
printcss += ".topOfPage {\n";
printcss += "  display: none;\n";
printcss += "}\n";
printcss += "\n";
printcss += "\n";
printcss += "\/* ##### Footer ##### *\/\n";
printcss += "\n";
printcss += "#footer {\n";
printcss += "  margin: 2em 0 0 0;\n";
printcss += "  padding: 1ex 0 0 0;\n";
printcss += "  border-top: 1px solid black;\n";
printcss += "}\n";
printcss += "\n";
printcss += "#footer a {\n";
printcss += "  color: black;\n";
printcss += "  background-color: transparent;\n";
printcss += "  text-decoration: none;\n";
printcss += "}\n";

// This is the JavaScript code for sorting the rule list
// as well for the show/hide anchors for the list of dependent rules.
// Uses the `<script>` data written to the page by 
//[rulesWithReferencesToHtml()](./attributes.html#section-12)
var rulesort  = "\n";
rulesort += "\"use strict;\"\n";
rulesort += "\n";
rulesort += "$(document).ready(function() {\n";
rulesort += "	sort({data: \"index\"});\n";
rulesort += "});\n";
rulesort += "\n";
rulesort += "function sortByNameDown(lhs, rhs){\n";
rulesort += "	if(lhs.name < rhs.name){\n";
rulesort += "		return -1;\n";
rulesort += "	}\n";
rulesort += "	if(lhs.name > rhs.name){\n";
rulesort += "		return 1;\n";
rulesort += "	}\n";
rulesort += "	return 0;\n";
rulesort += "}\n";
rulesort += "function sortByNameUp(lhs, rhs){\n";
rulesort += "	if(lhs.name < rhs.name){\n";
rulesort += "		return 1;\n";
rulesort += "	}\n";
rulesort += "	if(lhs.name > rhs.name){\n";
rulesort += "		return -1;\n";
rulesort += "	}\n";
rulesort += "	return 0;\n";
rulesort += "}\n";
rulesort += "function sortByIndexDown(lhs, rhs){\n";
rulesort += "	if(lhs.index < rhs.index){\n";
rulesort += "		return -1;\n";
rulesort += "	}\n";
rulesort += "	if(lhs.index > rhs.index){\n";
rulesort += "		return 1;\n";
rulesort += "	}\n";
rulesort += "	return 0;\n";
rulesort += "}\n";
rulesort += "function sortByIndexUp(lhs, rhs){\n";
rulesort += "	if(lhs.index < rhs.index){\n";
rulesort += "		return 1;\n";
rulesort += "	}\n";
rulesort += "	if(lhs.index > rhs.index){\n";
rulesort += "		return -1;\n";
rulesort += "	}\n";
rulesort += "	return 0;\n";
rulesort += "}\n";
rulesort += "function sort(e) {\n";
rulesort += "	if(e.data === \"index\"){\n";
rulesort += "		if(tableData.indexSort === \"down\"){\n";
rulesort += "			tableData.rows.sort(sortByIndexUp);\n";
rulesort += "			tableData.indexSort = \"up\"\n";
rulesort += "		}else{\n";
rulesort += "			tableData.rows.sort(sortByIndexDown);\n";
rulesort += "			tableData.indexSort = \"down\"\n";
rulesort += "		}\n";
rulesort += "	}else{\n";
rulesort += "		if(tableData.nameSort === \"down\"){\n";
rulesort += "			tableData.rows.sort(sortByNameUp);\n";
rulesort += "			tableData.nameSort = \"up\"\n";
rulesort += "		}else{\n";
rulesort += "			tableData.rows.sort(sortByNameDown);\n";
rulesort += "			tableData.nameSort = \"down\"\n";
rulesort += "		}\n";
rulesort += "	}\n";
rulesort += "	$(\"div#sort-links\").html(tableGen());\n";
rulesort += "	$(\"#sort-links a.sortIndex\").click(\"index\", sort);\n";
rulesort += "	$(\"#sort-links a.sortName\").click(\"name\", sort);\n";
rulesort += "	$(\"#sort-links a.sortExpand\").click(\"show\", showAll);\n";
rulesort += "	$(\"#sort-links a.sortCollapse\").click(\"hide\", showAll);\n";
rulesort += "	tableData.rows.forEach(function(row) {\n";
rulesort += "		var text = $(\"#sort-links a.show-\" + row.name);\n";
rulesort += "		text.click(row, show);\n";
rulesort += "		if(row.visible === true){\n";
rulesort += "			text.html(\"show\");\n";
rulesort += "			$(\"#sort-links tr.tr-\" + row.name).show();\n";
rulesort += "		}else{\n";
rulesort += "			text.html(\"hide\");\n";
rulesort += "			$(\"#sort-links tr.tr-\" + row.name).hide();\n";
rulesort += "		}\n";
rulesort += "	});\n";
rulesort += "}\n";
rulesort += "function showAll(e){\n";
rulesort += "	tableData.rows.forEach(function(row){\n";
rulesort += "		var text = $(\"#sort-links a.show-\" + row.name);\n";
rulesort += "		var line = $(\"#sort-links tr.tr-\" + row.name);\n";
rulesort += "		if(e.data === \"show\"){\n";
rulesort += "			text.html(\"hide\");\n";
rulesort += "			$(\"#sort-links tr.tr-\" + row.name).show();\n";
rulesort += "			row.visible = true;\n";
rulesort += "		}else{\n";
rulesort += "			text.html(\"show\");\n";
rulesort += "			$(\"#sort-links tr.tr-\" + row.name).hide();\n";
rulesort += "			row.visible = false;\n";
rulesort += "		}\n";
rulesort += "	});\n";
rulesort += "}\n";
rulesort += "function show(e) {\n";
rulesort += "	var row = e.data;\n";
rulesort += "	var text = $(e.target);\n";
rulesort += "	if(row.visible === true){\n";
rulesort += "		text.html(\"show\");\n";
rulesort += "		$(\"#sort-links tr.tr-\" + row.name).hide();\n";
rulesort += "		row.visible = false;\n";
rulesort += "	}else{\n";
rulesort += "		text.html(\"hide\");\n";
rulesort += "		$(\"#sort-links tr.tr-\" + row.name).show();\n";
rulesort += "		row.visible = true;\n";
rulesort += "	}\n";
rulesort += "}\n";
rulesort += "function tableGen(e) {\n";
rulesort += "	var title = \"Rules with Dependencies\"\n";
rulesort += "	var html = \"\";\n";
rulesort += "	html += '<table class=\"apg-table\">';\n";
rulesort += "	html += '<caption>' + title;\n";
rulesort += "	html += '<br><a class=sortExpand href=\"#\">show all<\/a><br><a class=sortCollapse href=\"#\">hide all<\/a>';\n";
rulesort += "	html += '<\/caption>';\n";
rulesort += "	html += '<tr><th><a class=\"sortIndex\" href=\"#\">index<\/a><\/th><th><a class=\"sortName\" href=\"#\">rule<\/a><\/th><th>refers to<\/th><\/tr>';\n";
rulesort += "	tableData.rows.forEach(function(rule) {\n";
rulesort += "		if (rule.dependents.length > 0) {\n";
rulesort += "			html += '<tr><td>' + rule.index + '<\/td><td>' + rule.name\n";
rulesort += "					+ '<\/td><td><a class=\"show-' + rule.name\n";
rulesort += "					+ '\" href=\"#\">show<\/a><\/td><\/tr>';\n";
rulesort += "			html += '<div class=\"div-' + rule.name + '\">';\n";
rulesort += "			for (var i = 0; i < rule.dependents.length; i += 1) {\n";
rulesort += "				var obj = rule.dependents[i];\n";
rulesort += "				html += '<tr class=\"tr-' + rule.name + '\"><td><\/td><td>'\n";
rulesort += "						+ obj.index + '<\/td><td>' + obj.name\n";
rulesort += "						+ '<\/td><\/tr>';\n";
rulesort += "			}\n";
rulesort += "		} else {\n";
rulesort += "			html += '<tr><td>' + rule.index + '<\/td><td>' + rule.name\n";
rulesort += "					+ '<\/td><td><\/td><\/tr>';\n";
rulesort += "		}\n";
rulesort += "	});\n";
rulesort += "	html += \"<\/table>\";\n";
rulesort += "	return html;\n";
rulesort += "}\n";

//This is the JavaScript code for sorting the rule list
//on the `html/attributes.html` page.
//Uses the `<script>` data written to the page by 
//[attrsToHtml()](./attributes.html#section-7)
var attrsort  = "";
attrsort += "\"use strict;\"\n";
attrsort += "\n";
attrsort += "$(document).ready(function() {\n";
attrsort += "	sort({\n";
attrsort += "		data : null\n";
attrsort += "	});\n";
attrsort += "});\n";
attrsort += "\n";
attrsort += "function sortCols(lhs, rhs) {\n";
attrsort += "	var lval, rval;\n";
attrsort += "	switch (attrSortCol) {\n";
attrsort += "	case \"rule\":\n";
attrsort += "		\/\/ alphabetical\n";
attrsort += "		lval = lhs.lower;\n";
attrsort += "		rval = rhs.lower;\n";
attrsort += "		break;\n";
attrsort += "	case \"type\":\n";
attrsort += "		\/\/ numerical on type\n";
attrsort += "		lval = lhs.type;\n";
attrsort += "		rval = rhs.type;\n";
attrsort += "		break;\n";
attrsort += "	case \"left\":\n";
attrsort += "		\/\/ descending: false (no) preceeds true (yes)\n";
attrsort += "		lval = (lhs.left === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.left === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"nested\":\n";
attrsort += "		lval = (lhs.nested === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.nested === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"right\":\n";
attrsort += "		lval = (lhs.right === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.right === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"cyclic\":\n";
attrsort += "		lval = (lhs.cyclic === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.cyclic === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"finite\":\n";
attrsort += "		lval = (lhs.finite === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.finite === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"empty\":\n";
attrsort += "		lval = (lhs.empty === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.empty === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"notempty\":\n";
attrsort += "		lval = (lhs.notempty === false) ? 0 : 1;\n";
attrsort += "		rval = (rhs.notempty === false) ? 0 : 1;\n";
attrsort += "		break;\n";
attrsort += "	case \"index\":\n";
attrsort += "	default:\n";
attrsort += "		\/\/ numerical\n";
attrsort += "		lval = lhs.index;\n";
attrsort += "		rval = rhs.index;\n";
attrsort += "		break;\n";
attrsort += "	}\n";
attrsort += "	if (lval < rval) {\n";
attrsort += "		if (attrSortDir === 0) {\n";
attrsort += "			return -1;\n";
attrsort += "		}\n";
attrsort += "		return 1;\n";
attrsort += "	}\n";
attrsort += "	if (lval > rval) {\n";
attrsort += "		if (attrSortDir === 0) {\n";
attrsort += "			return 1;\n";
attrsort += "		}\n";
attrsort += "		return -1;\n";
attrsort += "	}\n";
attrsort += "	return 0;\n";
attrsort += "}\n";
attrsort += "function sortErrors(lhs, rhs) {\n";
attrsort += "	var rerror = (rhs.left === true || rhs.cyclic === true || rhs.finite === false) ? true : false;\n";
attrsort += "	var lerror = (lhs.left === true || lhs.cyclic === true || lhs.finite === false) ? true : false;\n";
attrsort += "	\n";
attrsort += "	if (rerror === false && lerror === true ) {\n";
attrsort += "		return -1;\n";
attrsort += "	}\n";
attrsort += "	if (rerror === true && lerror === false) {\n";
attrsort += "		return 1;\n";
attrsort += "	}\n";
attrsort += "	return 0;\n";
attrsort += "}\n";
attrsort += "function sort(e) {\n";
attrsort += "	if (e.data !== null) {\n";
attrsort += "		\/\/ sort direction: 0 = descending, 1 = ascending\n";
attrsort += "		switch (e.data) {\n";
attrsort += "		case \"rule\":\n";
attrsort += "			attrSortCol = \"rule\"\n";
attrsort += "			attrDirs.rule = (attrDirs.rule === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.rule;\n";
attrsort += "			break;\n";
attrsort += "		case \"type\":\n";
attrsort += "			attrSortCol = \"type\"\n";
attrsort += "			attrDirs.type = (attrDirs.type === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.type;\n";
attrsort += "			break;\n";
attrsort += "		case \"left\":\n";
attrsort += "			attrSortCol = \"left\"\n";
attrsort += "			attrDirs.left = (attrDirs.left === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.left;\n";
attrsort += "			break;\n";
attrsort += "		case \"nested\":\n";
attrsort += "			attrSortCol = \"nested\"\n";
attrsort += "			attrDirs.nested = (attrDirs.nested === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.nested;\n";
attrsort += "			break;\n";
attrsort += "		case \"right\":\n";
attrsort += "			attrSortCol = \"right\"\n";
attrsort += "			attrDirs.right = (attrDirs.right === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.right;\n";
attrsort += "			break;\n";
attrsort += "		case \"cyclic\":\n";
attrsort += "			attrSortCol = \"cyclic\"\n";
attrsort += "			attrDirs.cyclic = (attrDirs.cyclic === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.cyclic;\n";
attrsort += "			break;\n";
attrsort += "		case \"finite\":\n";
attrsort += "			attrSortCol = \"finite\"\n";
attrsort += "			attrDirs.finite = (attrDirs.finite === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.finite;\n";
attrsort += "			break;\n";
attrsort += "		case \"empty\":\n";
attrsort += "			attrSortCol = \"empty\"\n";
attrsort += "			attrDirs.empty = (attrDirs.empty === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.empty;\n";
attrsort += "			break;\n";
attrsort += "		case \"notempty\":\n";
attrsort += "			attrSortCol = \"notempty\"\n";
attrsort += "			attrDirs.notempty = (attrDirs.notempty === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.notempty;\n";
attrsort += "			break;\n";
attrsort += "		case \"index\":\n";
attrsort += "		default:\n";
attrsort += "			attrSortCol = \"index\"\n";
attrsort += "			attrDirs.index = (attrDirs.index === 0) ? 1 : 0;\n";
attrsort += "			attrSortDir = attrDirs.index;\n";
attrsort += "			break;\n";
attrsort += "		}\n";
attrsort += "		attrRows.sort(sortCols);\n";
attrsort += "		if (attrHasErrors && attrSortErrors) {\n";
attrsort += "			attrRows.sort(sortErrors);\n";
attrsort += "		}\n";
attrsort += "	}\n";
attrsort += "	function check(){\n";
attrsort += "		var errors = $(\"#sort-links input#errors\");\n";
attrsort += "		if(errors.is(\":checked\")){\n";
attrsort += "			attrSortErrors = true;\n";
attrsort += "		}else{\n";
attrsort += "			attrSortErrors = false;\n";
attrsort += "		}\n";
attrsort += "	}\n";
attrsort += "\n";
attrsort += "	$(\"div#sort-links\").html(tableGen());\n";
attrsort += "	$(\"#sort-links a.index\").click(\"index\", sort);\n";
attrsort += "	$(\"#sort-links a.rule\").click(\"rule\", sort);\n";
attrsort += "	$(\"#sort-links a.type\").click(\"type\", sort);\n";
attrsort += "	$(\"#sort-links a.left\").click(\"left\", sort);\n";
attrsort += "	$(\"#sort-links a.nested\").click(\"nested\", sort);\n";
attrsort += "	$(\"#sort-links a.right\").click(\"right\", sort);\n";
attrsort += "	$(\"#sort-links a.cyclic\").click(\"cyclic\", sort);\n";
attrsort += "	$(\"#sort-links a.finite\").click(\"finite\", sort);\n";
attrsort += "	$(\"#sort-links a.empty\").click(\"empty\", sort);\n";
attrsort += "	$(\"#sort-links a.notempty\").click(\"notempty\", sort);\n";
attrsort += "	$(\"#sort-links input#errors\").click(check);\n";
attrsort += "}\n";
attrsort += "function yesno(val) {\n";
attrsort += "	return (val === true) ? \"yes\" : \"no\"\n";
attrsort += "}\n";
attrsort += "function tableGen(e) {\n";
attrsort += "	var title = \"Grammar Attributes\"\n";
attrsort += "	var checked = attrSortErrors ? \"checked\" : \"\"\n";
attrsort += "	var html = \"\"\n";
attrsort += "	html += '<table class=\"apg-table\">';\n";
attrsort += "	html += '<caption>' + title;\n";
attrsort += "	if(attrHasErrors){\n";
attrsort += "		html += '<br><input id=\"errors\" type=\"checkbox\" '+checked+'>keep errors at top<\/input><\/caption>';\n";
attrsort += "	}\n";
attrsort += "	html += '<\/caption>';\n";
attrsort += "	html += '<tr>';\n";
attrsort += "	html += '<th><a class=\"index\" href=\"#\">index<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"rule\" href=\"#\">rule<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"type\" href=\"#\">type<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"left\" href=\"#\">left<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"nested\" href=\"#\">nested<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"right\" href=\"#\">right<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"cyclic\" href=\"#\">cyclic<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"finite\" href=\"#\">finite<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"empty\" href=\"#\">empty<\/a><\/th>';\n";
attrsort += "	html += '<th><a class=\"notempty\" href=\"#\">not empty<\/a><\/th>';\n";
attrsort += "	html += '<\/tr>';\n";
attrsort += "	attrRows.forEach(function(row) {\n";
attrsort += "		var left = yesno(row.left);\n";
attrsort += "		if (row.left === true) {\n";
attrsort += "			left = '<kbd>' + left + '<\/kbd>';\n";
attrsort += "		}\n";
attrsort += "		var cyclic = yesno(row.cyclic);\n";
attrsort += "		if (row.cyclic === true) {\n";
attrsort += "			cyclic = '<kbd>' + cyclic + '<\/kbd>';\n";
attrsort += "		}\n";
attrsort += "		var finite = yesno(row.finite);\n";
attrsort += "		if (row.finite === false) {\n";
attrsort += "			finite = '<kbd>' + finite + '<\/kbd>';\n";
attrsort += "		}\n";
attrsort += "		html += '<tr>';\n";
attrsort += "		html += '<td>' + row.index + '<\/td>';\n";
attrsort += "		html += '<td>' + row.rule + '<\/td>';\n";
attrsort += "		html += '<td>' + row.typename + '<\/td>';\n";
attrsort += "		html += '<td>' + left + '<\/td>';\n";
attrsort += "		html += '<td>' + yesno(row.nested) + '<\/td>';\n";
attrsort += "		html += '<td>' + yesno(row.right) + '<\/td>';\n";
attrsort += "		html += '<td>' + cyclic + '<\/td>';\n";
attrsort += "		html += '<td>' + finite + '<\/td>';\n";
attrsort += "		html += '<td>' + yesno(row.empty) + '<\/td>';\n";
attrsort += "		html += '<td>' + yesno(row.notempty) + '<\/td>';\n";
attrsort += "		html += '<\/tr>';\n";
attrsort += "	});\n";
attrsort += "	html += \"<\/table>\"\n";
attrsort += "	return html;\n";
attrsort += "}\n";

// Export the strings here.
exports.screencss = screencss;
exports.printcss = printcss;
exports.attrsort = attrsort;
exports.rulesort = rulesort;