function stringTransformer(str) {
    let arr = []
    let nuevo = str.split(' ').reverse()
    let item = nuevo.map(words => {
        let letters = words.split('')
        let map = letters.map(x => {
            return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
        }).join("")
        arr.push(map)

    })
    return arr.join(' ')

}

// stringTransformer('Example String')

let string = "Example String"

string
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    .join('')
