const _ = require('lodash');
const log = console.log;


/********** STRING METHODS ************ */

// _.camelCase(string) -> convert string to camelcase.
// log(_.camelCase("Node js is javascript runtime running on the server."));



// _.capitalize('string') -> converts the first character of string to uppercase.
// log(_.capitalize("this is in lowercase."));


// deburr (string) -> converts latin character string to normal english string
// log(_.deburr('déjà vu'));


// _.endsWith(string, target, position to serch upto) -> check for the end of string with given string
// log(_.endsWith("This is demo string", "ing"));


// _.escape() -> Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
// log(_.escape("Raju & kaju are ' <best friend> ' "));



// _.escapeRegExp('string') -> Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
// log(_.escapeRegExp('/ [ ] * + / ( ) " " ? . , ^ $'));


//_.kebabCase('string'); -> converts the string into kebabCase.
// log(_.kebabCase('lodash_is_simple_libraryForArrayAndObjectMethods'));


// _.lowerCase() -> converts to lowercase string
// log(_.lowerCase("HELLO JAVASCRIPT"));



//_.LowerFirst() -> converts the first letter of string into lowercase
// log(_.lowerFirst('EXPRESS'));



//_.pad(string, length) -> Pads string on the left and right sides if it's shorter than length.
// log(_.pad('express', 11, '_'));
// log(_.pad('express', 11));


// _.padEnd(string, length) -> pad string on the right side if it's shorter than the length.
// log(_.padEnd('express', 12, '_'));



// _.padStart(string, length) -> pad string on the left side if it's shorter than the length.
// log(_.padStart('express', 12, '_'));


// parseInt -> parses the string into no.
// log(_.parseInt('105'))
// log(_.parseInt('abcd5678')) // NaN


// _.repeat(string, no) -> repeat the string upto given no of times.
// log(_.repeat('Hello ', 10));


// _.replace('string', pattern, replacement);
// log(_.replace('lodash is best npm package', /lodash/, 'underScore'));
// log(_.replace('lodash is the best npm package', 'npm', 'node module'));




// snakeCase('string) -> converts the string into snake case ->
// log(_.snakeCase('thisIsTheCamelCase <and> This-is-the-kebab-case'));



// splite(string, seperator, limit);
// log(_.split('this string is going to be spilited into an array', ' '));
// log(_.split('this string is going to be spilited into an array', ' ', 5));



// _.StartCase('string') -> converts the string into start case
// log(_.startCase('this string is in start case'));
// log(_.startCase('this-string-is-in-start-case'));



// startsWith (string, target, position) -> check the string starts with given str and postion
// log(_.startsWith("This is simple string", 'This', 0));
// log(_.startsWith("This is simple string", 'is', 5));
// log(_.startsWith("This is simple string", 'string', 15));



// _.template(); -> Creates a compiled template function that can interpolate data properties in "interpolate" delimiters.
// var compiled = _.template('hello <%= user %>');
// log(compiled({ user : 'Prathamesh.'}));


// _.toLower(string) -> converts to lower case
// log(_.toLower("THIS SHOULD BE IN LOWER CASE"));4


// _.toUpper(string) -> convert to upperCase.
// log(_.toUpper('this should be displayed in upper case'));



// trim () -> deletes the extra leading and ending spaces and special charaters
// log(_.trim('      lodash js              '));
// log(_.trim('_-_-_________lodash js----------', '_-'));


// trimEnd() -> trims the string from right side.
// log(_.trimEnd('      lodash js              '));
// log(_.trimEnd('_-_-_________lodash js----------', '_-'));


// trimStart() -> trims the string from left side.
// log(_.trimStart('      lodash js              '));
// log(_.trimStart('_-_-_________lodash js----------', '_-'));




// truncate(string, { options }) -> truncate the string if it has length longer than specified one.
// log(_.truncate('The lowest lenght of this string is not known', { length : 13, omission : '...' }));



// unescape() -> viceVersa of escape();
// log(_.unescape("the at &amp; t lab developed the c language"));



// UpperCase -> converts the whole tring into uppercased string
// uppperFirst -> converts the first letter of string to upperCase.

// log(_.upperCase('this whole string will be shown in uppercase.'));
// log(_.upperFirst('now only first letter will shown in uppercase'));


// words, -> splite string into array of words.
// log(_.words('this string is going to be an array of words.'));