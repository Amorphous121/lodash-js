/************* functions METHODS ****************** */


const _ =  require('lodash');
const log = console.log;

// _.after();
// -> this method creates a function that invokes func once it's called n or more times.

done = _.after(2, () => console.log("should invoke after 2 function call to done."));

done();
done();
// done(); // in this line the given function will include.



/* .ary(funtion, no) -> Creates a function that invokes func, 
with up to n arguments, ignoring any additional arguments. */
let logger = (...rest) => console.log(rest.length);
let exe = _.ary(logger, 2);
// exe(1,2,3,4)

// example
// log(_.map(['6', '8', '10'], _.ary(parseInt, 1)));





// before -> Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.
exe = () => console.log('calling before.');
done = _.before(3, exe);

// done();
// done();
// done();
// done();



// bind(fun, thisArg, [partials]) -> similar as bind methods
let person = { name : 'raju', age : 25};
function show (greet, optional) {
    return greet + ' ' + this.name + ' has age of ' + this.age + ' ' +optional;
}
let bound = _.bind(show, person, 'Mr.');
// log(bound('.'));




// bindKey

// person.greet = function (params) {
//     console.log('hello', this.name, params);
// }
// bound = _.bindKey(person, 'greet', 'have a nice day');
// bound();


// .curry(); - Creates a function that accepts arguments of func and either invokes func returning its result

function abc(a, b, c) {
    return [a, b, c];
}
curried = _.curry(abc);
// log(curried(3)(2)(1));

curried = _.curryRight(abc);
// log(curried(2)(3)(4));



// _.defer(function, { arguments }); 
// Defers invoking the func until the current call stack has cleared. 
// Any additional arguments are provided to func when it's invoked.

// _.defer(function(a) {
//     log(a, "has type of ", typeof a);
// }, 'demo');



// delay -> invokes the function after given miliseconds a
// delay(func, wait, [args]);

// _.delay(function(x) {
//     console.log('square of ', x, 'is ', x*x);
// }, 2000, 5);



// flip -> Creates a function that invokes func with arguments reversed.

// flipped = _.flip(function () {
//     return _.toArray(arguments);   
// })
// log(flipped(1,2,3,4,5))


// memoize -> Creates a function that memoizes the result of func.

// let object1 = { a : '1', b : '2'};
// let object2 = { a : '3', b : '4'};

// dvalues = _.memoize(_.values);

// dvalues(object1);
// dvalues(object2);

// object1.c = "new";
// object2.c = "new";

// log(dvalues(object2));
// log(dvalues(object1));



// negate -> Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
// function isPositive(e) {
//     return e >= 0; 
// }
// let result = _.filter([0,-2,4,-3,5], _.negate(isPositive))
// log('all negative no', result);
// result = _.filter([0,-2,4,-3,5], isPositive)
// log('all Positive no', result);




// once() => Creates a function that is restricted to invoking func once. 
//Repeat calls to the function return the value of the first invocation.

let func = _.once(function(x) {
    return x*x;
});

// log(func(5))
// log(func(7))
// log(func(9))



// overArgs(func, [transformation]) -> Creates a function that invokes func with its arguments transformed.

// function doubled(x) { return x + x };
// function square(x) { return x * x };

// let actualFunc = _.overArgs(function(x, y) {
//     return x + y;
// }, [square, doubled]);
// log(actualFunc(2,4));



// partial(fun, partials)
//Creates a function that invokes func with partials prepended to the arguments it receives. 
//This method is like _.bind except it does not alter the this binding.

// function test(arg1, arg2) {
//     return arg1 + '  ' + arg2;
// }

// let call = _.partial(test, 'mr');
// log(call('demo'));




// partialRight(fun, arg) -> similar as partial but binds args right to left

// function test(arg1, arg2) {
//     return arg1 + " " + arg2;
// }
// call = _.partial(test, 'Hello');
// log(call('ferede'));



//_.rearg (fun, index);
//Creates a function that invokes func with arguments arranged according to the specified indexes.
// let reArg = _.rearg(function(a, b, c) {
//     console.log(a, b, c);
// },[2, 0, 1]);

// reArg('hello', 'Prathamesh', 'Patil');



//  spred -> Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.
// var logging = _.spread((a, b, c) => {
//     return a+b+c;
// })
// log(logging([1,2,3]));



// unary () -> Creates a function that accepts up to one argument, ignoring any additional arguments.
log(_.map(['6', '8', '10'], _.unary(parseInt)));

let unaryFun = _.unary(function(a) { log(a) });
unaryFun(45,56);