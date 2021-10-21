var sum=0
for (let i=1; i<=100; i++) {
    sum+=i
    if (i<100){
        console.log(i,"+")
    } else {
        console.log(i)
    }
}
console.log(sum);


// or with "while" loop


// var sum = 0
// var num = 0
// while (num<100) {
//     num++;
//     sum+=num;
//     if (num<100){
//         console.log(num,"+");
//     } else {
//         console.log(num)
//     }
// }
// console.log(sum);