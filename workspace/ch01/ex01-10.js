/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로  초기화
console.log(count); // 0

count = count + 1; // 0 + 1 = 1\
count += 1; // 1 + 1 = 2
count++; // 2 + 1  = 3

console.log(count); //3

console.log(count++); //3 출력 후 +1해서 4
console.log(++count); // 4에 +1 해서 5 출력

var sum = count++ + 10; // 5 + 10 후, count +1 = 6
console.log(sum); // 15 출력

sum = ++count + 10; // 6에 +1 헤서 7 + 10 = 17
console.log(sum); // 17 출력
