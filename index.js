//Basics
//console.log("Jai Shree Ram");
//console.log(age); no hoisting
// let age: number = 10;
// //age = 'a'; can't
// if(age > 60){
//     console.log("Retire");
// }
var ken_kaneki = 1000;
var eye_patch = 7;
function help(customer_id) {
    return customer_id === 0 ? null : { id: customer_id };
}
var n = help(0);
// console.log(n.id); not correct because n can be null
console.log(n === null || n === void 0 ? void 0 : n.id); //means if n is null then null else it will log id
