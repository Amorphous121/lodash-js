/************ Collection methods *******************/

const _ = require('lodash');
const log = console.log;


// countBy (array/object, iteratee);
// let count = _.countBy([1.2, 3.4, 6.3, 1.5], Math.floor);
// log(count); 
// count = _.countBy(['one', 'two', 'three', 'four', 'six', 'seven'], 'length');
// log(count);


// Every returns truthy if all the values pass truthy

result = _.every([1, true, '5', {}, [], !undefined, !null], Boolean);
// log(result);

var users = [{
        'user': 'barney',
        'age': 36,
        'active': false
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'michal',
        'age': 14,
        'active': true
    },
    {
        'user': 'gems',
        'age': 24,
        'active': true
    }
];

// checking for every user should be inactive.
// log(_.every(users, { active : false }));
// will return true
// log(_.every(users, ['active', false]));
// log(_.every(users, 'active'));


// _.filter

var filtered = _.filter(users, (o) => o.active );
// log(filtered);



// find & findLast

var found = _.find(users, o => o.active);
// log("first found", found);

found = _.findLast(users, o => o.active);
// log('last found', found);




// flatmap and flatmapdeep and flatmap Depths
// maps the each element of array to given predicate and return an arra
// let duplicate = n => [n,n];
// log(_.flatMap([1, 2, [3]], duplicate));

// maps the result in to a flattern array;
// log(_.flatMapDeep([1, 2, [[3]]], duplicate));

//flats upto 2 level
// log(_.flatMapDepth([1, 2, [[3]]], duplicate, 2));


// forEach -> iterate over an array by selecting one element at a time.
// result = _.forEach([1,2,3,4,5], item => log(item * 2));
// log(result);


// ForEachRight -> same as forEach but iterates's from right side.
    _.forEachRight([1, 2, 3, 4], item => {
        // console.log(item);
    });


// group by 
// groups the elements by the keys generated through iteratee and returns aggregate object.

    // result = _.groupBy(['one', 'two', 'three', 'four', 'six', 'seven'], 'length')
    // log(result);

    // result = _.groupBy([1.2, 3.4, 6.3, 1.5], Math.floor);
    // log(result);



//includes(); -> checks for inclusion of element and returen boolean result.
    // log(_.includes([1, 2, 3, null, undefined, '', false], undefined));
    // log(_.includes({ 'a' : 'b', 'c' : 'd'}, 'd')); // -> finds value.



// invokeMap -> invokes the collection items with given function

    // log(_.invokeMap([[4, 3, 2], [9, 8 , 7]], 'sort'))
    // log(_.invokeMap([12345678910], String.prototype.split, ''));
    // log(_.invokeMap([[1, 2, 3, 4], [5,6,7,8]], Array.prototype.join, ''))


// keyby -> creates an object of given collection composing key by iteratee.

    // let obj = _.keyBy(users, o => {
    //     return o.user.toUpperCase();
    // })
    // log(obj);




// map(array, iteratee);
// result = _.map([1, 2, 3, 4, 5], item => item * 2);
// log(result);

// result = _.map(users, 'user')
// log(result);



// Orderby -> sorts the collection by given field or iteratee -> doesnot mutate the collection
    /// return new ordered collection.

// let users2 = _.orderBy(users, ['age'], ['asc']);
// log(users2);



// partitionby

// users2 = _.partition(users, o => o.active);
// log(users2); // partion of active users and inactive users;
// users2 = _.partition(users, { active : true});
// log(users2);
// users2 = _.partition(users, ['active', false]);
// log(users2);

// // will print partition of even and odd values
// log(_.partition([1, 2, 3, 4, 5, 6, 7 , 8, 9, 10 ], ele => ele % 2 == 0)) // 



// reduce (collection, iteretty, accumlatio);
result = _.reduce([1, 2, 3, 4, 5, 6, 7 , 8, 9, 10], (sum, n) => sum + n, 0);
// log(result);

// reduce right

let arr = ['a', 'b', 'c', 'd', 'e'];
// result = _.reduceRight(arr, (prev,ele) => prev.concat(ele.toUpperCase()), '');
// log(result);
// result = _.reduce(arr, (prev,ele) => prev.concat(ele.toUpperCase()), '');
// log(result);



// _.reject(arr, fun) -> opposite of filter returns the filtered element which doesn't pass the condition

arr = [1,2,3,4,5,6,7,8,9,10];
// should return odd no's 
result = _.reject(arr, ele => ele % 2 == 0);
// log(result);



// get the random element from collection
// log(_.sample({ a: 1, b : 2, c: 5}))
// log(_.sample([1, true, undefined, null, NaN]));


// get n random elements from collection
// log(_.sampleSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// log(_.sampleSize({ a: 1, b : 2, c : 3, d : 5, e : 100}, 2));


// shuffle the array elements
// log(_.shuffle([5, 4, 3, 2, 1]));



// get the size of collection
// log(_.size([1,2,3,4,5,6,7,8,9]));
// log(_.size({ a : 1, b : 3, d : 5, e : 5}))
// log(_.size("prathamesh"));


// check if some elements of collection satisfy the conditions.

arr = [1,2,3,4,5,6,7,8,9];

result = _.some(arr, ele => ele % 2 == 0);
// log(result);



///// sort by

users2 = _.sortBy(users, o => o.user.length);
// log(users2);
users2 = _.sortBy(users, o => o.active);
// log(users2);
users2 = _.sortBy(users, ['age']);
// log(users2);




 //*** Date method */


 // _.now() returns the current time stamp
 log(new Date(_.now()).toLocaleDateString())