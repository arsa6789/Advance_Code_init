// import fs from "fs";
const name = "Abdul Rehman";

// setTimeout callback
// setTimeout(()=>{
//     console.log(`Waited for ${name} for 1 second`)
// }, 1000)

//nested setTimeout callback
// setTimeout(()=>{
//     console.log('3')
//     setTimeout(()=>{
//         console.log('2')
//         setTimeout(() => {
//             console.log('1')
//         }, 1000);
//     }, 1000)
// }, 1000)

//button event handler  in browser javascript
// const btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     setTimeout(()=>{
//         console.log('Hi')
//     }, 1000)
// })

//error first callback
// fs.readFile('./text2.txt', {encoding: 'utf-8'}, (err, data)=>{
//     if(err){
//         console.log(`Hey, this is the error ;) ${err}`)
//     }
//     else{
//         console.log(`Hey your data is : ${data}`)
//     }
// })

// Create a new Promise
// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 2);
//   if(rand === 0){
//     resolve()
//   }
//   else{
//     reject()
//   }
// });
// myPromise
//     .then(()=>console.log('Success'))
//     .catch(()=>console.log('Something went wrong'))

//fs readfile with promises
// fs.promises
//   .readFile('./text.txt', {encoding: 'utf-8'})
//   .then((data)=>{console.log(data)})
//   .catch((error)=>{console.log

//fetch with promises in Vanilla js
// async function fetchData() {
//   try{
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     if(!response.ok){
//       throw new Error(`HTTP error occurred : ${ response.status}`)
//     }
//     const data = await response.json();
//     console.log(data)
//   }catch(error){
//     console.log(data)
//   }
// }
// fetchData()

//fetch promises with Nodejs
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))