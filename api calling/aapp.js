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
//     let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(resp.data); 
// }
// callApi2()


// ------------------------------------------
//calling api with async await

// let arrApi = [
//     'https://api.github.com/users/Samarth0606',
//     'https://api.github.com/users/alokiit',
//     'https://api.github.com/users/jainaa',
// ]


// async function fetchApi(){
    //     let response = await Promise.all(arrApi.map(url => fetch(url)));
    //     let data = await Promise.all(response.map(res => res.json()));
    //     console.log(data);
    // }
    // fetchApi();

//-----------------------------------
//calling api with fatch 
//using promice
    
 let arrApi = [
        'https://api.github.com/users/Samarth0606',
        'https://api.github.com/users/alokiit',
        'https://api.github.com/users/jainaa',
 ]

for (const Api of arrApi) {
    fetch(Api)//fatch
    .then((risponce)=>risponce.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}


