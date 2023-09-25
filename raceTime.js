let raceNumber = Math.floor(Math.random() * 1000);
let runnerEarlyReg = true;
let runnerAge = 16;
let noReg = false;

if (runnerAge >= 18 && runnerEarlyReg === true) {
  console.log(raceNumber += 1000)
}

if (runnerAge >= 18 && runnerEarlyReg === true && noReg !== true) {
  console.log('Your race time is 9:30am. Your race number is ' + raceNumber) 
}

else if (runnerAge >= 18 && runnerEarlyReg !== true && noReg !== true)  {
  console.log('Your race time is 11:00am. Your race number is ' + raceNumber)
}

else if (runnerAge < 18 && noReg !== true)  {
  console.log('Your race time is 12:30pm. Your race number is ' + raceNumber)
}

else if (noReg === true)  {
  console.log('Please call registration at 555-555-5555')
}
