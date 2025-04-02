/*
삼항 연산자 ?
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

let result = fileData % 2 === 0 ? "짝수" : "홀수";
console.log(`${fileData}은 ${result}입니다.`);
