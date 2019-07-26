// const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => response.json())
//     .then(data => data)



// let firstFunc = function () {
//     return new Promise((resolve, reject) => {
//         resolve('Your Dog Ate')
//     })
// }

// let secondFunc = function (data) {
//     return new Promise((resolve, reject) => {
//         resolve(`${data} way too much`)
//     })
// }


// firstFunc()
//     .then((data) => (secondFunc(data)))
//     .then((data) => {
//         // this data has both data from func1 and func2
//         console.log(data)
//     })



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))