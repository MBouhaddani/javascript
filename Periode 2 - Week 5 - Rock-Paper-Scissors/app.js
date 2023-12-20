 // Step 4 - Javascript DOM
 const computerChoice = document.getElementById('computerChoice');
 const playerChoice = document.getElementById('playerChoice');
 const resultOutput = document.getElementById('resultOutput');
 
 const possibleChoices = document.querySelectorAll('button');
 
 let player, computer, result;
 
 // Step 5 - EventListener
 possibleChoices.forEach(choice => {
     choice.addEventListener('click', (e) => {
         player = e.target.id;
         playerChoice.innerHTML = player;
         generateComputerChoice(); // Generate computer choice after player selects a choice
         getResult(); // Calculate and display the result
     });
 });
 
 // Step 6 - generateComputerChoice()
 function generateComputerChoice() {
     const choices = ['rock', 'paper', 'scissors'];
     const randomNum = Math.floor(Math.random() * choices.length);
     computer = choices[randomNum];
     
     computerChoice.innerHTML = computer;
 }
 
 // Step 7 - getResult()
 function getResult() {
     if (computer === player) {
         result = "gelijkspel";
     } else if (computer === 'rock' && player === 'paper') {
         result = "je hebt gewonnen!";
     } else if (computer === 'rock' && player === 'scissors') {
         result = "je hebt verloren!";
     } else if (computer === 'paper' && player === 'scissors') {
         result = "je hebt gewonnen!";
     } else if (computer === 'paper' && player === 'rock') {
         result = "je hebt verloren!";
     } else if (computer === 'scissors' && player === 'rock') {
         result = "je hebt gewonnen!";
     } else if (computer === 'scissors' && player === 'paper') {
         result = "je hebt verloren!";
     }
     
     resultOutput.innerHTML = result;
 }