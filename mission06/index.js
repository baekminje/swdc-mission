var a=5 //변수의 재선언 가능, 값의 재할당 가능
let b=6 //변수의 재선언 불가능, 값의 재할당 가능
const c=7 // 변수의 재선언 불가능, 값의 재할당 불가능

function sum1(a,b,c,d){
    return a+b+c+d;
}

const sum2 = (a,b,c,d) => a+b+c+d;

console.log(sum1(11,22,33,44))
console.log(sum2(11,22,33,44))