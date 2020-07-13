const getSleepHours =(day)=>{
  switch(day) {
    case "Monday":
      return 8
      break;
    case "Tuesday":
      return 6
      break;
      case "Wednesday":
      return 5
      break;
      case "Thursday":
      return 7
      break;
      case "Friday":
      return 6
      break;
      case "Saturday":
      return 9
      break;
      case "Sunday":
      return 5
      break;
    default:
     return "What do you mean? "
  }
  }
  
  const getActualSleepHours = () =>
  8+6+5+7+6+9+15
  const getIdealSleepHours = idealHours=>
  idealHours * 7; 
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours){
      return console.log("You got the perfect amount of sleep");
    } if (actualSleepHours > idealSleepHours){
      console.log("You got more sleep than needed");
    } else {
      console.log("You got " + (idealSleepHours- actualSleepHours) + "hour(S) less sleep than you needed this week . Get some rest");
    }
  
  }
  
  calculateSleepDebt()
  //Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.