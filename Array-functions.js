
// const { pullAllWith, isEqual } = require('lodash');
let _ = require('lodash');
const log = console.log;

let arr = [1,2,3,4,5,6,7,8,9,10];

/*********** Array Methods ************/

// chunk method -> create a new array of elments of the no of chunks size passed as size
let arr2 = _.chunk(arr,2);
// log(arr2);


// compact -> create an array with all falsy value removed
arr2 = _.compact([...arr, true, false, undefined, null, '', {} ])
// log(arr2)


// concat
arr2 = _.concat(arr, 20, 30, [40, 50], [[60,70], [80,90], 100] )
// log(arr2);


// difference -> excludes the similer items from first array .
let arr3;
arr3 = _.difference(arr2, arr);
// log(arr);
// log(arr2);
// log(arr3)


// difference by -> 
arr3 = _.differenceBy([11.2, 12.5, 15.6], [11.9, 12.8, 16.6], Math.floor);
// log(arr3);


// difference with -> returns the difference with comparitor function
let object1 = [{ a: 'b', b : 'c'}, { c: 'd', d: 'e'}];
let object2 = [{ a : 'b', b : 'c'}, { e : 'f', f : 'g'}];

arr3 = _.differenceWith(object1, object2, _.isEqual);
// log(arr3)


// drop => slices the no of elements from left side of an array.
// if size is not specified the by default slices 1
// log(arr2);
// arr3 = _.drop(arr2, 5);
// log(arr3);



// dropRight() -> slices the no of elements from right side of an array.
// if size is not specified the by default slices 1
// log(arr2);
// arr3 = _.dropRight(arr2, 5);
// log(arr3)


// dropRight while() -> drop from right until predicate returns falsy value

var users = [
    { 'user': 'kishor',  'active': true },
    { 'user': 'pratham',    'active': false },
    { 'user': 'roshan', 'active': false }
];

let user2 = _.dropRightWhile(users, (o) => !o.active);
// log(user2);
user2 =_.dropRightWhile(users, { active : false})
// log(user2);
user2 = _.dropRightWhile(users, ['active', false])
// log(user2)
user2 = _.dropRightWhile(users, 'active')
// log(user2)


//dropwhile() -> drop from beggining until predicate returns falsy

// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
 
// user2 = _.dropWhile(users, (o) => !o.active)
// log(user2);
// user2 = _.dropWhile(users, { user : 'barney', active : false});
// log(user2);
// user2 = _.dropWhile(users, ['active', false]);
// log(user2);
// user2 = _.dropWhile(users, 'active');
// log(user2);


// fill -> to fill existing array with given value
// _.fill(arr3, '*', 0, arr3.length);
// _.fill(arr3, '#');
// arr3 = new Array(5);
// _.fill(arr3, '#', 0, 2);
// _.fill(arr3, '*', 2);
// log(arr3)


// _.findIndex(source, predicate, startIndex);
// var index = _.findIndex(arr2, item => item === 50)
// log(arr2)
// log(index)

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

// index = _.findIndex(users, { active : true }) ;
// log(index);
// index = _.findIndex(users, ['user', 'fred']);
// log(index);



// findLastIndex(array, predicate, startIndex);
// arr2 = [1,1, 2 ,2,2,2,2,2,2,2];
// var index = _.findLastIndex(arr2, item => item == 2);
// log(arr2);
// log(index);

// index = _.findLastIndex(users, { active : false});
// log(users);
// log(index);


// flatten -> flatts the array to a single level

var notFlatArray = [1, [2, 3], [ [ 4, 5], [6, 7]], [[ [ [] , 8] , 9]]];
// var flatten = _.flatten(notFlatArray);
// log(flatten)

// deep flatten -> flat's the array to ground level
// flatten = _.flattenDeep(notFlatArray);
// log(flatten)

// flattenDepth -> flatten's the array to a certain depth.

// flatten = _.flattenDepth(notFlatArray, 2);
// log(flatten);


// _.fromPairs(); convert array of key pair to the object
// let pairArray = [['a', 'b'], ['c', 'd'], ['e', ['f', 'g']]];
// let pair = _.fromPairs(pairArray);
// log(pair);


