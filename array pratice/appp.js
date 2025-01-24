// let arr = [1,2,3,4,5];

// //double of the array

// function double(arr){
//     return arr.map (value=> value*2);
// }
// console.log(double(arr));

// //max min of the array

// let maxmin = arr=> [Math.max(...arr),Math.min(...arr)];
// console.log(maxmin(arr));

// //remove duplicates from the array

// let removeduplicates = arr => [...new Set(arr)];
// console.log(removeduplicates(arr));

// //roteate the array
// let rotate = (arr, k) => {
//     arr.unshift(...arr.splice(arr.length - k));
//     return arr;
// }
// console.log(rotate(arr, 4));

// //find the index of spacific the element in the array

// let find = (arr,num) => arr.includes(num) ? arr.indexOf(num) : -1;
// console.log(find(arr, 2));

// //sost the array

// let arr2 = ["banana","apple","papaya","chiku","orange"];

// let sort = arr2 => arr2.sort();
// console.log(sort(arr2));

// // join the array

// let join = arr2 => arr2.join(",");
// console.log(join(arr2));

// //reverse the array

// let reverse = arr2=> arr2.reverse();
// console.log(reverse(arr2));

// //flat the array

// let flat = [1,2,3,[4,5,6,[7,8,9]]];
// let flatarray = flat.flat(2);
// console.log(flatarray);

// // intersection of the array

// let arr3 = [1,2,3,4,5];
// let arr4 = [4,5,6,7,8];
// let intersection = (arr3,arr4) => arr3.filter(value => arr4.includes(value));
// console.log(intersection(arr3,arr4));


// ------------------------------------------
//call back hell function example (inta feature)


// s1 -> s2 -> s3 -> s4

// function step1(fn){
//     console.log("please wait i am selecting the image...");
//     setTimeout( function(){
//         console.log("hey image is selected");
//         fn("selected image") 
//     } , 4000 ) 
// }
// function step2(image , fn){
//     console.log(`please wait i am adding filter to the ${image}...`);
//     setTimeout( function(){
//         console.log("filter is applied");
//         fn("filtered image")
//     } , 2000 ) 
// }
// function step3(filter , fn){
//     console.log(`please wait i am adding caption to the ${filter}...`);
//     setTimeout( function(){
//         console.log("caption is added");
//         fn("captioned image")
//     } , 5000 )
// }
// function step4(caption){
//     console.log(`please wait i am uploading the ${caption}`);
//     setTimeout(function(){
//         console.log("image finally uploaded");
//     } , 3000)
// }

// // callback hell => nesting of cb fn

// step1( function(image)
// {    
//     step2(image , function(filter)
//     {
//         step3(filter , function(caption)
//         {
//             step4(caption)
//         } )
//     } )
// } )

//------------------------------------------------
//call back hell function example (banking system)

// function login(fn){
//    console.log("login with your account");
//    setTimeout(function(){
//          console.log("login successful");
//          fn("login successful")
//     },2000) 
// }
// function checkbalance(logedin,fn){
//     console.log("checking balance");
//     setTimeout(function(){
//         console.log("balance is checked");
//         fn("balance checked")
//     },3000)
// }
// function withdraw(balance,fn){
//     console.log("withdraw the money");
//     setTimeout(function(){
//         console.log("money is withdrawal");
//         fn("money withdraw")
//     },6000)
// }
// function collectcash(withdraw){
//     console.log("collect the cash");
//     setTimeout(function(){
//         console.log("cash is collected");
//     },4000)
// }

// // callback hell => nesting of cb fn

// login(function(logedin)
// {
//     checkbalance(logedin, function(balance)
//     {
//         withdraw(balance, function(withdraw)
//         {
//             collectcash(withdraw)
//         })
//     })
// })


// function point1(fn){
//     console.log('wait me kr raha hu ');
//     setTimeout(function(){
//         console.log('img selected');
//         fn("img added");
//     },2000)
    
// }
// function point2(img,fn){
//     console.log('filter apply kr raha hu');
//     setTimeout(function(){
//         console.log('filter applied');
//         fn("filter added");
//     },5000)
// }
// function point3(filter,fn){
//     console.log('caption add kr raha hu');
//     setTimeout(function(){
//         console.log('caption added');
//         fn("caption added");
//     },1000)
    
// }
// function point4(caption,fn){
//    console.log('upload kr raha hu');
//     setTimeout(function(){
//         console.log('image uploaded');
//     },3000)
   
// }

// point1(function(img){
//     point2(img,function(filter){
//         point3(filter,function(caption){
//             point4(caption)
//         })
//     })
// })




// ------------------------------------------
// promise example

//  function p1(fn){
//   return new Promise(function(resolve,reject) {
//     console.log('img select kr raha hu');
//     setTimeout(function(){
//         console.log('img selected');
//         resolve("img");
//     },3000)
//     })
// }

//  function p2(img){
//     return new Promise(function(resolve,reject){
//         console.log('filter apply kr raha hu');
//         setTimeout(function(){
//             console.log('filter applied');
//             resolve("filter added img");
//         },3000)
//     })
// }

//  function p3(filter){
//     return new Promise((resolve,reject)=>{
//         console.log('caption add kr raha hu');
//         setTimeout(function(){
//             resolve('caption added img');
//         },2000)
//     })
// }

// //  function p4(caption){
// //     return new Promise(function(resolve,reject){
// //         console.log('uplode ho rahi hea');
// //         setTimeout(function(){
// //             resolve('uploaded');
// //         },3000)
// //     })
// // }

//  let p4 = (caption)=>{
//     return new Promise((resolve,reject) =>{
//         console.log('uplode ho rahi hea');
//         setTimeout(function(){
//             resolve('uploaded');
//         },3000)
//     })
// }

// //  p1()
// // .then(function(img){
// //     return p2(img)
// // })
// // .then(function(filter){
// //     return p3(filter)
// // })
// // .then(function(caption){
// //     return p4(caption)
// // })

// // .then(function(uploaded){
// //     console.log('image'+ uploaded);
// // })


// p1()
// .then((img) => p2(img))
// .then((filter) => p3(filter))
// .then((caption) => p4(caption))
// .then((uploaded) => console.log('image'+ uploaded))



//same with async awate


//  function p1(fn){
//     return new Promise(function(resolve,reject) {
//       console.log('img add kr raha hu');
//       setTimeout(function(){
//           resolve("img added");
//       },2000)
//       })
//   }
  
//    function p2(img){
//       return new Promise(function(resolve,reject){
//           console.log('filter apply kr raha hu');
//           setTimeout(function(){
//               resolve("filter applied");
//           },5000)
//       })
//   }
 
//    function p3(filter){
//       return new Promise(function(resolve,reject){
//           console.log('caption add kr raha hu');
//           setTimeout(function(){
//               resolve('caption added');
//           },2000)
//       })
//   }
  
//    function p4(caption){
//       return new Promise(function(resolve,reject){
//           console.log('uplode ho rahi hea');
//           setTimeout(function(){
//               resolve('uploaded');
//           },3000)
//       })
//   }

//   async function p14(){ 
//     let solve1 = await p1();  
//     let solve2 = await p2();
//     let solve3 = await p3(filter);  
//     let solve4 = await p4(upload);
//     console.log('img uploded');   
//    }
  
//   p14();


