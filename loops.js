
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

// Create the secretMessage array 
const secretMessage = animals.map(letter =>
letter[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array 
const smallNumbers = bigNumbers.map(number => number/100)
 //findIndex to look up a element that is equal to "elephant" and a animal name  that start with "s"
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(element =>{
  return element === "elephant"
})

const startsWithS = animals.findIndex(letter =>
{
  return letter[0]=== "s"
})
console.log(startsWithS)
//practice with methods
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);