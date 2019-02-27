'use strict'
const store = require('../store.js')
const signUpSuccess = () => {
  $('#gameInfo').text('Sign Up Successful!')
  $('#sign-up-form')[0].reset()
  $('#gameInfo').css('color', 'green')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
const signUpFailure = () => {
  $('#gameFeedBack').text('Error on Sign Up!')
  $('#gameFeedBack').css('color', 'red')
  $('#sign-up-form')[0].reset()
  setTimeout(() => $('#gameFeedBack').text(''), 2000)
}

const signInSuccess = function (responseData) {
  $('#gameBoard').show()
  $('#restart').show()
  $('#authForm').hide()
  $('#sign-out-button').show()
  $('#change-password-dropDown').show()
  $('#sign-up-dropDown').hide()
  $('#gameInfo').text(`Successfully signed in!`)
  $('#gameInfo').css('color', 'green')
  setTimeout(() => $('#gameInfo').text(`It is X's turn`), 2000)
  store.user = responseData.user
}
const signInFailure = () => {
  $('#gameInfo').text('Email and Password do not match')
  $('#gameInfo').css('color', 'red')
  $('#sign-in-form')[0].reset()
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
const changePasswordSuccess = function () {
  $('#gameInfo').text('Successfully Changed Password!')
  $('#gameInfo').css('color', 'green')
  $('#change-password-form')[0].reset()
  setTimeout(() => $('#gameInfo').text(''), 2000)
}

const changePasswordFailure = () => {
  $('#gameInfo').text('Error in changing Password')
  $('#gameInfo').css('color', 'red')
  $('#change-password-form')[0].reset()
  setTimeout(() => $('#gameInfo').text(''), 2000)
}

const signOutSuccess = function () {
  $('#gameInfo').text('Successfully Signed Out!')
  $('#gameBoard').hide()
  $('#authForm').show()
  $('#restart').hide()
  $('#sign-out-button').hide()
  $('#change-password-dropDown').hide()
  $('#sign-up-dropDown').show()
  $('form').trigger('reset')
  store.user = null
  $('#gameInfo').css('color', 'green')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
const signOutFailure = () => {
  $('#gameInfo').text('An Error Occured')
  $('#gameInfo').css('color', 'red')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