// _.head(arr); -> gets the first element of array.
// log(arr);
// log(_.head(arr))


//_.indexOf(array, value, startFrom) -> finds the index of match item if not found returns -1

// log(arr);
// index = _.indexOf([0, ...arr, 0, 0], 0 , 5);
// log(index);


// initial() => gets the whole array except last Element;
// var newArr = _.initial([...arr, 11]);
// log(newArr);



// intersection(arrays);

let a= [1,2,3,4];
let b = [5, 6, 2, 1];

// log(_.intersection(a, b));

// Intersection by
a = [1.2, 2.4, 3.6, 3.9, 5.0, 1.5]
b = [2.6, 1.8, 3.1,  6.9];
// log(_.intersectionBy(a, b, Math.floor ));
// log(_.intersectionBy(a,b, Math.ceil));
// log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'))



// _.intersectionWith(array1, array2, comparitor)

let objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

// log(_.intersectionWith(objects, others, _.isEqual));


/// JOin method ;
  // converts array into a string seperated by given seperator.

// log(_.join(arr, ' '));


// get the last element of array
// log(_.last(arr))
// log(arr[arr.length -1]);


// lastIndexOf()
// log(_.lastIndexOf([1, 1, 1, 1, 1, 1, 1], 1));



// get the element of nth index

// log(_.nth(['a', 'b', 'c', 'd', 'e', 'f'], 4));
// log(['a', 'b', 'c', 'd', 'e', 'f'][4]);


// ._pull() -> remove the values from array ;
// mutate's the array
// arr.push('a');
// arr.push('b');
// arr.push('c');
// log(arr)
// _.pull(arr, 'a', 'b', 'c');
// log(arr);


//_.pullAll(array, [values to remove]);

// arr.push('a');
// arr.push('b');
// arr.push('c');

// log(arr);
// _.pullAll(arr, ['a', 'b', 'c']);
// log(arr);


// _.pullAllBy(arr, remove, function/identity);

// let obj = [{ 'x' : 1}, { 'x' : 2 }, { 'x' : 3 }];
// _.pullAllBy(obj, [{ 'x' : 1 }], 'x')
// log(obj);


// obj = [{ 'x' : 1}, { 'x' : 2 }, { 'x' : 3 }];
// log(obj);
// _.pullAllWith(obj, [{'x' : 1}], _.isEqual);
// log(obj);



// pullAt(array, [indexe]) -> returns the array of removed element;
// arr.push('a');
// arr.push('b');
// arr.push('c');
// arr.push('d');

// log("before delete ", arr);
// let removedArr = _.pullAt(arr, [10,11,12,13]);
// log("after delete", arr)
// log("deleted items", removedArr);



// _.remove(arr, predicate) -> this removes/ filters array (mutate's) and returns removed values.   
arr.push('a');
arr.push('b');
arr.push('c');
arr.push('d');

// log("before delete ", arr);
removedArr = _.remove(arr, item => item === 'a' || item === 'b' || item === 'c' || item === 'd'  )
// log('Even no\'s are', _.remove(arr, item => item % 2 == 0))
// log("after delete", arr)
// log("deleted items", removedArr);



// Reverse an array
// log("reversed array : ", _.reverse(arr) );


// slicing the array doesnot mutate the array
// log(arr);
// log(_.slice(arr, 0, 5));
// log(arr.slice(0, 5))
// log(arr);


// _.sortedIndex -> this method inspects the sorted array and returns the index on which the element should be inserted to maintain sorting order.
// log(arr);
// log(_.sortedIndex(arr, 2.5))


// SortedIndexBy
object1 = [ { 'a' : 1 }, { 'a' : 2 }, { 'a' : 3 }, { 'a' : 4 } ]
// log(_.sortedIndexBy(object1, { a : 5 }, 'a'));



//sortedIndexof -> returns the index of element in sorted array (first occurence)
//sortedLastIndexOf -> returns the last index of element in sorted Arry ( last occurence ).
// log(_.sortedIndexOf(arr, 10));
arr[10]=10;
// log(_.sortedLastIndexOf(arr, 10));

