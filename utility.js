/********* UTILITY FUNCTIONS **************/

const { result, property, propertyOf, toPath } = require('lodash');
const _ = require('lodash');
const log = console.log;


// _.attempt(function, [args]); -->
// -> Attempts to invoke func, returning either the result or the caught error object. 
// Any additional arguments are provided to func when it's invoked.

function square(a) {
   if(_.isNumber(a))
        return a*a;
    else   
        throw new Error('Not a number');
}
// let attempt = _.attempt(square, 5);
// log(attempt);
// log(_.isError(attempt));




// _.bindAll() -> Binds methods of an object to the object itself, overwriting the existing method.

// let obj = {
//     name : 'rahul',
//     info : function () { return this.name }
// }

// _.bindAll(obj, ['info']);
// log(obj.info());



// conforms -> Creates a function that invokes the predicate properties 
//of source with the corresponding property values of a given object, 
//returning true if all predicates return truthy, else false.

// var objects = [
//     { 'a': 2, 'b': 1 },
//     { 'a': 1, 'b': 2 }
//   ];
   
// let result =  _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
// log(result);



// creates a function that returns a value.
// result = _.constant(5);
// log(result());



// defaultsTo(value, defaultValue);
// log(_.defaultTo(undefined, 10));
// log(_.defaultTo(null, 10));
// log(_.defaultTo(false, 10));



// _.flow(functions...)
/* Creates a function that returns the result of invoking the given 
functions with the this binding of the created function, 
where each successive invocation is supplied the return value of the previous.*/


let finalResult = _.flow([_.add, Math.abs]);
// log(finalResult(-50, 5)); // will always give you positive value.


// flowRight -> similar as flow but invokes functions from right to left.

finalResult = _.flowRight([square, Math.abs]);
// log(finalResult(-5));


// identity(value); -> returns the first argument it receives.
// log(_.identity(1,2,3));




// Iteratee -> Creates a function that invokes func with the arguments of the created function. 
//If func is a property name, the created function returns the property value for a given element. 
//If func is an array or object, the created function returns true for elements that contain the 
//equivalent source properties, otherwise it returns false
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

// log(_.filter(users, _.iteratee({ 'user': 'barney', 'active': true })));
// log(_.filter(users, _.iteratee(['user', 'fred'])));



// matches(source)
/*Creates a function that performs a partial deep comparison between a given object and source, 
returning true if the given object has equivalent property values, else false.*/

var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
  ];

// log(_.filter(objects, _.matches({ 'a': 4, 'c': 6 })))




// matchesProperty(path, srcValue);
// Creates a function that performs a partial deep comparison between 
// a given object and source, returning true if the given object has 
// equivalent property values, else false.


// var objects = [
//     { 'a': 1, 'b': 2, 'c': 3 },
//     { 'a': 4, 'b': 5, 'c': 6 }
// ];
   
// log(_.find(objects, _.matchesProperty('a', 4)))



// _.methods(path, [args]);
//Creates a function that invokes the method at path of a given object. 
//Any additional arguments are provided to the invoked method.

users = [
    { 
        name : 'PRathamesh',
        info : function() { return this.name }
    },
    { 
        name : 'Sukrut',
        info : function() { return this.name }
    },
    { 
        name : 'Kishor',
        info : function() { return this.name }
    },
]

// result = _.map(users, _.method('info'));
// log(result);




// mixins 

function vowels(string) {
    return _.filter(string, function(v) {
      return /[aeiou]/i.test(v);
    });
}
_.mixin({ 'vowels' : vowels })
// log(_.vowels('prathamesh'))


// noconflict -> Reverts the _ variable to its previous value and returns a reference to the lodash function.
// log(_.noConflict())




// _.noop() -> this method returns undefined.
// log(_.noop());



// nthArg() -> Creates a function that gets the argument at index n. 
//If n is negative, the nth argument from the end is returned.
// let func = _.nthArg(3);
// log(func(1,2,3,4,5));



// _.over(iteratee);
//Creates a function that invokes iteratees with the arguments it receives and returns their results.
// func = _.over([Math.min, Math.min]);
// log(func(1,2,3));




// _.overEvery([predicates]);
// Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives

func = _.overEvery([_.isNumber, _.isInteger]);
// log(func(1))
// log(func(1.2))
// log(func(undefined))
// log(func(null*1))


// overSome() -> 
//Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.
func = _.overSome([_.isNumber, _.isInteger]);
// log(func(1));
// log(func(1.2));
// log(func(null))
// log(func(undefined));



// property -> Creates a function that returns the value at path of a given object.
object = [
    {
        a : 1,
        b : 2
    },
    {
        a : 3,
        b : 4
    },
    {
        a : 5,
        b : 6
    },
    {
        a : 7,
        b : 8
    }
]
// log(_.map(object, _.property('b')))
// log(_.sortBy(_.reverse(object), _.property('a')));


// log(_.sortBy(_.reverse(object), _.property('a')));




// range([start], end, [step])
//Creates an array of numbers (positive and/or negative) progressing from start up to, 
//but not including, end. A step of -1 is used if a negative start is specified without 
//an end or step. If end is not specified, it's set to start with start then set to 0.

// log(_.range(0,100,10));
// log(_.range(0, 10, 2));



// rangeRight -> 
// This method is like _.range except that it populates values in descending order.
// log(_.rangeRight(0, 100, 10));
// log('Negative range', _.rangeRight(-10));



// _.studArray() -> this method returns the new empty array
// log(_.stubArray(), _.stubArray() )
// log(_.times(4, _.stubArray))


//studFlash() -> this methods returns the false.
// log(_.stubFalse());


// _.stubObject() -> returns new empty object.
// log(_.stubObject());


// studString -> returns new empty string
// log(_.stubString())


// stubTrue() -> this method returns the true.
// log(_.stubTrue());


// times(number, function/iteratee)
// -> Invokes the iteratee n times, returning an array of the results of each invocation. 
// The iteratee is invoked with one argument; (index).

// results = _.times(5, _.stubTrue);
// log(results);


// toPath() => Converts value to a property path array.
// results = toPath('name.age.addresss.office');
// log(results);



// uniqueId('prefix) ->
// Generates a unique ID. If prefix is given, the ID is appended to it.

// let id = _.uniqueId('patient');
// log(id);
// id = _.uniqueId();
// log(id);