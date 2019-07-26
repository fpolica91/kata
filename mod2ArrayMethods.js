const fullName = "German Fabricio Policarpo"
console.log(fullName.startsWith('German'))
console.log(fullName.endsWith('Policarpo'))
console.log(fullName.startsWith('Fabricio', 7))

// Object destructuring

let dog = {
    name: "Chloe Antonio",
    age: 2,
    favoriteFood: 'Poultry',
    favoriteShow: "Dog tv"
}

let { name,
    age,
    favoriteFood,
    favoriteShow
} = dog;

console.log(`hello my name is ${name}, I am ${age} years old, my favorite food is  ${favoriteFood} and I love watching 
${favoriteShow}
`)


// 3 is assigned to a, 4 is assigned to b overwritting 2, c is undefined, and d remains 1. 
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d);

const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

const allAnimals = [...reptiles, ...mammals]
console.log(allAnimals)

function add(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
function addReduce(...numbers) {
    let sum = 0;
    return numbers.reduce((sum, next) => {
        return sum + next;
    })

}

console.log(add(1, 3, 4, 5, 5))
console.log(addReduce(1, 3, 4, 5, 5))