// sortedLastIndexBY(arr, value) -> returns the last index (by incresing 1 to it) of elemet in sorted array by predicate
object1.push({a : 4});
// log(object1);
// log(_.sortedLastIndexBy(object1, { a : 4}, 'a'))



// _.sortedUniq(arr) this method returns the sorted array of unqye elements;
// log(_.sortedUniq([1,1,2,3,4,4,4]));


// sortedUniqBy(arr, idenetity); SORT UNIQUE ELEMENT BY ITERETEE RETURNS DUPLICATE FREE SORTED ARRAY.
// log(_.sortedUniqBy([1.1,1.2,1.3,1.4,2.4,2.3,2.8,3.0], Math.floor));


// ._tail(arr) -> returns all elements except first one.
// log(_.tail(arr));


// take(arr, [n -> no of elements]) -> Creates a slice of array with n elements taken from the beginning.
// log(_.take(arr, 5));


// _.take right(arr, n) -> create a slice of array with n elements taken from end(right);
// log(_.takeRight(arr, 5));


// _.takeRightWhile(arr, predicate/ function );

// log(_.takeRightWhile(users, item => !item.active))
let newarr = _.takeRightWhile(users, function (o) { return o.active === true})
// log(newarr);
// log(_.takeRightWhile(users, function(o) { return o.active; })) // not working.
// newarr = _.takeRightWhile(users, { active : true })
// newarr = _.takeRightWhile(users, ['active', true])
// log(newarr);


// _.takeWhile(arr, predicate);
// log(users);
// log(_.takeWhile(users, { active : false })) // returns only inactive member;



// _.union(arr, [.....]) -> returns the union of arrays into single array
// log(_.union([1,2,3], [3,4,5], [6,6,7,8]));


// unionBy ()
// log(_.unionBy([1.2, 1.3, 2.4, 2.6, 3.8, 5.3 , 4.2], [1.3, 2.5, 6.1, 5.9], Math.floor))

// unionWith(arrays, comparator);

objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

// log(_.unionWith(objects, others, _.isEqual));



// create Array with non duplicate values

// log(_.uniq([1,2,3,4,5, 8, 7, 7, 1]));


// uniqBy (array, predicate)
// log(_.uniqBy([1.1, 23.2, 2.4, 2.9, 3.1, 3.6], Math.floor));


// Unique with(array, comparator);
//  objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
// log(_.uniqWith(objects, _.isEqual));




// zip an array

var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// log(zipped);
var unzipped = _.unzip(zipped);
// log(unzipped);


// unzip with

// zipped = _.zip([1, 2], [10,20], [100, 200])
// log(zipped);
// unzipped = _.unzipWith(zipped, _.add);
// log(unzipped);


// without(arr, vals) > create an arrray with all excluding values passed to fun
// log(_.without([1, 2, 3 ,4,5], 1, 2, 4));


/// xor(array) -> returns the new array of unique
// log(_.xor([1, 2], [2, 4]));

// xorby(arr, predicate);
// log(_.xorBy([1.2, 1.3, 2.4], [1.4, 2.5, 4.5, 3.5], Math.floor));


// Xor with (expects a comparator function)

 objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 uniqele = _.xorWith(objects, others, _.isEqual);
//  log(uniqele)



// Zip -> creates the group by taking each first element form supplied arrays.

// demo1 = [1,2,3,4];
// demo2 = [5,6,7,8];
// demo3 = [9, 10];
// log(_.zip(demo1, demo2, demo3));


// ZipObjects -> ([props], [values]) -> creats the object by props array by matching values array

let props = ['a', 'b', 'c', 'd'];
let values = [2,4,6,8];
// log(_.zipObject(props, values));


// ZipObjectDeep();
// log(_.zipObjectDeep(['a.b.c', 'a.b.d'], [1, 2]));


// Zipwith(arrays, function) -> retuns an zipped array of values calculated by function
// first = [1,2,3];
// second = [4,5,6];
// third = [7,8,9];
// let cal = (a, b, c) => a + b + c;
// log(_.zipWith(first, second, third, cal));


