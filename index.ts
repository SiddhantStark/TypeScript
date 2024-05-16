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

let employee : {
    id: number,
    name: string,
    retire: (age: number) => void
} = {
    id: 1,
    name: "Naruto fan",
    retire: (age: number) => {
        if(age>60){
            console.log("Retire");
            return;
        }
        
        console.log("You're because of your you're a man and only have 30 years of experience, 69 years of experience.")
    }
}

console.log(employee.retire(58));

























