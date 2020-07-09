"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var squareArr = arr.map(function (item) {
  return item * item;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
