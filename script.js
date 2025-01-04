let player1 = "player1";
let player2 = "player2";

let player1Wins = 0; //variable keeps track of number of time player1 wins the game//
let player2Wins = 0; //variable keeps track of number of time player2 wins the game//
//0 indicates at the start neither of the player won. both player starts with the value 0//


function editName() {
    player1 = prompt("Change player1 Name");
    player2 = prompt("Change player2 Name");

    if (player1.length < 1 || player2.length < 1) {
        alert('Please enter a valid name');
        return;
    }
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}


function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "diceroll.gif");
    diceNum2.setAttribute("src", "diceroll.gif");

    let result = document.querySelector('h1');
    result.innerHTML = ""; // this clears previous result

    //canvas interaction
    var canvas = document.getElementById("test-canvas");
    var context = canvas.getContext('2d') // this method gets the drawing context for the canvas.//
    context.moveTo(20, 20);
    //context.lineTo(280, 180);
    // context.stroke();
    // clear canvas before each roll
   // context.clearrect(0,0, canvas.width, canvas.height);

    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 5) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

        // Determine the winner
        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            player2Wins++; //increments player2's wins
            result.innerHTML = (player2 + " WINS! total wins:" + player2Wins);
        } else {
            player1Wins++; //increments player1's wins
            result.innerHTML = (player1 + " WINS! total wins:" + player1Wins);
        }

        canvas.addEventListener("mousemove", function(e) { 
            var cRect = canvas.getBoundingClientRect(); //this method returns an object with properties that describe the size of the canvasand its position relative to the viewport.
            var canvasX = Math.round(e.clientX - cRect.left);// this gives  x-coordinate of the mouse inside the canvas.
            var canvasY = Math.round(e.clientY - cRect.top);// this gives y-coordinate of the mouse inside the canvas.
            context.clearRect(0, 0, canvas.width, canvas.height);// this clears a rectangular area of the canvas.(x,y,width, height)
            context.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);// this will display the current mouse position (in pixels)on the canvas,
        });
         context.fillStyle = "#14e9f3"; //set color
         //context.fillRect(50, 50, 100, 100);
    }, 2500); //adding 2.5 seconds delay in show dice roll//
}
