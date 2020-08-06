/*If I had more time, I would have written a shorter letter.
                                  --Blaise Pascal
Functional programming can prove to be very crisp and precise, you just have to be patient to get there. If your program is having a loop construct, think if you can replace it using a list comprehension function(filter, map, reduce).Try these exercises.

    1).  Write a function to find the largest string in an array of strings making use of the reduce function. You can, of course, do it using a loop, but see how short your code can be if you make use of the filter function.
    2).  Write a function that takes an array of numbers and returns the sum of squares of those numbers.
      E.g. if the array passed is [1, 2, 3] then the function should return 14.
    3). Write a function that takes an array of numbers as an argument and filters and returns the even numbers in them.
    4). Write a function that takes an array and a criteria function(for filtering) and returns the array of those elements which do not fulfill the criteria. The criteria function should take any element as argument and return a boolean value. */

/**	This file contains 3 shorthands of loop which makes code clean, short and fast
  	All are catagarised under List comprehension	**/

/** Problem 1 **/
//reduce function
function max_str(arr) {
  return arr.reduce(function (prev, curr) {
    if (curr.length > prev.length) {
      return curr;
    } else {
      return prev;
    }
  }, "");
}

/** Problem 2 **/
//Map function and reduce function
function sum_of_squares(arr) {
  return arr.map(function (elem) { return elem * elem }).reduce(function (prev, curr) { return prev + curr }, 0);
}

/** Problem 3 **/
//Filter function 
function filter_even(arr) {
  return arr.filter(function (elem) { return elem % 2 == 0 });
}

/** Problem 4 **/
//Filter function
function arr_complement(arr, criteria_fn) {
  return arr.filter(function (i) { return !criteria_fn(i) });
}