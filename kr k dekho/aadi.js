// const sum = (a,b,c) =>  {
//   console.log(a+b+c);
//   return sum;
// };

// function nam (a,b,c) {
//   console.log (a+b+c);
//   return nam;
  
// }
// nam(1,2,3);
// sum(1,8,3);

// ------------------------------


// var a = 10;
// console.log(a);

// function sam(){
//     console.log("Hi everyone, welcome to code baithak");
// }
// sam();

//----------------------


// var a = 1;
// function sam(){
//     var b = 100;
//     console.log(b);;
    
//     function codeBaithak(){
//         console.log("welcome to code baithak");
        
//     }
//     codeBaithak();
// }
// sam();
// console.log(a);

//----------------------

// var a = 10;
// console.log(a);

// -----------------


// hoisting (dtz)
// console.log(b); //error
// let b = 10; / const b = 100


// console.log(b); //undefined
// var b = 10;

// ------------------------


// sam();

// console.log(a);

// var a = 10;
// function sam(){
//     console.log("welcome to code baithak");
// }

// ------------------------------



// var a = 10;
// let b = 20;
// const c = 30;

// function samm(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// samm();


// ------------------------------

// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;
// const c = 30;

// function samm(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// samm();


// ------------------------------

// console.log(a); // undefined

// var a = 10;
// let b = 20;
// const c = 30;

// function samm(){
//     console.log(a); // undefined
//     console.log(b); //error
//     console.log(c);
//     var a = true;
//     let b = 500;
// }

// console.log(c); // 30
// samm();


// ------------------------------


// console.log(a); 

// var a = 10;
// let b = 20;
// const c = 30;

// function samm(){
//     var a = true;
//     let b = 500;
//     console.log(a);
//     console.log(b); 
//     console.log(c);
// }

// console.log(b); 
// samm();

// ------------------------------

// console.log(a); 

// var a = 10;
// let b = 20;
// const c = 30;

// function samm(){
//     var a = true;
//     let b = 500;
//     const c = 700;
//     console.log(a);
//     console.log(b); 
//     console.log(c);
// }

// samm();
// console.log(a);
// console.log(b); 
// console.log(c);


// ------------------------------


// console.log(a); 

// var a = 10; // true
// let b = 20;
// const c = 30;

// if(true){
//     var a = true;
//     let b = 500;
//     const c = 700;     //reassign
//     console.log(a);
//     console.log(b); 
//     console.log(c);
// }

// console.log(a);
// console.log(b); 
// console.log(c);


// ------------------------------



// var a = 10; 
// let b = 20;
// const c = 30;

// if(true){
//     var a = true;
//     let b = 500;
//     const c = 700;     
//     console.log(a);
//     console.log(b); 
//     console.log(c);
// }
// if(true){
//     console.log(d);
//     var d = 100;
// }

// console.log(d);
// console.log(a);
// console.log(b); 
// console.log(c);

// ------------------------------

// let a = 10;
// var b = 20;
// const c = 30;

// function sam(){
//     console.log(a);
//     console.log(c);
//     var c = 30;
//     console.log(c);
// }

// sam();

// -----------------------------



// var a = 10;
// let b = 20;
// const c = 30;


// if(true){
//     var d = 100;
//     let e = 200;
//     const f = 300;
// }

// function sam(){
//     var g = 1000;
//     let h = 1000;
//     const i = 1000;
// }

// sam()

//------------------------------

// function a(){
//     console.log("a is a function");
// }

// function b(x){
//     console.log("b is b function");
// }

// b(a);

// {
//   var a = 10;
//   let b = 20;
//   }
//   console.log(a);
//   console.log(b);

// ------------------------------

// function arrayofstring(num){
//   return num.sort();
// }
// let num = [9,4,5,2,7,1,8];
// console.log(arrayofstring(num));

// ------------------------------


// function returnindex(num1){
//     let index = num.indexOf(5);
//     return index
// }
 
// let num1 = [9,4,5,2,7,1,8];
// console.log(returnindex(num1));

// ------------------------------


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// function concatarray(arr1,arr2){
//     return arr1.concat(arr2);
// }
// console.log(concatarray(arr1,arr2));

//---------------------------------------------


// function sumOfSquares(arr) {
//     arr.reduce(function(acc,crr){
//         const new = new + crr;
//     },0)

// }
// console.log(sumOfSquares([1, 2, 3, 4]));


//------------------------------------

// square of all Element and then sum of less than 9

// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = arr.map(a=>a*a).filter(a=>a<9).reduce((a,b)=>a+b);
// console.log(sum);

// function sumOfSquares(arr,key){ 
//     return arr.reduce((acc,curr)=>(acc+(curr*curr<key)),0);
// }
// console.log(sumOfSquares([1,2,3,4],6));

//-------------------------------------

//check the element is present in the array or not

// function checkElement(arr,key){
//     return arr.includes(key);
// }
// console.log(checkElement([1,2,3,4,5],3));

//------------------------------------------

// intersection of the array

// function intersection(arr1,arr2){ 
//        let arrr = (arr1.filter(num => !arr2.includes(num)).concat(
//         arr2.filter(num => !arr1.includes(num))))
//         return arrr;
// }   
//     console.log(intersection([1,2,3,4,5],[3,4,5,6]));

//------------------------------------------

// breakdown the array into smaller array

// function breakdown(arr,key){
//     let arr1 = [];
//     for(let i=0;i<arr.length;i+=key){
//         arr1.push(arr.slice(i,i+key));
//     }
//     return (arr1);
// }
// console.log(breakdown([1,2,3,4,5,6,7,8,9],3));

//------------------------------------------

// Create a function that takes an array of strings and returns a new array where each string is capitalized using the map method.

// function capMe(arr) {
//     return arr.map(a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase());
// }
// console.log(capMe(["mavis", "senaida", "letty"]));


//------------------------------------------






















