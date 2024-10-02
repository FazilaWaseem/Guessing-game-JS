let user = confirm("Do you want to play the game?");
  
if (user){

}
else{
    alert("OK! Let's play next time")
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessBtn = document.getElementById("submit");
const displayMessage = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const guessInput = document.getElementById("number");

guessBtn .addEventListener("click" , () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {

    displayMessage.textContent = 'Congratulations! You ve guessed the write number';
    restartBtn.style.display = 'block';

    }else if (userGuess < randomNumber) {
        displayMessage.textContent = 'Too low! Try again.';

    }else if (userGuess > randomNumber){ 
        displayMessage.textContent = 'Too high! Try again.';
    }

});

restartBtn .addEventListener("click" , () => {
     randomNumber = Math.floor(Math.random() * 100) + 1;
     attempts = 0;

     displayMessage.textContent = "";
     guessInput.value = "";
     document.getElementById("submit").value="";
   
     

    
});

