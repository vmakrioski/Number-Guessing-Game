let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");

const answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_numberss = [];

const play = () => {
  let user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guessed_numberss.push(user_guess);
    no_of_guesses += 1;

    if (user_guess < answer) {
      message1.innerHTML = "Your guess is too low.";
      message2.innerHTML = "No. of guesses: " + no_of_guesses;
      message3.innerHTML = "Guessed numbers are: " + guessed_numberss;
    } else if (user_guess > answer) {
      message1.innerHTML = "Your guess is too high.";
      message2.innerHTML = "No. of guesses: " + no_of_guesses;
      message3.innerHTML = "Guessed numbers are: " + guessed_numberss;
    } else if (user_guess == answer) {
      message1.innerHTML = "You Win!";
      message2.innerHTML = "The number was: " + answer;
      message3.innerHTML = "You guessed it in " + no_of_guesses + " guesses";
      document.getElementById("my_btn").disabled = true;
    }
  }
};
