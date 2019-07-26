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

let { name, age, favoriteFood, favoriteShow } = dog;

console.log(`hello my name is ${name}, I am ${age} years old, my favorite food is  ${favoriteFood} and I love watching 
${favoriteShow}
`)