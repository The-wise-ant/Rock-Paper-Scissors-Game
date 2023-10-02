// variabili DOM

    //score variables
    let counter = document.getElementById('counter');
    let player1Score = document.getElementById('player1-score');
    let player2Score = document.getElementById('player2-score');

    //choice variables

    let picks = document.getElementById('picks');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const rock = document.getElementById('rock');

    //outputs
    let chosenPick = document.getElementById('chosen-pick');
    let result = document.getElementById('result');
    let outputs = document.getElementById('outputs');


    // assets

    const winSound = new Audio('assets/sounds/win.mp3');
    const loseSound = new Audio('assets/sounds/lose.mp3');
    const tieSound = new Audio('assets/sounds/tie.mp3');



    picks.addEventListener('click', (event) => checkWhoWon());


    //keeps track of total rounds played regardless if it was win,lore or tie
    function addCounter() {
      counter.textContent = parseInt(counter.textContent) + 1;
    }




    //it generates a random choice from an array whose elements have have the properties of the images for rock paper and scissors
    function randomPick() {
      const possiblePicks = [
        { name: 'paper', url: "assets/images/paper.png" },
        { name: 'scissors', url: "assets/images/scissors.png" },
        { name: 'rock', url: "assets/images/rock.png" }]

      let randomIndex = Math.floor(Math.random() * 3)
      return { name: possiblePicks[randomIndex].name, url: possiblePicks[randomIndex].url }
    }


    let cpuImage;

    //// Main game logic, it generates a CPU choice and compare it to the player's and checks who won
    function checkWhoWon() {
      if (typeof cpuImage === 'object') { cpuImage.remove() }
      addCounter();

      let userPick = event.target.id
      const cpuPick = randomPick();


      cpuImage = document.createElement('img');
      cpuImage.setAttribute('src', cpuPick.url);
      cpuImage.setAttribute('id', 'cpuImage');
      outputs.appendChild(cpuImage);


      chosenPick.textContent = ` AI picked ${cpuPick.name}!`;

      setTimeout(() => {

        if (userPick == cpuPick.name) { tieSound.play(); alert('You draw'); result.textContent = 'You draw'; };


        if (userPick == "paper" && cpuPick.name == "rock") { winSound.play(); alert('you won!'); result.textContent = 'you won!'; player1Score.textContent++; };
        if (userPick == "paper" && cpuPick.name == "scissors") { loseSound.play(); alert('you lose!'); result.textContent = 'you lose!'; player2Score.textContent++ };


        if (userPick == "scissors" && cpuPick.name == "rock") { loseSound.play(); alert('you lose!'); result.textContent = 'you lose!'; player2Score.textContent++ };
        if (userPick == "scissors" && cpuPick.name == "paper") { winSound.play(); alert('you won!'); result.textContent = 'you won!'; player1Score.textContent++ };

        if (userPick == "rock" && cpuPick.name == "scissors") { winSound.play(); alert('you won!'); result.textContent = 'you won!'; player1Score.textContent++ };
        if (userPick == "rock" && cpuPick.name == "paper") { loseSound.play(); alert('you lose!'); result.textContent = 'you lose!'; player2Score.textContent++ };

      }, 200)


    }