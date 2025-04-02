/* */

//1부터 10까지의 홀수 출력
let sum = 0;
let i = 0;
while (i <= 10) {
  if (i % 2 == 1) {
    sum += i;
  }
  i++;
}
console.log(sum);

//1부터 10까지의 짝수 합계 출력
let sum2 = 0;
let n = 0;
while (n <= 10) {
  if (n % 2 == 0) {
    sum2 += n;
  }
  n++;
}
console.log(sum2);

// let odd = 0;
// let even = 0;
// let i = 0;
// while (i <= 10) {
//   //1부터 10까지 홀수의 합계
//   if (i % 2 !== 0) {
//     odd += i;
//     i++;
//   } else {
//     //1부터 10까지 짝수의 합계
//     even += i;
//     i++;
//   }
// }
// console.log(`홀수의 합계 ${odd} `);
// console.log(`짝수의 합계 ${even}`);
