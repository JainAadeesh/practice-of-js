// // METHOD TO CALL AN API

// let API="https://api.tvmaze.com/search/shows?q=girls"
// fetch(API)//print incomplete data

// // FETCH -> WEB API (BROWSER)-> GIVES YOU DATA BUT INCOMPLETE AT FIRST GO -> .json() to get the complete data
// // -> RETURNS A PROMISE(I CAN ONLY HANDLE PROMISE)
// // -> JSON returns a promise, with entirely complete data

// // ----------------------------------------------------------
// // FETCH
// // 1. promise

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(responce){
//     return responce.json() //entire data
// })
// .then(function(anything){
//     console.log(anything);
// })
// .catch(function(err){
//     console.log(err);
// })


// // --------------------
// // 2. async await

// async function callApi(){
//     let resp = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let data = await resp.json();
//     console.log(data);
// }

// callApi()


// // ----------------------------------------------------------
// // AXIOS -> RETURNS A PROMISE, WHICH GIVES ENTIRE DATA AT ONCE
// // 1. promise


// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     console.log(resp.data);
// })
// .catch(function(err){
//     console.log(err);
// })


// // -------
// // 2. async


// async function callApi2(){
//     let resp = await axios.get('https://api.github.com/users/jainaadeesh');
//     console.log(resp.data); 
// }
// callApi2()

//------------------------------------------
// call api using fatch and promise

// let arrapi = [
//     'https://api.github.com/users/jainaadeesh',
//     'https://api.github.com/users/alokiit',
//     'https://api.github.com/users/samarth0606'
// ]

// for (const arr of arrapi) {
//     fetch(arr)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }

// //-----------------------
// //call api using axios and promise

// let arrrapi = [
//     'https://api.github.com/users/samarth0606',
//     'https://api.github.com/users/jainaadeesh',
//     'https://api.github.com/users/alokiit'
// ]

// for (const arr of arrrapi) {
//     axios.get(arr)
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }

//-------------------------------------
//call api with fatch and async-await

// let ararapi = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com//photos',
//     'https://jsonplaceholder.typicode.com//users'
// ]

// async function apicall(ararapi) {
//     let res = await Promise.all(ararapi.map(api=>fetch(api)))
//     let data = await Promise.all(res.map(r=>r.json()))
//     console.log(data);
// }

// apicall(ararapi)

//-------------------------------------
//call api with axios and async-await

let ararapii = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/users'
]

async function apicalll(ararapii) {
    let res = await Promise.all(ararapii.map(api=>axios.get(api)))
    let data = res.map(r=>r.data)
    console.log(...data);
}

apicalll(ararapii)