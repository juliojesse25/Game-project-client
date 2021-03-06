'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./games/events')
// const getFormFields = require('../../lib/get-form-fields')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  const playerOne = 'X'
  const playerTwo = 'O'

  const possibleWins = [
    ['cell1', 'cell2', 'cell3'],
    ['cell4', 'cell5', 'cell6'],
    ['cell7', 'cell8', 'cell9'],
    ['cell1', 'cell4', 'cell7'],
    ['cell2', 'cell5', 'cell8'],
    ['cell3', 'cell6', 'cell9'],
    ['cell1', 'cell5', 'cell9'],
    ['cell3', 'cell5', 'cell7']
  ]

  const gameWin = (superset, subset) => {
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0)
    })
  }

  let playerOneMoves = []
  let playerTwoMoves = []

  let currentPlayer = playerOne
  let currentMove = playerOneMoves

  // $('#gameInfo').text(`It is ${currentPlayer}'s turn`)
  const switchPlayer = () => {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo
      currentMove = playerTwoMoves
    } else {
      currentPlayer = playerOne
      currentMove = playerOneMoves
    }
    return currentPlayer
  }
  let gameOver = false
  const clickBoard = function (event) {
    const square = $(event.target).text()
    if (!square) {
      if (!gameOver) {
        $(event.target).text(currentPlayer)
        currentMove.push(event.target.id)
      }
      if (playerOneMoves.length + playerTwoMoves.length === 9) {
        gameOver = true
        $('#gameInfo').text('It is a draw!')
      }
      possibleWins.forEach(possibleWin => {
        const win = gameWin(currentMove, possibleWin)
        if (win) {
          // $('#gameBoard').off('click', clickBoard)
          $('#gameInfo').text('The Winner is ' + currentPlayer)
          gameOver = true
        }
      })
      if (!gameOver) {
        switchPlayer()
        $('#gameInfo').text(`It is ${currentPlayer}'s turn`)
      }
    } else if (square === 'X' || square === 'O') {
      $('#player-feedback').text('Invalid move')
      setTimeout(() => {
        $('#player-feedback').text('')
      }, 1000)
    }
  }

  $('#gameBoard').on('click', clickBoard)
  // const gamePlay = () => {
  //   $('#gameBoard').on('click', clickBoard)
  // }
  // gamePlay()

  const newGame = function (event) {
    event.preventDefault()
    $('.cells').text('')
    playerOneMoves = []
    playerTwoMoves = []
    // $('#gameBoard').on('click', clickBoard)
    currentPlayer = playerOne
    currentMove = playerOneMoves
    gameOver = false
    $('#gameInfo').text(`It is ${currentPlayer}'s turn`)
    // gamePlay()
    // $('#gameBoard').on('click', clickBoard)
    // switchPlayer()
  }

  $('#restart').on('click', newGame)

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})
