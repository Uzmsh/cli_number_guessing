import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-25: ",
    }
]);
console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulations you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
console.log(randomNumber);
