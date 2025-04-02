/*
논리 연산자 &&, ||, !
*/

//논리합(OR)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//앞의 값이 참이면 앞의 값을 변환
// truthry : 100, hello, true
//falsy : number 0, string '', boolean false, null undefined
console.log("hello" || "world"); // hello
console.log(90 || 30); // 90
console.log(null || "guset"); // guset
console.log(undefined || "guset"); // guset
console.log(0 || 30); // 30
console.log("" || "guset"); // guset

//앞의 값이 거짓이면 뒤의 값을 변환
console.log();
