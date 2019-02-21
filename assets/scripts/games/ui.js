'use strict'
const store = require('../store.js')
const signUpSuccess = () => {
  $('#gameInfo').text('Sign Up Successful!')
  $('#gameInfo').css('color', 'green')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
const signUpFailure = () => {
  $('#gameInfo').text('Error on Sign Up!')
  $('#gameInfo').css('red')
  setTimeout(() => $('#gameInfo').text(''), 2000)
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
  console.log(responseData.user)
}
const signInFailure = () => {
  $('#gameInfo').text('Email and Password do not match')
  $('#gameInfo').css('color', 'red')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}
const changePasswordSuccess = function () {
  $('#gameInfo').text('Successfully Changed Password!')
  $('#gameInfo').css('color', 'green')
  setTimeout(() => $('#gameInfo').text(''), 2000)
}

const changePasswordFailure = () => {
  $('#gameInfo').text('Error in changing Password')
  $('#gameInfo').css('color', 'red')
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
  console.log('store:', store)
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
