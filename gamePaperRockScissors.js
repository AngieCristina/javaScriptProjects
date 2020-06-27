const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput ==="paper"|| userInput ==="scissors" ||userInput === "bomb"){return userInput}
  else {
  console.log("error!")
  }
  }
  
  const getComputerChoice =() => {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 1) {
      return "rock"
    }else if (randomNumber === 2){
      return "paper"
    }else {
      return "scissors"
    }
  }
  
  const userChoice= ()=>{if (userChoice === "rock"){
    if (computerChoice === "paper"){
      return "Computer won"
    }return "User won"
  }
  }
  
    const determineWinner = (userChoice,computerChoice) => {
      if(userChoice === "bomb"){
        return "User won"
      }if (userChoice === computerChoice){
        return "Game was tie";
      }else if (userChoice === "paper" || "rock" || "scissors"){
       if(computerChoice === "rock"){
        return "The computer won"
        }else {
          return "You won!";
        }
      }}
  
  const playGame = () => {
    const userChoice = getUserChoice("scissors")
    const computerChoice = getComputerChoice()
  console.log("You threw: " + userChoice);
  console.log ("The computer threw: " + computerChoice);
  console.log (determineWinner(userChoice,computerChoice))
  };
  
  playGame();