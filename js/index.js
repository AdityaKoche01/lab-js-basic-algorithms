// Iteration 1: Names and Input
const firstPlayerChoice = "paper";
const secondPlayerChoice = "rock";
//
// Iteration 2: Conditionals
const firstPossibility = firstPlayerChoice === "paper" && secondPlayerChoice === "rock";
const secondPossibility = firstPlayerChoice === "rock" && secondPlayerChoice === "scissors";
const thirdPossibility = firstPlayerChoice === "scissors" && secondPlayerChoice === "paper";
const fourthPossibility = secondPlayerChoice === "paper" && firstPlayerChoice === "rock";
const fifthPossibility = secondPlayerChoice === "rock" && firstPlayerChoice === "scissors";
const sixthPossibility = secondPlayerChoice === "scissors" && firstPlayerChoice === "paper";
const seventhPossibility = firstPlayerChoice === secondPlayerChoice;


// Iteration 3: Loops
if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log("First player won!");
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log("Second player won!");
} else if (seventhPossibility) {
  console.log("It's a tie!");
} else {
  console.log("Something went wrong!");
}
