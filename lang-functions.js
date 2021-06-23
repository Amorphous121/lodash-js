

const _ = require('lodash');

const log = console.log;

// castArray -> cast value into array if its not the one.
// var arr = _.castArray(5);
// log(arr);
// var arr = _.castArray("pratham");
// log(arr);
// var arr = _.castArray(true);
// log(arr);
// var arr = _.castArray({});
// log(arr);
// var arr = _.castArray([5]);
// log(arr);


// clone -> create a shallo copy
// temp = [1, 2]
// arr = _.clone(temp);
// arr.push(3);
// log(temp);
// log(arr);


// cloneDeep () recursivly creates a shallow copy
// temp = 'hello';
// temp2 = _.cloneDeep(temp);
// log(temp2);


// confirmsTo -> (object, { property : function() { confirmation }}) -> checks for the objects property confirmation with values
// let obj1 = { a : 'a', b : 'b'};
// let obj2 = { a : 'a', b : 'c'};
// log(_.conformsTo(obj1, { a : (n) => n =='a'}))



// eq(value1, value2);
// log(_.eq(1, '1')); // false
// log(_.eq(1, 1)); // true
// obj1 = { a : '100'}
// obj2 = obj1
// log(_.eq(obj1, obj2)); // true
// obj1 = { a : '100'}
// obj2 = { a : '100'}
// log(_.eq(obj1, obj2)); // false



// gt -grater than
// log(_.gt(5, 6)) // false
// log(_.gt(6, 5));    // true.


// gte -> greater than or equal to.
// log(_.gte(5, 4))  // true
// log(_.gte(4, 5)) // false


// check for the argument object.
// log(_.isArguments(function() { return arguments; }()));


// check for the array
// log(_.isArray([]));
// log(_.isArray({}));


// Check for array buffer
// let a = new ArrayBuffer(10);
// log(_.isArrayBuffer(a))



// check for array like
// log(_.isArrayLike('abcd'))
// log(_.isArrayLike('a'))
// log(_.isArrayLike(5))
// log(_.isArrayLike([5,6]))
// log(_.isArrayLike({}))


// check for arraylike as well as object
// log(_.isArrayLike('abcd'))
// log(_.isArrayLike('a'))
// log(_.isArrayLike(5))
// log(_.isArrayLike([5,6]))
// log(_.isArrayLike({}))



// check if it's boolean
// log(_.isBoolean(false))
// log(_.isBoolean('b' === 'b'))
// log(_.isBoolean(1 === 1))
// log(_.isBoolean(!1))
// log(_.isBoolean(!null))
// log(_.isBoolean(!NaN))
// log(_.isBoolean(!undefined))
// log(_.isBoolean(1))



// check if the value is buffer
// let b = new Buffer("hello");
// log(_.isBuffer(b));
// log(_.isArrayBuffer(b));


// check is it's date
// log(_.isDate(new Date()))
// log(_.isDate(new Date('27/02/05')))


// check if the value is dom element.
// log(_.isElement('f'));


// isEmpty(value); -> check's for an empty object, array, element, collecction, set,
// log(_.isEmpty(''))
// log(_.isEmpty(0))
// log(_.isEmpty({}))
// log(_.isEmpty([1]))



// isEqual -> checks for deep equality not strict

obj1 = { a : 'a'};
obj2 = { a : 'a'};

// log(_.isEqual(obj1, obj2));
// log(_.isEqual(1 , '1'));
// log(_.isEqual([2], [3]));
// log(_.isEqual([], []));


//isEqualWith
function customizer(x, y) {
    return x.a == y.a;
}
// log(_.isEqualWith(obj1, obj2, customizer));


// check if the value is an error.
// log(_.isError(new Error("hello")));
// log(_.isError(new ReferenceError('type do not match')))


// _.isFinite(value) -> checks for finite ness
// log(_.isFinite(1));
// log(_.isFinite(-Infinity));


// check for funcdtion
// log(_.isFunction(() => 4))
// log(_.isFunction(function() { } ));



