
//Nested Loops to find out the followers in two arrays
const bobsFollowers = ["Pepe", "Rosa", "Maria", "Daniela"]

const tinasFollowers = ["Pepe", "Rosa","Selene"]

const mutualFollowers = []

for ( let i = 0; i< bobsFollowers.length; i++){
  for(let x = 0 ; x< tinasFollowers.length; x++){
    if(bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(tinasFollowers[x])
    }
  }
}
// to find the secret message with map and forEach
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(letter =>
letter[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number/100)