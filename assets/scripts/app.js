'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const gameEvents = require('./games/events')
// const getFormFields = require('../../lib/get-form-fields')

// use require without a reference to ensure a file is bundled
// require('./example')

// const onSignUp = () => {
// return $.ajax({
//   url:
//   method: 'POST'
// })
// }

$(() => {
  // your JS code goes here
  let currentPlayer = 'X'

  const gameWinner = () => {
    if (gameBoard[0] === gameBoard[1] === gameBoard[2] || gameBoard[0] === gameBoard[3] === gameBoard[6] || gameBoard[0] === gameBoard[4] === gameBoard[8] || gameBoard[3] === gameBoard[4] === gameBoard[5] || gameBoard[6] === gameBoard[7] === gameBoard[8] || gameBoard[2] === gameBoard[4] === gameBoard[6] || gameBoard[2] === gameBoard[5] === gameBoard[8]) {
      console.log('The Winner is: ' + currentPlayer)
    }
  }

  const switchPlayer = () => {
    if (currentPlayer === 'O') {
      currentPlayer = 'X'
    } else {
      currentPlayer = 'O'
    }
    return currentPlayer
  }

  let gameBoard = ['', '', '', '', '', '', '', '', '']

  $('#cell1').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[0] = currentPlayer
    gameWinner()
    console.log(gameBoard)
  })

  $('#cell2').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[1] = currentPlayer
    gameWinner()
  })

  $('#cell3').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[2] = currentPlayer
    gameWinner()
  })

  $('#cell4').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[3] = currentPlayer
    gameWinner()
  })

  $('#cell5').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[4] = currentPlayer
    gameWinner()
  })

  $('#cell6').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[5] = currentPlayer
    gameWinner()
  })

  $('#cell7').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[6] = currentPlayer
    gameWinner()
  })

  $('#cell8').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[7] = currentPlayer
    gameWinner()
  })

  $('#cell9').on('click', (event) => {
    $(event.target).text(switchPlayer)
    gameBoard[8] = currentPlayer
    gameWinner()
    console.log(gameBoard)
  })

  $('#restart').on('click', function (event) {
    event.preventDefault()
    $('.cells').text('')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    console.log('Game Board: ' + gameBoard)
  })
})
