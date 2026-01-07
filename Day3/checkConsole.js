// console.log(1 + "1");
// console.log("1" + 1 + 1);
// console.log(1 + 1 + "1");
// console.log(1 + + "1");  // Unary operator... that's why + 1 conver into string into number..



// let a ;
// let b;
// a = 1;
// b = (a++ , a++ , a => a + 1)(a);
// console.log(b);  // 4 






///  Remove Duplicate Number...



const  arr = [1,3,5,67,4,3,6,36,7,4,67,8,4,9,0,90,0,9,6,4];

const obj= {};

arr.forEach(element => {
    obj[element] = true

});

 console.log(Object.keys(obj))
    

