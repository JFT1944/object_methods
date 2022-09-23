function createInstructor(firstName, lastName){
return {
    [firstName] : lastName, 
    [lastName] : firstName
}
}
console.log(createInstructor('john', 'cow'))

let favoriteNumber = 32
let obj3 = {
    [favoriteNumber] : 'cow'
}


// let instructor = {
//     function sayHi(){
//         return 'hi'
//     }
// }


function createAnimal(species, verb, noise){
let obj = {'species' : species}
 let obj2 = obj[verb] = noise
  return obj2
}

let s = createAnimal('cow', 'moo', 'eeeeh')

console.log(s)