// Original work by Henrik Muehe (c) 2010
//
// CommonJS port by Mikola Lysenko 2013
//
//

// Issues:
//  no comment handling within strings
//  no string concatenation
//  no variable values yet

// Grammar implemented here:
//  bibtex -> (string | preamble | comment | entry)*;
//  string -> '@STRING' '{' key_equals_value '}';
//  preamble -> '@PREAMBLE' '{' value '}';
//  comment -> '@COMMENT' '{' value '}';
//  entry -> '@' key '{' key ',' key_value_list '}';
//  key_value_list -> key_equals_value (',' key_equals_value)*;
//  key_equals_value -> key '=' value;
//  value -> value_quotes | value_braces | key;
//  value_quotes -> '"' .*? '"'; // not quite
//  value_braces -> '{' .*? '"'; // not quite
function BibtexParser() {
  this.pos = 0;
  this.input = "";
  
  this.entries = {};
  this.comments = [];
  this.strings = {
      JAN: "January",
      FEB: "February",
      MAR: "March",      
      APR: "April",
      MAY: "May",
      JUN: "June",
      JUL: "July",
      AUG: "August",
      SEP: "September",
      OCT: "October",
      NOV: "November",
      DEC: "December"
  };
  this.currentKey = "";
  this.currentEntry = "";
  this.reversemappingTable = {
    "\\url"                           : "",       // strip 'url'
    "\\href"                          : "",       // strip 'href'
    "{\\textexclamdown}"              : "\u00A1", // INVERTED EXCLAMATION MARK
    "{\\textcent}"                    : "\u00A2", // CENT SIGN
    "{\\textsterling}"                : "\u00A3", // POUND SIGN
    "{\\textyen}"                     : "\u00A5", // YEN SIGN
    "{\\textbrokenbar}"               : "\u00A6", // BROKEN BAR
    "{\\textsection}"                 : "\u00A7", // SECTION SIGN
    "{\\textasciidieresis}"           : "\u00A8", // DIAERESIS
    "{\\textcopyright}"               : "\u00A9", // COPYRIGHT SIGN
    "{\\textordfeminine}"             : "\u00AA", // FEMININE ORDINAL INDICATOR
    "{\\guillemotleft}"               : "\u00AB", // LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    "{\\textlnot}"                    : "\u00AC", // NOT SIGN
    "{\\textregistered}"              : "\u00AE", // REGISTERED SIGN
    "{\\textasciimacron}"             : "\u00AF", // MACRON
    "{\\textdegree}"                  : "\u00B0", // DEGREE SIGN
    "{\\textpm}"                      : "\u00B1", // PLUS-MINUS SIGN
    "{\\texttwosuperior}"             : "\u00B2", // SUPERSCRIPT TWO
    "{\\textthreesuperior}"           : "\u00B3", // SUPERSCRIPT THREE
    "{\\textasciiacute}"              : "\u00B4", // ACUTE ACCENT
    "{\\textmu}"                      : "\u00B5", // MICRO SIGN
    "{\\textparagraph}"               : "\u00B6", // PILCROW SIGN
    "{\\textperiodcentered}"          : "\u00B7", // MIDDLE DOT
    "{\\c\\ }"                        : "\u00B8", // CEDILLA
    "{\\textonesuperior}"             : "\u00B9", // SUPERSCRIPT ONE
    "{\\textordmasculine}"            : "\u00BA", // MASCULINE ORDINAL INDICATOR
    "{\\guillemotright}"              : "\u00BB", // RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
    "{\\textonequarter}"              : "\u00BC", // VULGAR FRACTION ONE QUARTER
    "{\\textonehalf}"                 : "\u00BD", // VULGAR FRACTION ONE HALF
    "{\\textthreequarters}"           : "\u00BE", // VULGAR FRACTION THREE QUARTERS
    "{\\textquestiondown}"            : "\u00BF", // INVERTED QUESTION MARK
    "{\\AE}"                          : "\u00C6", // LATIN CAPITAL LETTER AE
    "{\\DH}"                          : "\u00D0", // LATIN CAPITAL LETTER ETH
    "{\\texttimes}"                   : "\u00D7", // MULTIPLICATION SIGN
    "{\\O}"                          :  "\u00D8", // LATIN SMALL LETTER O WITH STROKE
    "{\\TH}"                          : "\u00DE", // LATIN CAPITAL LETTER THORN
    "{\\ss}"                          : "\u00DF", // LATIN SMALL LETTER SHARP S
    "{\\ae}"                          : "\u00E6", // LATIN SMALL LETTER AE
    "{\\dh}"                          : "\u00F0", // LATIN SMALL LETTER ETH
    "{\\textdiv}"                     : "\u00F7", // DIVISION SIGN
    "{\\o}"                          : "\u00F8", // LATIN SMALL LETTER O WITH STROKE
    "{\\th}"                          : "\u00FE", // LATIN SMALL LETTER THORN
    "{\\i}"                           : "\u0131", // LATIN SMALL LETTER DOTLESS I
    //"'n"                              : "\u0149", // LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
    "{\\NG}"                          : "\u014A", // LATIN CAPITAL LETTER ENG
    "{\\ng}"                          : "\u014B", // LATIN SMALL LETTER ENG
    "{\\OE}"                          : "\u0152", // LATIN CAPITAL LIGATURE OE
    "{\\oe}"                          : "\u0153", // LATIN SMALL LIGATURE OE
    "{\\textasciicircum}"             : "\u02C6", // MODIFIER LETTER CIRCUMFLEX ACCENT
  //    "\\~{}"                           : "\u02DC", // SMALL TILDE
    "{\\textacutedbl}"                : "\u02DD", // DOUBLE ACUTE ACCENT
    
    //Greek Letters Courtesy of Spartanroc
    "$\\Gamma$" : "\u0393", // GREEK Gamma
    "$\\Delta$" : "\u0394", // GREEK Delta
    "$\\Theta$" : "\u0398", // GREEK Theta
    "$\\Lambda$" : "\u039B", // GREEK Lambda
    "$\\Xi$" : "\u039E", // GREEK Xi
    "$\\Pi$" : "\u03A0", // GREEK Pi
    "$\\Sigma$" : "\u03A3", // GREEK Sigma
    "$\\Phi$" : "\u03A6", // GREEK Phi
    "$\\Psi$" : "\u03A8", // GREEK Psi
    "$\\Omega$" : "\u03A9", // GREEK Omega
    "$\\alpha$" : "\u03B1", // GREEK alpha
    "$\\beta$" : "\u03B2", // GREEK beta
    "$\\gamma$" : "\u03B3", // GREEK gamma
    "$\\delta$" : "\u03B4", // GREEK delta
    "$\\varepsilon$": "\u03B5", // GREEK var-epsilon
    "$\\zeta$" : "\u03B6", // GREEK zeta
    "$\\eta$" : "\u03B7", // GREEK eta
    "$\\theta$" : "\u03B8", // GREEK theta
    "$\\iota$" : "\u03B9", // GREEK iota
    "$\\kappa$" : "\u03BA", // GREEK kappa
    "$\\lambda$" : "\u03BB", // GREEK lambda
    "$\\mu$" : "\u03BC", // GREEK mu
    "$\\nu$" : "\u03BD", // GREEK nu
    "$\\xi$" : "\u03BE", // GREEK xi
    "$\\pi$" : "\u03C0", // GREEK pi
    "$\\rho$" : "\u03C1", // GREEK rho
    "$\\varsigma$" : "\u03C2", // GREEK var-sigma
    "$\\sigma$" : "\u03C3", // GREEK sigma
    "$\\tau$" : "\u03C4", // GREEK tau
    "$\\upsilon$" : "\u03C5", // GREEK upsilon
    "$\\varphi$" : "\u03C6", // GREEK var-phi
    "$\\chi$" : "\u03C7", // GREEK chi
    "$\\psi$" : "\u03C8", // GREEK psi
    "$\\omega$" : "\u03C9", // GREEK omega
    "$\\vartheta$" : "\u03D1", // GREEK var-theta
    "$\\Upsilon$" : "\u03D2", // GREEK Upsilon
    "$\\phi$" : "\u03D5", // GREEK phi
    "$\\varpi$" : "\u03D6", // GREEK var-pi
    "$\\varrho$" : "\u03F1", // GREEK var-rho
    "$\\epsilon$" : "\u03F5", // GREEK epsilon
    //Greek letters end
    "{\\textendash}"                  : "\u2013", // EN DASH
    "{\\textemdash}"                  : "\u2014", // EM DASH
    "---"                             : "\u2014", // EM DASH
    "--"                              : "\u2013", // EN DASH
    "{\\textbardbl}"                  : "\u2016", // DOUBLE VERTICAL LINE
    "{\\textunderscore}"              : "\u2017", // DOUBLE LOW LINE
    "{\\textquoteleft}"               : "\u2018", // LEFT SINGLE QUOTATION MARK
    "{\\textquoteright}"              : "\u2019", // RIGHT SINGLE QUOTATION MARK
    "{\\quotesinglbase}"              : "\u201A", // SINGLE LOW-9 QUOTATION MARK
    "{\\textquotedblleft}"            : "\u201C", // LEFT DOUBLE QUOTATION MARK
    "{\\textquotedblright}"           : "\u201D", // RIGHT DOUBLE QUOTATION MARK
    "{\\quotedblbase}"                : "\u201E", // DOUBLE LOW-9 QUOTATION MARK
  //    "{\\quotedblbase}"                : "\u201F", // DOUBLE HIGH-REVERSED-9 QUOTATION MARK
    "{\\textdagger}"                  : "\u2020", // DAGGER
    "{\\textdaggerdbl}"               : "\u2021", // DOUBLE DAGGER
    "{\\textbullet}"                  : "\u2022", // BULLET
    "{\\textellipsis}"                : "\u2026", // HORIZONTAL ELLIPSIS
    "{\\textperthousand}"             : "\u2030", // PER MILLE SIGN
    "'''"                             : "\u2034", // TRIPLE PRIME
    "''"                              : "\u201D", // RIGHT DOUBLE QUOTATION MARK (could be a double prime)
    "``"                              : "\u201C", // LEFT DOUBLE QUOTATION MARK (could be a reversed double prime)
    "```"                             : "\u2037", // REVERSED TRIPLE PRIME
    "{\\guilsinglleft}"               : "\u2039", // SINGLE LEFT-POINTING ANGLE QUOTATION MARK
    "{\\guilsinglright}"              : "\u203A", // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
    "!!"                              : "\u203C", // DOUBLE EXCLAMATION MARK
    "{\\textfractionsolidus}"         : "\u2044", // FRACTION SLASH
    "?!"                              : "\u2048", // QUESTION EXCLAMATION MARK
    "!?"                              : "\u2049", // EXCLAMATION QUESTION MARK
    "$^{0}$"                          : "\u2070", // SUPERSCRIPT ZERO
    "$^{4}$"                          : "\u2074", // SUPERSCRIPT FOUR
    "$^{5}$"                          : "\u2075", // SUPERSCRIPT FIVE
    "$^{6}$"                          : "\u2076", // SUPERSCRIPT SIX
    "$^{7}$"                          : "\u2077", // SUPERSCRIPT SEVEN
    "$^{8}$"                          : "\u2078", // SUPERSCRIPT EIGHT
    "$^{9}$"                          : "\u2079", // SUPERSCRIPT NINE
    "$^{+}$"                          : "\u207A", // SUPERSCRIPT PLUS SIGN
    "$^{-}$"                          : "\u207B", // SUPERSCRIPT MINUS
    "$^{=}$"                          : "\u207C", // SUPERSCRIPT EQUALS SIGN
    "$^{(}$"                          : "\u207D", // SUPERSCRIPT LEFT PARENTHESIS
    "$^{)}$"                          : "\u207E", // SUPERSCRIPT RIGHT PARENTHESIS
    "$^{n}$"                          : "\u207F", // SUPERSCRIPT LATIN SMALL LETTER N
    "$_{0}$"                          : "\u2080", // SUBSCRIPT ZERO
    "$_{1}$"                          : "\u2081", // SUBSCRIPT ONE
    "$_{2}$"                          : "\u2082", // SUBSCRIPT TWO
    "$_{3}$"                          : "\u2083", // SUBSCRIPT THREE
    "$_{4}$"                          : "\u2084", // SUBSCRIPT FOUR
    "$_{5}$"                          : "\u2085", // SUBSCRIPT FIVE
    "$_{6}$"                          : "\u2086", // SUBSCRIPT SIX
    "$_{7}$"                          : "\u2087", // SUBSCRIPT SEVEN
    "$_{8}$"                          : "\u2088", // SUBSCRIPT EIGHT
    "$_{9}$"                          : "\u2089", // SUBSCRIPT NINE
    "$_{+}$"                          : "\u208A", // SUBSCRIPT PLUS SIGN
    "$_{-}$"                          : "\u208B", // SUBSCRIPT MINUS
    "$_{=}$"                          : "\u208C", // SUBSCRIPT EQUALS SIGN
    "$_{(}$"                          : "\u208D", // SUBSCRIPT LEFT PARENTHESIS
    "$_{)}$"                          : "\u208E", // SUBSCRIPT RIGHT PARENTHESIS
    "{\\texteuro}"                    : "\u20AC", // EURO SIGN
    //"a/c"                             : "\u2100", // ACCOUNT OF
    //"a/s"                             : "\u2101", // ADDRESSED TO THE SUBJECT
    "{\\textcelsius}"                 : "\u2103", // DEGREE CELSIUS
    //"c/o"                             : "\u2105", // CARE OF
    //"c/u"                             : "\u2106", // CADA UNA
    "{\\textnumero}"                  : "\u2116", // NUMERO SIGN
    "{\\textcircledP}"                : "\u2117", // SOUND RECORDING COPYRIGHT
    "{\\textservicemark}"             : "\u2120", // SERVICE MARK
    "{TEL}"                           : "\u2121", // TELEPHONE SIGN
    "{\\texttrademark}"               : "\u2122", // TRADE MARK SIGN
    "{\\textohm}"                     : "\u2126", // OHM SIGN
    "{\\textestimated}"               : "\u212E", // ESTIMATED SYMBOL
    
    /*" 1/3"                            : "\u2153", // VULGAR FRACTION ONE THIRD
    " 2/3"                            : "\u2154", // VULGAR FRACTION TWO THIRDS
    " 1/5"                            : "\u2155", // VULGAR FRACTION ONE FIFTH
    " 2/5"                            : "\u2156", // VULGAR FRACTION TWO FIFTHS
    " 3/5"                            : "\u2157", // VULGAR FRACTION THREE FIFTHS
    " 4/5"                            : "\u2158", // VULGAR FRACTION FOUR FIFTHS
    " 1/6"                            : "\u2159", // VULGAR FRACTION ONE SIXTH
    " 5/6"                            : "\u215A", // VULGAR FRACTION FIVE SIXTHS
    " 1/8"                            : "\u215B", // VULGAR FRACTION ONE EIGHTH
    " 3/8"                            : "\u215C", // VULGAR FRACTION THREE EIGHTHS
    " 5/8"                            : "\u215D", // VULGAR FRACTION FIVE EIGHTHS
    " 7/8"                            : "\u215E", // VULGAR FRACTION SEVEN EIGHTHS
    " 1/"                             : "\u215F", // FRACTION NUMERATOR ONE */
    
    "{\\textleftarrow}"               : "\u2190", // LEFTWARDS ARROW
    "{\\textuparrow}"                 : "\u2191", // UPWARDS ARROW
    "{\\textrightarrow}"              : "\u2192", // RIGHTWARDS ARROW
    "{\\textdownarrow}"               : "\u2193", // DOWNWARDS ARROW
    /*"<->"                             : "\u2194", // LEFT RIGHT ARROW
    "<="                              : "\u21D0", // LEFTWARDS DOUBLE ARROW
    "=>"                              : "\u21D2", // RIGHTWARDS DOUBLE ARROW
    "<=>"                             : "\u21D4", // LEFT RIGHT DOUBLE ARROW */
    "$\\infty$"                       : "\u221E", // INFINITY
    
    /*"||"                              : "\u2225", // PARALLEL TO
    "/="                              : "\u2260", // NOT EQUAL TO
    "<="                              : "\u2264", // LESS-THAN OR EQUAL TO
    ">="                              : "\u2265", // GREATER-THAN OR EQUAL TO
    "<<"                              : "\u226A", // MUCH LESS-THAN
    ">>"                              : "\u226B", // MUCH GREATER-THAN
    "(+)"                             : "\u2295", // CIRCLED PLUS
    "(-)"                             : "\u2296", // CIRCLED MINUS
    "(x)"                             : "\u2297", // CIRCLED TIMES
    "(/)"                             : "\u2298", // CIRCLED DIVISION SLASH
    "|-"                              : "\u22A2", // RIGHT TACK
    "-|"                              : "\u22A3", // LEFT TACK
    "|-"                              : "\u22A6", // ASSERTION
    "|="                              : "\u22A7", // MODELS
    "|="                              : "\u22A8", // TRUE
    "||-"                             : "\u22A9", // FORCES */
    
    "$\\#$"                           : "\u22D5", // EQUAL AND PARALLEL TO
    //"<<<"                             : "\u22D8", // VERY MUCH LESS-THAN
    //">>>"                             : "\u22D9", // VERY MUCH GREATER-THAN
    "{\\textlangle}"                  : "\u2329", // LEFT-POINTING ANGLE BRACKET
    "{\\textrangle}"                  : "\u232A", // RIGHT-POINTING ANGLE BRACKET
    "{\\textvisiblespace}"            : "\u2423", // OPEN BOX
    //"///"                             : "\u2425", // SYMBOL FOR DELETE FORM TWO
    "{\\textopenbullet}"              : "\u25E6", // WHITE BULLET
    //":-("                             : "\u2639", // WHITE FROWNING FACE
    //":-)"                             : "\u263A", // WHITE SMILING FACE
    //"(-: "                            : "\u263B", // BLACK SMILING FACE
    //    "$\\#$"                           : "\u266F", // MUSIC SHARP SIGN
    "$\\%<$"                          : "\u2701", // UPPER BLADE SCISSORS
    /*    "$\\%<$"                          : "\u2702", // BLACK SCISSORS
    "$\\%<$"                          : "\u2703", // LOWER BLADE SCISSORS
    "$\\%<$"                          : "\u2704", // WHITE SCISSORS */
    /* Derived accented characters */
    "{\\`A}"                          : "\u00C0", // LATIN CAPITAL LETTER A WITH GRAVE
    "{\\'A}"                          : "\u00C1", // LATIN CAPITAL LETTER A WITH ACUTE
    "{\\^A}"                          : "\u00C2", // LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    "{\\~A}"                          : "\u00C3", // LATIN CAPITAL LETTER A WITH TILDE
    "{\\\"A}"                         : "\u00C4", // LATIN CAPITAL LETTER A WITH DIAERESIS
    "{\\r A}"                          : "\u00C5", // LATIN CAPITAL LETTER A WITH RING ABOVE
    "{\\c C}"                          : "\u00C7", // LATIN CAPITAL LETTER C WITH CEDILLA
    "{\\`E}"                          : "\u00C8", // LATIN CAPITAL LETTER E WITH GRAVE
    "{\\'E}"                          : "\u00C9", // LATIN CAPITAL LETTER E WITH ACUTE
    "{\\^E}"                          : "\u00CA", // LATIN CAPITAL LETTER E WITH CIRCUMFLEX
    "{\\\"E}"                         : "\u00CB", // LATIN CAPITAL LETTER E WITH DIAERESIS
    "{\\`I}"                          : "\u00CC", // LATIN CAPITAL LETTER I WITH GRAVE
    "{\\'I}"                          : "\u00CD", // LATIN CAPITAL LETTER I WITH ACUTE
    "{\\^I}"                          : "\u00CE", // LATIN CAPITAL LETTER I WITH CIRCUMFLEX
    "{\\\"I}"                         : "\u00CF", // LATIN CAPITAL LETTER I WITH DIAERESIS
    "{\\~N}"                          : "\u00D1", // LATIN CAPITAL LETTER N WITH TILDE
    "{\\`O}"                          : "\u00D2", // LATIN CAPITAL LETTER O WITH GRAVE
    "{\\'O}"                          : "\u00D3", // LATIN CAPITAL LETTER O WITH ACUTE
    "{\\^O}"                          : "\u00D4", // LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    "{\\~O}"                          : "\u00D5", // LATIN CAPITAL LETTER O WITH TILDE
    "{\\\"O}"                         : "\u00D6", // LATIN CAPITAL LETTER O WITH DIAERESIS
    "{\\`U}"                          : "\u00D9", // LATIN CAPITAL LETTER U WITH GRAVE
    "{\\'U}"                          : "\u00DA", // LATIN CAPITAL LETTER U WITH ACUTE
    "{\\^U}"                          : "\u00DB", // LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    "{\\\"U}"                         : "\u00DC", // LATIN CAPITAL LETTER U WITH DIAERESIS
    "{\\'Y}"                          : "\u00DD", // LATIN CAPITAL LETTER Y WITH ACUTE
    "{\\`a}"                          : "\u00E0", // LATIN SMALL LETTER A WITH GRAVE
    "{\\'a}"                          : "\u00E1", // LATIN SMALL LETTER A WITH ACUTE
    "{\\^a}"                          : "\u00E2", // LATIN SMALL LETTER A WITH CIRCUMFLEX
    "{\\~a}"                          : "\u00E3", // LATIN SMALL LETTER A WITH TILDE
    "{\\\"a}"                         : "\u00E4", // LATIN SMALL LETTER A WITH DIAERESIS
    "{\\r a}"                          : "\u00E5", // LATIN SMALL LETTER A WITH RING ABOVE
    "{\\c c}"                          : "\u00E7", // LATIN SMALL LETTER C WITH CEDILLA
    "{\\`e}"                          : "\u00E8", // LATIN SMALL LETTER E WITH GRAVE
    "{\\'e}"                          : "\u00E9", // LATIN SMALL LETTER E WITH ACUTE
    "{\\^e}"                          : "\u00EA", // LATIN SMALL LETTER E WITH CIRCUMFLEX
    "{\\\"e}"                         : "\u00EB", // LATIN SMALL LETTER E WITH DIAERESIS
    "{\\`i}"                          : "\u00EC", // LATIN SMALL LETTER I WITH GRAVE
    "{\\'i}"                          : "\u00ED", // LATIN SMALL LETTER I WITH ACUTE
    "{\\^i}"                          : "\u00EE", // LATIN SMALL LETTER I WITH CIRCUMFLEX
    "{\\\"i}"                         : "\u00EF", // LATIN SMALL LETTER I WITH DIAERESIS
    "{\\~n}"                          : "\u00F1", // LATIN SMALL LETTER N WITH TILDE
    "{\\`o}"                          : "\u00F2", // LATIN SMALL LETTER O WITH GRAVE
    "{\\'o}"                          : "\u00F3", // LATIN SMALL LETTER O WITH ACUTE
    "{\\^o}"                          : "\u00F4", // LATIN SMALL LETTER O WITH CIRCUMFLEX
    "{\\~o}"                          : "\u00F5", // LATIN SMALL LETTER O WITH TILDE
    "{\\\"o}"                         : "\u00F6", // LATIN SMALL LETTER O WITH DIAERESIS
    "{\\`u}"                          : "\u00F9", // LATIN SMALL LETTER U WITH GRAVE
    "{\\'u}"                          : "\u00FA", // LATIN SMALL LETTER U WITH ACUTE
    "{\\^u}"                          : "\u00FB", // LATIN SMALL LETTER U WITH CIRCUMFLEX
    "{\\\"u}"                         : "\u00FC", // LATIN SMALL LETTER U WITH DIAERESIS
    "{\\'y}"                          : "\u00FD", // LATIN SMALL LETTER Y WITH ACUTE
    "{\\\"y}"                         : "\u00FF", // LATIN SMALL LETTER Y WITH DIAERESIS
    "{\\=A}"                          : "\u0100", // LATIN CAPITAL LETTER A WITH MACRON
    "{\\=a}"                          : "\u0101", // LATIN SMALL LETTER A WITH MACRON
    "{\\u A}"                          : "\u0102", // LATIN CAPITAL LETTER A WITH BREVE
    "{\\u a}"                          : "\u0103", // LATIN SMALL LETTER A WITH BREVE
    "{\\k A}"                          : "\u0104", // LATIN CAPITAL LETTER A WITH OGONEK
    "{\\k a}"                          : "\u0105", // LATIN SMALL LETTER A WITH OGONEK
    "{\\'C}"                          : "\u0106", // LATIN CAPITAL LETTER C WITH ACUTE
    "{\\'c}"                          : "\u0107", // LATIN SMALL LETTER C WITH ACUTE
    "{\\^C}"                          : "\u0108", // LATIN CAPITAL LETTER C WITH CIRCUMFLEX
    "{\\^c}"                          : "\u0109", // LATIN SMALL LETTER C WITH CIRCUMFLEX
    "{\\.C}"                          : "\u010A", // LATIN CAPITAL LETTER C WITH DOT ABOVE
    "{\\.c}"                          : "\u010B", // LATIN SMALL LETTER C WITH DOT ABOVE
    "{\\v C}"                          : "\u010C", // LATIN CAPITAL LETTER C WITH CARON
    "{\\v c}"                          : "\u010D", // LATIN SMALL LETTER C WITH CARON
    "{\\v D}"                          : "\u010E", // LATIN CAPITAL LETTER D WITH CARON
    "{\\v d}"                          : "\u010F", // LATIN SMALL LETTER D WITH CARON
    "{\\=E}"                          : "\u0112", // LATIN CAPITAL LETTER E WITH MACRON
    "{\\=e}"                          : "\u0113", // LATIN SMALL LETTER E WITH MACRON
    "{\\u E}"                          : "\u0114", // LATIN CAPITAL LETTER E WITH BREVE
    "{\\u e}"                          : "\u0115", // LATIN SMALL LETTER E WITH BREVE
    "{\\.E}"                          : "\u0116", // LATIN CAPITAL LETTER E WITH DOT ABOVE
    "{\\.e}"                          : "\u0117", // LATIN SMALL LETTER E WITH DOT ABOVE
    "{\\k E}"                          : "\u0118", // LATIN CAPITAL LETTER E WITH OGONEK
    "{\\k e}"                          : "\u0119", // LATIN SMALL LETTER E WITH OGONEK
    "{\\v E}"                          : "\u011A", // LATIN CAPITAL LETTER E WITH CARON
    "{\\v e}"                          : "\u011B", // LATIN SMALL LETTER E WITH CARON
    "{\\^G}"                          : "\u011C", // LATIN CAPITAL LETTER G WITH CIRCUMFLEX
    "{\\^g}"                          : "\u011D", // LATIN SMALL LETTER G WITH CIRCUMFLEX
    "{\\u G}"                          : "\u011E", // LATIN CAPITAL LETTER G WITH BREVE
    "{\\u g}"                          : "\u011F", // LATIN SMALL LETTER G WITH BREVE
    "{\\.G}"                          : "\u0120", // LATIN CAPITAL LETTER G WITH DOT ABOVE
    "{\\.g}"                          : "\u0121", // LATIN SMALL LETTER G WITH DOT ABOVE
    "{\\c G}"                          : "\u0122", // LATIN CAPITAL LETTER G WITH CEDILLA
    "{\\c g}"                          : "\u0123", // LATIN SMALL LETTER G WITH CEDILLA
    "{\\^H}"                          : "\u0124", // LATIN CAPITAL LETTER H WITH CIRCUMFLEX
    "{\\^h}"                          : "\u0125", // LATIN SMALL LETTER H WITH CIRCUMFLEX
    "{\\~I}"                          : "\u0128", // LATIN CAPITAL LETTER I WITH TILDE
    "{\\~i}"                          : "\u0129", // LATIN SMALL LETTER I WITH TILDE
    "{\\=I}"                          : "\u012A", // LATIN CAPITAL LETTER I WITH MACRON
    "{\\=i}"                          : "\u012B", // LATIN SMALL LETTER I WITH MACRON
    "{\\=\\i}"                        : "\u012B", // LATIN SMALL LETTER I WITH MACRON
    "{\\u I}"                          : "\u012C", // LATIN CAPITAL LETTER I WITH BREVE
    "{\\u i}"                          : "\u012D", // LATIN SMALL LETTER I WITH BREVE
    "{\\k I}"                          : "\u012E", // LATIN CAPITAL LETTER I WITH OGONEK
    "{\\k i}"                          : "\u012F", // LATIN SMALL LETTER I WITH OGONEK
    "{\\.I}"                          : "\u0130", // LATIN CAPITAL LETTER I WITH DOT ABOVE
    "{\\^J}"                          : "\u0134", // LATIN CAPITAL LETTER J WITH CIRCUMFLEX
    "{\\^j}"                          : "\u0135", // LATIN SMALL LETTER J WITH CIRCUMFLEX
    "{\\c K}"                          : "\u0136", // LATIN CAPITAL LETTER K WITH CEDILLA
    "{\\c k}"                          : "\u0137", // LATIN SMALL LETTER K WITH CEDILLA
    "{\\'L}"                          : "\u0139", // LATIN CAPITAL LETTER L WITH ACUTE
    "{\\'l}"                          : "\u013A", // LATIN SMALL LETTER L WITH ACUTE
    "{\\c L}"                          : "\u013B", // LATIN CAPITAL LETTER L WITH CEDILLA
    "{\\c l}"                          : "\u013C", // LATIN SMALL LETTER L WITH CEDILLA
    "{\\v L}"                          : "\u013D", // LATIN CAPITAL LETTER L WITH CARON
    "{\\v l}"                          : "\u013E", // LATIN SMALL LETTER L WITH CARON
    "{\\L }"                           : "\u0141", //LATIN CAPITAL LETTER L WITH STROKE
    "{\\l }"                           : "\u0142", //LATIN SMALL LETTER L WITH STROKE
    "{\\'N}"                          : "\u0143", // LATIN CAPITAL LETTER N WITH ACUTE
    "{\\'n}"                          : "\u0144", // LATIN SMALL LETTER N WITH ACUTE
    "{\\c N}"                          : "\u0145", // LATIN CAPITAL LETTER N WITH CEDILLA
    "{\\c n}"                          : "\u0146", // LATIN SMALL LETTER N WITH CEDILLA
    "{\\v N}"                          : "\u0147", // LATIN CAPITAL LETTER N WITH CARON
    "{\\v n}"                          : "\u0148", // LATIN SMALL LETTER N WITH CARON
    "{\\=O}"                          : "\u014C", // LATIN CAPITAL LETTER O WITH MACRON
    "{\\=o}"                          : "\u014D", // LATIN SMALL LETTER O WITH MACRON
    "{\\u O}"                          : "\u014E", // LATIN CAPITAL LETTER O WITH BREVE
    "{\\u o}"                          : "\u014F", // LATIN SMALL LETTER O WITH BREVE
    "{\\H O}"                          : "\u0150", // LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    "{\\H o}"                          : "\u0151", // LATIN SMALL LETTER O WITH DOUBLE ACUTE
    "{\\'R}"                          : "\u0154", // LATIN CAPITAL LETTER R WITH ACUTE
    "{\\'r}"                          : "\u0155", // LATIN SMALL LETTER R WITH ACUTE
    "{\\c R}"                          : "\u0156", // LATIN CAPITAL LETTER R WITH CEDILLA
    "{\\c r}"                          : "\u0157", // LATIN SMALL LETTER R WITH CEDILLA
    "{\\v R}"                          : "\u0158", // LATIN CAPITAL LETTER R WITH CARON
    "{\\v r}"                          : "\u0159", // LATIN SMALL LETTER R WITH CARON
    "{\\'S}"                          : "\u015A", // LATIN CAPITAL LETTER S WITH ACUTE
    "{\\'s}"                          : "\u015B", // LATIN SMALL LETTER S WITH ACUTE
    "{\\^S}"                          : "\u015C", // LATIN CAPITAL LETTER S WITH CIRCUMFLEX
    "{\\^s}"                          : "\u015D", // LATIN SMALL LETTER S WITH CIRCUMFLEX
    "{\\c S}"                          : "\u015E", // LATIN CAPITAL LETTER S WITH CEDILLA
    "{\\c s}"                          : "\u015F", // LATIN SMALL LETTER S WITH CEDILLA
    "{\\v S}"                          : "\u0160", // LATIN CAPITAL LETTER S WITH CARON
    "{\\v s}"                          : "\u0161", // LATIN SMALL LETTER S WITH CARON
    "{\\c T}"                          : "\u0162", // LATIN CAPITAL LETTER T WITH CEDILLA
    "{\\c t}"                          : "\u0163", // LATIN SMALL LETTER T WITH CEDILLA
    "{\\v T}"                          : "\u0164", // LATIN CAPITAL LETTER T WITH CARON
    "{\\v t}"                          : "\u0165", // LATIN SMALL LETTER T WITH CARON
    "{\\~U}"                          : "\u0168", // LATIN CAPITAL LETTER U WITH TILDE
    "{\\~u}"                          : "\u0169", // LATIN SMALL LETTER U WITH TILDE
    "{\\=U}"                          : "\u016A", // LATIN CAPITAL LETTER U WITH MACRON
    "{\\=u}"                          : "\u016B", // LATIN SMALL LETTER U WITH MACRON
    "{\\u U}"                          : "\u016C", // LATIN CAPITAL LETTER U WITH BREVE
    "{\\u u}"                          : "\u016D", // LATIN SMALL LETTER U WITH BREVE
    "{\\H U}"                          : "\u0170", // LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
    "{\\H u}"                          : "\u0171", // LATIN SMALL LETTER U WITH DOUBLE ACUTE
    "{\\k U}"                          : "\u0172", // LATIN CAPITAL LETTER U WITH OGONEK
    "{\\k u}"                          : "\u0173", // LATIN SMALL LETTER U WITH OGONEK
    "{\\^W}"                          : "\u0174", // LATIN CAPITAL LETTER W WITH CIRCUMFLEX
    "{\\^w}"                          : "\u0175", // LATIN SMALL LETTER W WITH CIRCUMFLEX
    "{\\^Y}"                          : "\u0176", // LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    "{\\^y}"                          : "\u0177", // LATIN SMALL LETTER Y WITH CIRCUMFLEX
    "{\\\"Y}"                         : "\u0178", // LATIN CAPITAL LETTER Y WITH DIAERESIS
    "{\\'Z}"                          : "\u0179", // LATIN CAPITAL LETTER Z WITH ACUTE
    "{\\'z}"                          : "\u017A", // LATIN SMALL LETTER Z WITH ACUTE
    "{\\.Z}"                          : "\u017B", // LATIN CAPITAL LETTER Z WITH DOT ABOVE
    "{\\.z}"                          : "\u017C", // LATIN SMALL LETTER Z WITH DOT ABOVE
    "{\\v Z}"                          : "\u017D", // LATIN CAPITAL LETTER Z WITH CARON
    "{\\v z}"                          : "\u017E", // LATIN SMALL LETTER Z WITH CARON
    "{\\v A}"                          : "\u01CD", // LATIN CAPITAL LETTER A WITH CARON
    "{\\v a}"                          : "\u01CE", // LATIN SMALL LETTER A WITH CARON
    "{\\v I}"                          : "\u01CF", // LATIN CAPITAL LETTER I WITH CARON
    "{\\v i}"                          : "\u01D0", // LATIN SMALL LETTER I WITH CARON
    "{\\v O}"                          : "\u01D1", // LATIN CAPITAL LETTER O WITH CARON
    "{\\v o}"                          : "\u01D2", // LATIN SMALL LETTER O WITH CARON
    "{\\v U}"                          : "\u01D3", // LATIN CAPITAL LETTER U WITH CARON
    "{\\v u}"                          : "\u01D4", // LATIN SMALL LETTER U WITH CARON
    "{\\v G}"                          : "\u01E6", // LATIN CAPITAL LETTER G WITH CARON
    "{\\v g}"                          : "\u01E7", // LATIN SMALL LETTER G WITH CARON
    "{\\v K}"                          : "\u01E8", // LATIN CAPITAL LETTER K WITH CARON
    "{\\v k}"                          : "\u01E9", // LATIN SMALL LETTER K WITH CARON
    "{\\k O}"                          : "\u01EA", // LATIN CAPITAL LETTER O WITH OGONEK
    "{\\k o}"                          : "\u01EB", // LATIN SMALL LETTER O WITH OGONEK
    "{\\v j}"                          : "\u01F0", // LATIN SMALL LETTER J WITH CARON
    "{\\'G}"                          : "\u01F4", // LATIN CAPITAL LETTER G WITH ACUTE
    "{\\'g}"                          : "\u01F5", // LATIN SMALL LETTER G WITH ACUTE
    "{\\.B}"                          : "\u1E02", // LATIN CAPITAL LETTER B WITH DOT ABOVE
    "{\\.b}"                          : "\u1E03", // LATIN SMALL LETTER B WITH DOT ABOVE
    "{\\d B}"                          : "\u1E04", // LATIN CAPITAL LETTER B WITH DOT BELOW
    "{\\d b}"                          : "\u1E05", // LATIN SMALL LETTER B WITH DOT BELOW
    "{\\b B}"                          : "\u1E06", // LATIN CAPITAL LETTER B WITH LINE BELOW
    "{\\b b}"                          : "\u1E07", // LATIN SMALL LETTER B WITH LINE BELOW
    "{\\.D}"                          : "\u1E0A", // LATIN CAPITAL LETTER D WITH DOT ABOVE
    "{\\.d}"                          : "\u1E0B", // LATIN SMALL LETTER D WITH DOT ABOVE
    "{\\d D}"                          : "\u1E0C", // LATIN CAPITAL LETTER D WITH DOT BELOW
    "{\\d d}"                          : "\u1E0D", // LATIN SMALL LETTER D WITH DOT BELOW
    "{\\b D}"                          : "\u1E0E", // LATIN CAPITAL LETTER D WITH LINE BELOW
    "{\\b d}"                          : "\u1E0F", // LATIN SMALL LETTER D WITH LINE BELOW
    "{\\c D}"                          : "\u1E10", // LATIN CAPITAL LETTER D WITH CEDILLA
    "{\\c d}"                          : "\u1E11", // LATIN SMALL LETTER D WITH CEDILLA
    "{\\.F}"                          : "\u1E1E", // LATIN CAPITAL LETTER F WITH DOT ABOVE
    "{\\.f}"                          : "\u1E1F", // LATIN SMALL LETTER F WITH DOT ABOVE
    "{\\=G}"                          : "\u1E20", // LATIN CAPITAL LETTER G WITH MACRON
    "{\\=g}"                          : "\u1E21", // LATIN SMALL LETTER G WITH MACRON
    "{\\.H}"                          : "\u1E22", // LATIN CAPITAL LETTER H WITH DOT ABOVE
    "{\\.h}"                          : "\u1E23", // LATIN SMALL LETTER H WITH DOT ABOVE
    "{\\d H}"                          : "\u1E24", // LATIN CAPITAL LETTER H WITH DOT BELOW
    "{\\d h}"                          : "\u1E25", // LATIN SMALL LETTER H WITH DOT BELOW
    "{\\\"H}"                         : "\u1E26", // LATIN CAPITAL LETTER H WITH DIAERESIS
    "{\\\"h}"                         : "\u1E27", // LATIN SMALL LETTER H WITH DIAERESIS
    "{\\c H}"                          : "\u1E28", // LATIN CAPITAL LETTER H WITH CEDILLA
    "{\\c h}"                          : "\u1E29", // LATIN SMALL LETTER H WITH CEDILLA
    "{\\'K}"                          : "\u1E30", // LATIN CAPITAL LETTER K WITH ACUTE
    "{\\'k}"                          : "\u1E31", // LATIN SMALL LETTER K WITH ACUTE
    "{\\d K}"                          : "\u1E32", // LATIN CAPITAL LETTER K WITH DOT BELOW
    "{\\d k}"                          : "\u1E33", // LATIN SMALL LETTER K WITH DOT BELOW
    "{\\b K}"                          : "\u1E34", // LATIN CAPITAL LETTER K WITH LINE BELOW
    "{\\b k}"                          : "\u1E35", // LATIN SMALL LETTER K WITH LINE BELOW
    "{\\d L}"                          : "\u1E36", // LATIN CAPITAL LETTER L WITH DOT BELOW
    "{\\d l}"                          : "\u1E37", // LATIN SMALL LETTER L WITH DOT BELOW
    "{\\b L}"                          : "\u1E3A", // LATIN CAPITAL LETTER L WITH LINE BELOW
    "{\\b l}"                          : "\u1E3B", // LATIN SMALL LETTER L WITH LINE BELOW
    "{\\'M}"                          : "\u1E3E", // LATIN CAPITAL LETTER M WITH ACUTE
    "{\\'m}"                          : "\u1E3F", // LATIN SMALL LETTER M WITH ACUTE
    "{\\.M}"                          : "\u1E40", // LATIN CAPITAL LETTER M WITH DOT ABOVE
    "{\\.m}"                          : "\u1E41", // LATIN SMALL LETTER M WITH DOT ABOVE
    "{\\d M}"                          : "\u1E42", // LATIN CAPITAL LETTER M WITH DOT BELOW
    "{\\d m}"                          : "\u1E43", // LATIN SMALL LETTER M WITH DOT BELOW
    "{\\.N}"                          : "\u1E44", // LATIN CAPITAL LETTER N WITH DOT ABOVE
    "{\\.n}"                          : "\u1E45", // LATIN SMALL LETTER N WITH DOT ABOVE
    "{\\d N}"                          : "\u1E46", // LATIN CAPITAL LETTER N WITH DOT BELOW
    "{\\d n}"                          : "\u1E47", // LATIN SMALL LETTER N WITH DOT BELOW
    "{\\b N}"                          : "\u1E48", // LATIN CAPITAL LETTER N WITH LINE BELOW
    "{\\b n}"                          : "\u1E49", // LATIN SMALL LETTER N WITH LINE BELOW
    "{\\'P}"                          : "\u1E54", // LATIN CAPITAL LETTER P WITH ACUTE
    "{\\'p}"                          : "\u1E55", // LATIN SMALL LETTER P WITH ACUTE
    "{\\.P}"                          : "\u1E56", // LATIN CAPITAL LETTER P WITH DOT ABOVE
    "{\\.p}"                          : "\u1E57", // LATIN SMALL LETTER P WITH DOT ABOVE
    "{\\.R}"                          : "\u1E58", // LATIN CAPITAL LETTER R WITH DOT ABOVE
    "{\\.r}"                          : "\u1E59", // LATIN SMALL LETTER R WITH DOT ABOVE
    "{\\d R}"                          : "\u1E5A", // LATIN CAPITAL LETTER R WITH DOT BELOW
    "{\\d r}"                          : "\u1E5B", // LATIN SMALL LETTER R WITH DOT BELOW
    "{\\b R}"                          : "\u1E5E", // LATIN CAPITAL LETTER R WITH LINE BELOW
    "{\\b r}"                          : "\u1E5F", // LATIN SMALL LETTER R WITH LINE BELOW
    "{\\.S}"                          : "\u1E60", // LATIN CAPITAL LETTER S WITH DOT ABOVE
    "{\\.s}"                          : "\u1E61", // LATIN SMALL LETTER S WITH DOT ABOVE
    "{\\d S}"                          : "\u1E62", // LATIN CAPITAL LETTER S WITH DOT BELOW
    "{\\d s}"                          : "\u1E63", // LATIN SMALL LETTER S WITH DOT BELOW
    "{\\.T}"                          : "\u1E6A", // LATIN CAPITAL LETTER T WITH DOT ABOVE
    "{\\.t}"                          : "\u1E6B", // LATIN SMALL LETTER T WITH DOT ABOVE
    "{\\d T}"                          : "\u1E6C", // LATIN CAPITAL LETTER T WITH DOT BELOW
    "{\\d t}"                          : "\u1E6D", // LATIN SMALL LETTER T WITH DOT BELOW
    "{\\b T}"                          : "\u1E6E", // LATIN CAPITAL LETTER T WITH LINE BELOW
    "{\\b t}"                          : "\u1E6F", // LATIN SMALL LETTER T WITH LINE BELOW
    "{\\~V}"                          : "\u1E7C", // LATIN CAPITAL LETTER V WITH TILDE
    "{\\~v}"                          : "\u1E7D", // LATIN SMALL LETTER V WITH TILDE
    "{\\d V}"                          : "\u1E7E", // LATIN CAPITAL LETTER V WITH DOT BELOW
    "{\\d v}"                          : "\u1E7F", // LATIN SMALL LETTER V WITH DOT BELOW
    "{\\`W}"                          : "\u1E80", // LATIN CAPITAL LETTER W WITH GRAVE
    "{\\`w}"                          : "\u1E81", // LATIN SMALL LETTER W WITH GRAVE
    "{\\'W}"                          : "\u1E82", // LATIN CAPITAL LETTER W WITH ACUTE
    "{\\'w}"                          : "\u1E83", // LATIN SMALL LETTER W WITH ACUTE
    "{\\\"W}"                         : "\u1E84", // LATIN CAPITAL LETTER W WITH DIAERESIS
    "{\\\"w}"                         : "\u1E85", // LATIN SMALL LETTER W WITH DIAERESIS
    "{\\.W}"                          : "\u1E86", // LATIN CAPITAL LETTER W WITH DOT ABOVE
    "{\\.w}"                          : "\u1E87", // LATIN SMALL LETTER W WITH DOT ABOVE
    "{\\d W}"                          : "\u1E88", // LATIN CAPITAL LETTER W WITH DOT BELOW
    "{\\d w}"                          : "\u1E89", // LATIN SMALL LETTER W WITH DOT BELOW
    "{\\.X}"                          : "\u1E8A", // LATIN CAPITAL LETTER X WITH DOT ABOVE
    "{\\.x}"                          : "\u1E8B", // LATIN SMALL LETTER X WITH DOT ABOVE
    "{\\\"X}"                         : "\u1E8C", // LATIN CAPITAL LETTER X WITH DIAERESIS
    "{\\\"x}"                         : "\u1E8D", // LATIN SMALL LETTER X WITH DIAERESIS
    "{\\.Y}"                          : "\u1E8E", // LATIN CAPITAL LETTER Y WITH DOT ABOVE
    "{\\.y}"                          : "\u1E8F", // LATIN SMALL LETTER Y WITH DOT ABOVE
    "{\\^Z}"                          : "\u1E90", // LATIN CAPITAL LETTER Z WITH CIRCUMFLEX
    "{\\^z}"                          : "\u1E91", // LATIN SMALL LETTER Z WITH CIRCUMFLEX
    "{\\d Z}"                          : "\u1E92", // LATIN CAPITAL LETTER Z WITH DOT BELOW
    "{\\d z}"                          : "\u1E93", // LATIN SMALL LETTER Z WITH DOT BELOW
    "{\\b Z}"                          : "\u1E94", // LATIN CAPITAL LETTER Z WITH LINE BELOW
    "{\\b z}"                          : "\u1E95", // LATIN SMALL LETTER Z WITH LINE BELOW
    "{\\b h}"                          : "\u1E96", // LATIN SMALL LETTER H WITH LINE BELOW
    "{\\\"t}"                         : "\u1E97", // LATIN SMALL LETTER T WITH DIAERESIS
    "{\\d A}"                          : "\u1EA0", // LATIN CAPITAL LETTER A WITH DOT BELOW
    "{\\d a}"                          : "\u1EA1", // LATIN SMALL LETTER A WITH DOT BELOW
    "{\\d E}"                          : "\u1EB8", // LATIN CAPITAL LETTER E WITH DOT BELOW
    "{\\d e}"                          : "\u1EB9", // LATIN SMALL LETTER E WITH DOT BELOW
    "{\\~E}"                          : "\u1EBC", // LATIN CAPITAL LETTER E WITH TILDE
    "{\\~e}"                          : "\u1EBD", // LATIN SMALL LETTER E WITH TILDE
    "{\\d I}"                          : "\u1ECA", // LATIN CAPITAL LETTER I WITH DOT BELOW
    "{\\d i}"                          : "\u1ECB", // LATIN SMALL LETTER I WITH DOT BELOW
    "{\\d O}"                          : "\u1ECC", // LATIN CAPITAL LETTER O WITH DOT BELOW
    "{\\d o}"                          : "\u1ECD", // LATIN SMALL LETTER O WITH DOT BELOW
    "{\\d U}"                          : "\u1EE4", // LATIN CAPITAL LETTER U WITH DOT BELOW
    "{\\d u}"                          : "\u1EE5", // LATIN SMALL LETTER U WITH DOT BELOW
    "{\\`Y}"                          : "\u1EF2", // LATIN CAPITAL LETTER Y WITH GRAVE
    "{\\`y}"                          : "\u1EF3", // LATIN SMALL LETTER Y WITH GRAVE
    "{\\d Y}"                          : "\u1EF4", // LATIN CAPITAL LETTER Y WITH DOT BELOW
    "{\\d y}"                          : "\u1EF5", // LATIN SMALL LETTER Y WITH DOT BELOW
    "{\\~Y}"                          : "\u1EF8", // LATIN CAPITAL LETTER Y WITH TILDE
    "{\\~y}"                          : "\u1EF9", // LATIN SMALL LETTER Y WITH TILDE
    "{\\~}"                           : "\u223C", // TILDE OPERATOR
    "~"                               : "\u00A0" // NO-BREAK SPACE
  };
  

  this.setInput = function(t) {
    this.input = t;
  }
  
  this.getEntries = function() {
      return this.entries;
  }

  this.isWhitespace = function(s) {
    return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
  }

  this.match = function(s) {
    this.skipWhitespace();
    if (this.input.substring(this.pos, this.pos+s.length) == s) {
      this.pos += s.length;
    } else {
      throw "Token mismatch, expected " + s + ", found " + this.input.substring(this.pos);
    }
    this.skipWhitespace();
  }

  this.tryMatch = function(s) {
    this.skipWhitespace();
    if (this.input.substring(this.pos, this.pos+s.length) == s) {
      return true;
    } else {
      return false;
    }
    this.skipWhitespace();
  }

  this.skipWhitespace = function() {
    while (this.isWhitespace(this.input[this.pos])) {
      this.pos++;
    }
    if (this.input[this.pos] == "%") {
      while(this.input[this.pos] != "\n") {
        this.pos++;
      }
      this.skipWhitespace();
    }
  }

  this.value_braces = function() {
    var bracecount = 0;
    this.match("{");
    var start = this.pos;
    while(true) {
      if (this.input[this.pos] == '}' && this.input[this.pos-1] != '\\') {
        if (bracecount > 0) {
          bracecount--;
        } else {
          var end = this.pos;
          this.match("}");
          return this.input.substring(start, end);
        }
      } else if (this.input[this.pos] == '{') {
        bracecount++;
      } else if (this.pos == this.input.length-1) {
        throw "Unterminated value";
      }
      this.pos++;
    }
  }

  this.value_double_braces = function() {
    var bracecount = 0;
    this.match("{{");
    var start = this.pos;
    while(true) {
      if (this.input[this.pos] == '}' && this.input[this.pos+1] == '}' && this.input[this.pos-1] != '\\') {
        if (bracecount > 0) {
          bracecount--;
        } else {
          var end = this.pos;
          this.match("}}");
          return this.input.substring(start, end);
        }
      } else if (this.input[this.pos] == '{' && this.input[this.pos+1] == '{') {
        bracecount++;
      } else if (this.pos == this.input.length-1) {
        throw "Unterminated value";
      }
      this.pos++;
    }
  }

  this.value_quotes = function() {
    this.match('"');
    var start = this.pos;
    while(true) {
      if (this.input[this.pos] == '"' && this.input[this.pos-1] != '\\') {
          var end = this.pos;
          this.match('"');
          return this.input.substring(start, end);
      } else if (this.pos == this.input.length-1) {
        throw "Unterminated value:" + this.input.substring(start);
      }
      this.pos++;
    }
  }
  
  this.replaceLatexCaracters = function(value) {
    for (var mapped in this.reversemappingTable) { // really really slow!
      var unicode = this.reversemappingTable[mapped];
      while(value.indexOf(mapped) !== -1) {
        value = value.replace(mapped, unicode);
      }
      mapped = mapped.replace(/[{}]/g, "");
      while(value.indexOf(mapped) !== -1) {
        //Z.debug(value)
        value = value.replace(mapped, unicode);
      }
    }
    return value;
  }

  this.single_value = function() {
    var start = this.pos;
    
    if (this.tryMatch("{{")) {
      return this.replaceLatexCaracters(this.value_double_braces());
    } else if (this.tryMatch("{")) {
      return this.replaceLatexCaracters(this.value_braces());
    } else if (this.tryMatch('"')) {
      return this.replaceLatexCaracters(this.value_quotes());
    } else {
      var k = this.key();
      if (this.strings[k.toUpperCase()]) {
        return this.strings[k.toUpperCase()];
      } else if (k.match("^[0-9]+$")) {
        return k;
      } else {
        throw "Value expected:" + this.input.substring(start);
      }
    }
  }
  
  this.value = function() {
    var values = [];
    values.push(this.single_value());
    while (this.tryMatch("#")) {
      this.match("#");
      values.push(this.single_value());
    }
    return values.join("");
  }

  this.key = function() {
    var start = this.pos;
    while(true) {
      if (this.pos == this.input.length) {
        throw "Runaway key";
      }
    
      if (this.input[this.pos].match("[a-zA-Z0-9_:\\./-]")) {
        this.pos++
      } else {
        return this.input.substring(start, this.pos).toLowerCase();
      }
    }
  }

  this.key_equals_value = function() {
    var key = this.key();
    if (this.tryMatch("=")) {
      this.match("=");
      var val = this.value();
      return [ key, val ];
    } else {
      throw "... = value expected, equals sign missing:" + this.input.substring(this.pos);
    }
  }

  this.key_value_list = function() {
    var kv = this.key_equals_value();
    this.entries[this.currentEntry][kv[0]] = kv[1];
    while (this.tryMatch(",")) {
      this.match(",");
      // fixes problems with commas at the end of a list
      if (this.tryMatch("}")) {
        break;
      }
      kv = this.key_equals_value();
      this.entries[this.currentEntry][kv[0]] = kv[1];
    }
  }

  this.entry_body = function(d) {
    this.currentEntry = this.key();
    this.entries[this.currentEntry] = { entryType: d.substring(1) };
    this.match(",");
    this.key_value_list();
  }

  this.directive = function () {
    this.match("@");
    return "@"+this.key();
  }

  this.string = function () {
    var kv = this.key_equals_value();
    this.strings[kv[0].toLowerCase()] = kv[1];
  }

  this.preamble = function() {
    this.value();
  }

  this.comment = function() {
    var start = this.pos;
    while(true) {
      if (this.pos == this.input.length) {
        throw "Runaway comment";
      }
    
      if (this.input[this.pos] != '}') {
        this.pos++
      } else {
        this.comments.push(this.input.substring(start, this.pos));
        return;
      }
    }
  }

  this.entry = function(d) {
    this.entry_body(d);
  }

  this.bibtex = function() {
    while(this.tryMatch("@")) {
      var d = this.directive().toLowerCase();
      this.match("{");
      if (d == "@STRING") {
        this.string();
      } else if (d == "@PREAMBLE") {
        this.preamble();
      } else if (d == "@COMMENT") {
        this.comment();
      } else {
        this.entry(d);
      }
      this.match("}");
    }

    this.entries['@comments'] = this.comments;
  }
}

//Runs the parser
function doParse(input) {
  var b = new BibtexParser()
  b.setInput(input)
  b.bibtex()
  return b.entries
}
