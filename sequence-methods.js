/************* SEQUENCE METHODS ****************** */

const _ =  require('lodash');
const log = console.log;

/************* SEQUENCE METHODS ****************** */

const _ =  require('lodash');
const log = console.log;

// Wrap a value into lodash instance
// converts a value into the instance of ladash so that we can chain mathods on it


var wrapped = _([1,2,3,4,5,6,7,8,9,10]);

let square = x => x * x;

// log('sum of elements', wrapped.reduce(_.add));
// log('get the first element', wrapped.get(0));
// log("square of all the no's", wrapped.value().map(square));



// _.chain() -> creates a lodash instance with explicitly chained function and the result of chaining should be unwrapped value.

var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];

let chainedUsers = _.chain(users).sortBy('age').map(o => o.user + " has age of " + o.age ).head().value();
// log(chainedUsers);



// _.tap(function(value) { }) -> this methods invokes the interseptor and returns the value.
let result = _([1,2,3,4,5,6,7,8,9,10]).tap(array => { array.pop() }).reverse().value();
// log(result);


// _.thru() -> similar to tap but have to return value
result = _([1,2,3,4,5,6,7,8,9,10]).thru(array => { array.pop(); return array }).reverse().value();
// log(result);



// _.prototype[Symbol.iterator]() -> enables wrapper to be iteratble.
// wrapped = _([1,2,3,4,5]);
// let iterable = wrapped[Symbol.iterator]()
// log(iterable.next())
// log(iterable.next())
// log(iterable.next())
// log(iterable.next())
// log(iterable.next())
// log(iterable.next())



// _.at() -> wrapper version of _.at();
let object = {
    'pratham' : 'class IMCA',
    'kishor'  : 'Diploma'
}
// log(_(object).at('kishor').value())




// create lodash wrapper instance with explicitly chained methods().

users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 }
];    
// sequence without chaining 
// log(_(users).value);
// sequence with chaining
// log(_(users).chain().head().pick('user').value());



//  commit -> Execute the chain sequence and return the wrapped result.
// let array = [5,6,7,8,9];
// wrapped = _(array).push(10);
// log(array) ;
// wrapped = wrapped.commit() 
// log(array);




// next() -> gets the next value of wrapped Iterator.
wrapped = _([1,2,3,4]);
// log(wrapped.next())
// log(wrapped.next())
// log(wrapped.next())
// log(wrapped.next())


// using wrapping of lodash instance.
// log(wrapped.partition(n => n%2 == 0).value())



// _.prototype.plant(value);
// Creates a clone of the chain sequence planting value as the wrapped value.

square = n => n * n;

wrapped = _([1,2,3,4]).map(square);
other = wrapped.plant([5,6,7,8]);
// log(wrapped.value());
// log(other.value());



// prototype.reverse() -> wrapper version of reverse();
// wrapped = _([1,2,3,4,5]);
// log(wrapped.reverse().value())


// value() -> executes the chain sequence and get the result

// log(_([1,2,3,4]).chain().reverse().value());



// alies for prototype.toJSON(), valueOf()

// wrapped = _({ a: 'a', b : 'b'});
// log(wrapped.toJSON())
// log(wrapped.valueOf());