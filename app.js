;(function () {
  'use strict'
  console.log('Tic Tac Toe')
//------------------------------------------------------------------------------
//  Initializes variables.  Prompts users for player names and sets win counts
//  to 0.
//------------------------------------------------------------------------------
  // create a playerTurn variable
  var player1DisplayName = prompt("Enter name for player1.")
  var player2DisplayName = prompt("Enter name for player2.")
  var playerTurn = true
  //create win count for player1 and player 2
  var player1wins = 0
  var player2wins = 0
  // SELECT ALL BOXES WITH CLASS BOXES
  var boxes = document.querySelectorAll('.box')
  // LOOP THROUGH THE BOXES AND ADD CLICK EVENT LISTENER
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', changeBackgroundColor)
  }
//------------------------------------------------------------------------------
//  Main running logic.  When a box is clicked remove the event listener on the
//  box, then place and X or an O depending on the player turn, then the
//  function checkWinner runs.
//------------------------------------------------------------------------------
  function changeBackgroundColor () {
    console.log('the box clicked:', this)
    // check who's turn it is
    if (playerTurn) {
      console.log('Player 1 Turn', this.id)
      this.className += ' player1'
      this.removeEventListener('click', changeBackgroundColor)
      this.innerHTML = "X"
      checkWinner('player1')
    } else {
      console.log('Player 2 Turn', this.id)
      this.className += ' player2'
      this.removeEventListener('click', changeBackgroundColor)
      this.innerHTML = "O"
      checkWinner('player2')
    }
    // switch playerTurn
    playerTurn = !playerTurn
  }
//------------------------------------------------------------------------------
//  The function checkWinner takes in a player, then creates an array of boxes
//  that played has played, then that array is traversed by a forloop that
//  pushes the played boxes ids into an empty array called winArray, then
//  winArray is used with function winningArray in 8 different if statements
//  to check to see if any of the 8 different win conditions are satisfied.
//------------------------------------------------------------------------------
  //takes in an array and an element and if the element is found in the array it returns true.
  function winningArray (arr, el) {
    return arr.indexOf(el) > -1
  }
  function checkWinner (player) {
    //playedBoxes is array of boxes that have the .player class.
    var playedBoxes = document.querySelectorAll('.' + player)
    //playedBoxesNum is used to check if there is a tie.  It counts all the boxes that are played.
    var playedBoxesNum = document.querySelectorAll('.' + "player1").length + document.querySelectorAll('.' + "player2").length
    var winArray = []
    var gameWon = false
    console.log('Checking for winner' + player)
    for (var i = 0; i < playedBoxes.length; i++) {
      console.log('played:', playedBoxes[i].id)
      winArray.push(playedBoxes[i].id.toString())
    }
    console.log(winArray)
    if (winningArray(winArray, '0') && winningArray(winArray, '1') && winningArray(winArray, '2')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '3') && winningArray(winArray, '4') && winningArray(winArray, '5')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '6') && winningArray(winArray, '7') && winningArray(winArray, '8')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '0') && winningArray(winArray, '3') && winningArray(winArray, '6')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '1') && winningArray(winArray, '4') && winningArray(winArray, '7')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '2') && winningArray(winArray, '5') && winningArray(winArray, '8')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '0') && winningArray(winArray, '4') && winningArray(winArray, '8')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (winningArray(winArray, '6') && winningArray(winArray, '4') && winningArray(winArray, '2')) {
      confirm(player + ' Wins! Play again?')
      gameWon = true
    }
    else if (playedBoxesNum === 9){
      confirm('It is a tie! Play again?')
      gameWon = true
    }
    //If the game is won then reset the board and the gameWon flag
    if (gameWon){
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].className = "box"
        boxes[i].addEventListener('click', changeBackgroundColor)
        boxes[i].innerHTML = ""
      }
      if (player === "player1"){
        player1wins += 1
      }
      else if (player === "player2"){
        player2wins += 1
      }
      alert(player1DisplayName + " wins: " + player1wins + "\n" + player2DisplayName + " wins: " + player2wins)
      gameWon = false
    }
  }
}())
