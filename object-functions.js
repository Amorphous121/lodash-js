
const _ = require('lodash')
const log = console.log;

/****************** OBJECT METHODS ********************  */

// 1) _.assign -> assing one object value to another ( iterate over own properties only )

let a ={ 
    a  : "0"
};

function foo () {
    this.a = 1;
}
foo.prototype.p = 4;

function bar () {
    this.b = 2
}

bar.prototype.q = 8;

_.assign(a, new foo, new bar);
// log(a);


// 2) assingIn this method over own and inherited method

_.assignIn(a, new foo, new bar)
// log(a)



// create array from object property values
// .at(source, [ paths ]);

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
arr = _.at(object, ['a[0].b.c', 'a[1]']);
// log(arr);



// _.create object by inheriting properties
// _.create(prototype, properties);
function Shape() {
    this.x = 0;
    this.y = 0;
}
function Circle () {
    Shape.call(this);
}
Circle.prototype = _.create(Shape.prototype, { constructor : Circle});
let circle = new Circle;
// log(circle instanceof Circle)



// defaults -> assign values from own properties and inherited properties.
// similar properties in source objects are ignored.
// obj = _.defaults({ a : 2 }, { b : 3 }, { a : 4});
// log(obj)


// Defaults deep
// similar to defaults but recuresivly adds  the nested properties
// obj = _.defaultsDeep({ a : 2, c : 5, k : { p : 10} }, { b : 3 , k : { j : 10}} );
// log(obj)



// findKey -> returns the key of the matched element else returns undefined

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

// let key = _.findKey(users, user => user.age >= 35 )
// log(key);



// find last key -> returns the key of the matched element else undefned ( starts from right side );
// key = _.findLastKey(users, item => item.age > 35)
// log(key);


// forIn -> iterate over (value, key) of object
// forInright -> iterate over (value, key) of object from the right side.

// _.forIn(users, (value, key) => {
//     log(value, " : ", key)
// })

// _.forInRight(users, (value, key) => {
//         log(value, " : ", key)
//     })



// forOwn() -> iterates over own pro;perties only
// forOwnRight() => iterate over own properties form right side.
// let person = function () {
//     this.name = 'pratham';
//     this.mail = 'pratham@gmail.com';
// }

// person.prototype.isGraduated = false;

// _.forOwn(new person, (value, key) => {
//     log(key, value)
// });

// _.forOwnRight(new person, (value, key) => {
//     log(key, value)
// })



/// create an array of own function property names of object    
users.call = () => console.log("calling users");
users.copy = () => console.log("coppied the users")
users.__proto__.temp = () => 'temp';
// arr = _.functions(users);
// log(arr);


 
// create an array of own and inherited function property names of object    
// arr = _.functionsIn(users);
// log(arr)



// get the value of a path of given object if it's undefined then will return default value.
// value = _.get(users, 'age', 25);
// log(value)



// check if the own path is exists in the object
// log(_.has(users, 'age'));

users.__proto__.age = 25;
// check the path in own and inherited properties of object;
// log(_.hasIn(users, 'age'))



// invert the object 
// make the value as key and key as value
demo = {
    key : 'value'
}
// log(_.invert(demo))


// invertBy -> inverts the object but after inverting makes the value as array

demo = {
    a : 'a',
    A : 'a',
    b : "b",
    c : 'c',
    d : 'd'
}

// log(_.invertBy(demo))



//  invoke method at the path of object
// result = _.invoke(demo, 'a.toUpperCase' );
// log(result);
// result = _.invoke(demo, 'd.toUpperCase' );
// log(result);



// create an array of keys
demo.__proto__.k = 'k'
// log(_.keys(demo));
// create an array of own  and inherited property name;
// log(_.keysIn(demo))





// map the object keys with iteratee.
// log(_.mapKeys({ a: '1', b : '2'}, (value, key) =>  key.concat(value )))

// map the object values with iteratee
// log(_.mapValues(demo, (value, key) => value.toUpperCase()));
// log(_.mapValues(users, (o, key) => o.age))



// merge two objects
// log(_.merge({ a : 'a'}, { b : 'b'}))

// mergeWith(object, source, customizer)
// can user the customizer to customize merge options
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };

function customizer (objValue, srcValue) {
    if(_.isArray(objValue))
        return objValue.concat(srcValue);
}
// log(_.mergeWith(object, other, customizer));



// omit(object, [paths to negalte]) -> conpose the object (own and inherited )by negalting some properties
// let newDemo = _.omit(demo, ['a', 'b', 'temp'])
// log(newDemo);



// create an object of properties (own and inherited) which are not meat truthy in iteratee.
// newDemo = _.omitBy(demo, _.isNumber );
// log(newDemo);




// pick () -> Creates an object composed of the picked object properties.
newDemo = _.pick(demo, ['a', 'b']);
// log(newDemo);

// pickBy() -> Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).

newDemo = _.pickBy(demo, _.isNumber);
// log(newDemo)



// result(object, path, default value) -> get the value at given path if result is undefined then return default value.

value = _.result(demo, 'age', 50);
// log(value);


// _.set(object, path, value); set the value of path in object
// log(_.set(demo, 'age', 26));



// setWith -> set the value of path in object with customize way
// function custom(prop, value) {
//     log("in function")
//     return prop.concat(value);
// }
// object = {};
// log(_.setWith(object, 'newProp', 'newValue'))



// toPairs() -> create an array  from object's own properties  

function Obj() {
    this.a = '1';
    this.b = '2';
    this.c = '3';
    this.d = '4';
}
Obj.prototype.e = '5'
// log(_.toPairs(new Obj))

// toPairsIN() -> create an array  from object's own properties  
// log(_.toPairsIn(new Obj));


// transform -> alternative to reduce
// result1 = _.transform(new Obj, function(result, value, key) {
//         result.push(value.concat(key))
// }, []);
// log(result1)


// unset -> remove the property of a object
// log(demo);
// _.unset(demo, 'A');
// log(demo);




// update the path of object with update(object, path, updator);
// log(demo);
// _.update(demo, 'A', (n) => 'A')
// log(demo);



// // updateWith(object, path, updator, customizer)
// object = {};
// _.updateWith(object, '[0][1]', () => 'A',  Object);
// log(object);



// values() -> Creates an array of the own enumerable string keyed property values of object.

// log(demo);
arr = _.values(demo);
log(arr);


// valuesIn() -> Creates an array of the own and inherited enumerable string keyed property values of object.
arr = _.valuesIn(demo);
log(arr);
