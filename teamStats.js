// Practice objects with get() to change the values of the properties

const team = {
  _players :[
    {firstName: 'Pablo',
    lastName:'Sanchez',
    age: 11},
    {firstName: 'Jose',
    lastName:'Ramirez',
    age: 11},
    {firstName: 'Pedro',
    lastName:'Ruiz',
    age: 11} ],
  _games : [
    {opponent:'Broncos',
    teamPoints: 42,
    opponentPoints:27
  },
  {opponent:'estrellitas',
    teamPoints: 100,
    opponentPoints:99
  },
  {opponent:'lunas',
    teamPoints: 98,
    opponentPoints:1
  }
  ],
  get players (){
    return this._players;
      },
  get games (){
    return this._games;
  },

addPlayer (firstName, lastName, age){
  let player ={
    firstName:firstName,
    lastName:lastName,
    age:age
  };
  this.players.push(player);
},
addGame(opponent,teamPoints,oppPoints){
  let game ={
    opponent:opponent,
    teamPoints: teamPoints,
    opponentPoints:oppPoints
  };
  this.games.push(game)
},
};
team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76)

team.addGame('poker',3, 1)

console.log(team._players)
console.log(team._games)