// check if the value is integer;
// log(_.isInteger(5.5));
// log(_.isInteger(5.0));
// log(_.isInteger(5));



// _.isLenght() -> check the value is arraylike length;
// log(_.isLength(3));
// log(_.isLength('3'));



// check if the value is map or not
// log(_.isMap(new Map()))
// log(_.isMap(new WeakMap()));



// check for property value match (partial deep comparison)  
// log(_.isMatch({ a : 1, b : 2, c : 3 }, { a : 1 }));
// log(_.isMatch({ a : 1, b : 2, c : 3 }, { c : 3 }));
// log(_.isMatch({ a : 1, b : 2, c : 3 }, { c : 5 }));


// is match with
function checkMatch(a, b){
    return a.value === b.value;
}

obj1 = { a : '5' };
obj2 = { a : 5 };
// log(_.isMatchWith(obj1, obj2, checkMatch(obj1, obj2)))


// check for not a number
// log(_.isNaN(5))
// log(_.isNaN(56 * 'd'))
// log(_.isNaN(parseInt('sd')))



// check the value if null or undefined
// log(_.isNil(undefined))
// log(_.isNil(null))
// log(_.isNil(void 0))


// check for null
// log(_.isNull(null))


// check for number
// log(_.isNumber(5));
// log(_.isNumber(parseInt('45')));


// check for the object 
// log(_.isObject({}))
// log(_.isObject(''))
// log(_.isObject(5))
// log(_.isObject([]))
// log(_.isObject(new Number(5)))
// log(_.isObject(new String('5')));



// check for the plain object
// log(_.isPlainObject({}))
// log(_.isPlainObject(new Function()))
// log(_.isPlainObject(new Function().prototype))
// log(_.isPlainObject(Object.create(null)));



// check if the value is regExp
// log(_.isRegExp(/log/))
// log(_.isRegExp(/d/gi))
// log(_.isRegExp(/[a-z]$/gi));


// check for safe integer
// log(_.isSafeInteger('4'))
// log(_.isSafeInteger(4))
// log(_.isSafeInteger(Math.pow(9999999,3)))


// check for the set
// log(_.isSet(new Set([2, 4, 5])));
// log(_.isSet(new Set('pratham')));


// check if the value is String
// log(_.isString('sdf'))
// log(_.isString(5))
// log(_.isString('5'))
// log(_.isString({}.toString()))


// check for the Symbol
// log(_.isSymbol(Symbol.iterator))


// check if the value is typed Array
// log(_.isTypedArray(new Uint16Array(55)))


// check if the value is undefined
// log(_.isUndefined(undefined))
// log(_.isUndefined(null))


// check if the value is weakmap
// log(_.isWeakMap(new WeakMap))


// check if the value is weak set
// log(_.isWeakSet(new WeakSet))


// check if the value is lessthan and lessthan or equal to
// log(_.lt(5 , 4));
// log(_.lte(5 , 4));



// Convert values to an array
// log(_.toArray({ a : 1, b : 2}))
// log(_.toArray('less'))
// log(_.toArray(' '))
// log(_.toArray(3))
// log(_.toArray(undefined))
// log(_.toArray(null))


// convert infinite value to finite
// log(_.toFinite(Infinity))
// log(_.toFinite(9999999999999999999999 * 999999999999999999999));



// convert to integer
// log(_.toInteger('67'))
// log(_.toInteger('ab'))
// log(_.toInteger(2.5))
// log(_.toInteger('2.5'))


// convert to value that is suitalble for length of arraylike datastructures
// log(_.toLength(Infinity))
// log(_.toLength('sfs'))
// log(_.toLength('5.5'))
// log(_.toLength('5'));


// convert value to number
// log(_.toNumber('3.5'))
// log(_.toNumber('5'))


// toSafeInteger
// log(_.toSafeInteger(9999999999999*999999999999999999))
// log(_.toSafeInteger(Infinity));



// convert value to string

// log(_.toString(456))
// log(_.toString([1,5,6]))
// log(_.toString(null))
// log(_.toString(undefined))