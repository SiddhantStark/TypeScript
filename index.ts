//Basics
//console.log("Jai Shree Ram");
//console.log(age); no hoisting
// let age: number = 10;
// //age = 'a'; can't
// if(age > 60){
//     console.log("Retire");
// }

//Built-in types
// let sales = 123;
// console.log(sales);
// let p = true; 
// let m = 12_000_000;
// console.log(m+sales);

//any type
// let l;
// console.log(l);

// function(l){
// Parameter 'l' implicitly has an 'any' type
//     console.log(l);
// }

//Arrays
// let arr : number[] = []
// arr.push(1);
// arr.push(7); //thala for a reason
// //arr.push('3') -> error dega
// arr.forEach(element => {
//     //element.toExponential(3)
//     // element.toLocaleString();
//     console.log(element);
// });
//console.log(arr);

//Tuples
// let tup : [number, string] = [7, "Thala"];
// console.log(tup)
// tup[0]=18;
// tup[1]="Koach";
// console.log(tup);




//enums
// enum Size {a=1,b,c,d,e};
// let x: Size = Size.a;
// let y: Size = Size.c;

// console.log(x);
// console.log(y);

//function

// function f(n: number): number {
//     return n;
// }

// let a = f(3);
// console.log(a);

//objects

// let employee : {
//     id: number,
//     name: string,
//     retire: (age: number) => void
// } = {
//     id: 1,
//     name: "Naruto fan",
//     retire: (age: number) => {
//         if(age>60){
//             console.log("Retire");
//             return;
//         }
        
//         console.log("You're because of your you're a man and only have 30 years of experience, 69 years of experience.")
//     }
// }

// console.log(employee.retire(58));




// Advanced TypeScript
//type aliases
// type cricketer = {
//     id: number,
//     name: string,
//     doesbat: boolean,
//     doesbowl: boolean,
//     wicketkeeper: boolean,
//     batting: string,
//     bowling: string,
// }

// let n18 : cricketer = {
//     id: 18,
//     name: "Virat Kohli",
//     doesbat: true,
//     doesbowl: true,
//     wicketkeeper: true,
//     batting: "right hand batsman",
//     bowling: "right hand medium"
// }

// console.log(n18.name);
//union types

// let n7 : number | string;

// n7 = "7";

// if(typeof(n7) === 'string'){
//     console.log("Thala for a reason");
// }
// else if(typeof(n7) === 'number'){
//     console.log(n7);
// }

// n7 = 7;

// if(typeof(n7) === 'string'){
//     console.log("Thala for a reason");
// }
// else if(typeof(n7) === 'number'){
//     console.log(n7);
// }

// Intersection type
// type bowling = {
//     bowls: () => void
// }

// type batting = {
//     batting: () => void
// }

// type fielding = {
//     catches: () => void
// }

// type cricketer = bowling & batting & fielding;

// let n12 : cricketer = {
//     bowls: () => {
//         console.log("Spin Bowling");
//     },
//     batting: () => {
//         console.log("left handed batting");
//     },
//     catches: () => {
//         console.log("Yuvraj Singh catches");
//     }
// }

// console.log(n12.catches());

//Literal types
type tg = 1000 | 7;
let ken_kaneki: tg= 1000;
let eye_patch: tg = 7;
//let is1000minus7equalsto993: tg = ken_kaneki-eye_patch; //error dega
// horrifying

// nullabe type
type me = null | undefined;

// let myName : me = null;
// console.log(myName);

// myName = undefined;
// console.log(myName);

//let hi : string = null // error dega

// Optional Chaining

type customer = {
    id: number
}

function help(customer_id: number) : customer | null | undefined {
    return customer_id===0 ? null : {id : customer_id};
}

let n = help(0);

// console.log(n.id); not correct because n can be null
console.log(n?.id) //means if n is null then null else it will log id



















