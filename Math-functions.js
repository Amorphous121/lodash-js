/***************  MATH FUNCTIONS *************/

const _ = require('lodash');
const log = console.log;


// add to no
// log(_.add(5, 25));

//get ceil value
// log(_.ceil(532.1))


// get the floor value
// log(_.floor(23.9))


// divide two no
// log(_.divide(5, 2));
// log(_.divide('df', 'd'))


//  get the maximum value from array
log(_.max([87, 20, 63, .5]));

// get the max value by iteretee

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

// log(_.maxBy(users, 'age'))
// log(_.maxBy(users, item => item.age ))



// compute the mean value of an arrray
// log(_.mean([1,2,3,4,5,6,7,8,9,10]));



// compute the mean by iteratee
// log(_.meanBy(users, 'age'));
// log(_.meanBy(users, 'age'));


// get the min value of array
// log(_.min([1,2,3,4,5,6,7,8,9,10]));

// get the min value by iteratee
// log(_.minBy(users, 'age'));


// multiply two values
// log(_.multiply(2, 5))



// round the value round(number, precision)
// log(_.round(9.2, ))
// log(_.round(9.6 ))
// log(_.round(9.582, 2))



// subtract
// log(_.subtract(2, 6));


// get the sum of an array
// log(_.sum([1,2,3,4,5,6,7,8,9,10]));


// get the sum by iteratee
// log(_.sumBy(users, 'age'));



/************************ Number methods *************************** */

// get the clamped value between lower and upper bound

// log(_.clamp(55, 10, 60));
// log(_.clamp(-55, -5, 100))
// log(_.clamp(55, 75, 100));


// check the no is between the range or not

// log(_.inRange(55, 10, 60))
// log(_.inRange(-55, 10, 60))


// get the random value
// random (lower, upper, floating number ? true/false);

// log(_.random(5, 6, true))
// log(_.random(50, 600, true))
// log(_.random(50, 600))