/*

*/

var x = 5;
var y = x++ + ++x + x++ - x--; // 5 + 7 + 7 - 8 = 11 , x = 7
console.log(x, y); // x = 7 , y = 11
