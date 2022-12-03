// I will plan on adding this in sync with the html once I learn how to connect the two...
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 1;

if (runnerAge >= 18 && registeredEarly === true) {
  //console.log(raceNumber + 1000);
}

if (runnerAge >= 18 && registeredEarly === true) {
  console.log( `Thanks for your early registration, your race will begin at 9:30 am and your race number is ${raceNumber + 1000}`)
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`Late adults will run at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Thank you for participating in the race, your number is ${raceNumber}! and the race will begin at 12:30 pm`)
}