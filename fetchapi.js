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




async function play() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data.map(item => {
            document.write(`<li>${item.title}</li>`)
        }))
        .catch(error => document.write(error.message))

}



// document.querySelector('.table').innerHTML = play()




const func1 = function () {
    return new Promise((resolve, reject) => {
        resolve('Currently waiting on')
    })
}


const func2 = function (data) {
    return new Promise((resolve, reject) => {
        resolve(`${data} the brightline`)
    })
}

func1()
    .then((data) => func2(data))
    .then(data => console.log(data))
