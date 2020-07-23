//improve this original paragraph and print some important information 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let storyWords = story.split(" ")


let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))

let reallycount = 0
let verycount = 0
let basicallycount = 0

for (let i= 0; i < storyWords.length; i++) {
  if (storyWords[i] ==='really'){
    verycount += 1
  } else if (storyWords[i] ==='very'){
    reallycount += 1
  }else if (storyWords[i] ==='actually'){
   basicallycount += 1
  }  
}

let sentenceCount = 0
storyWords.forEach(word => {
  if (word[word.length -1]=== "." || word[word.length-1] === "!"){
    sentenceCount +=1
  }
})

console.log("Word count" , storyWords.length)
console.log("The sentence count", sentenceCount)
console.log("really", reallycount )
console.log("very", verycount  )
console.log("basically", basicallycount)
console.log(betterWords.join( " "))