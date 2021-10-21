var product=1
for (let i=1; i<=12; i++) {
    product*=i;
    if (product<39916800) {
        console.log(product,"*")
    } else {
        console.log(product)
    }
}


// or with "while" loop


// var product=1
// var num=1
// while (num<12) {
//     num++;
//     product*=num;
//     if (product<39916800) {
//         console.log(product,"*");
//     } else {
//         console.log(product);
//     }
// }