'use strict'
const store = require('../store.js')
const signUpSuccess = function () {

}

const signInSuccess = function (responseData) {
  $('#gameBoard').show()
  $('#restart').show()
  $('#authForm').hide()
  $('#sign-out-button').show()
  store.user = responseData.user
  console.log(responseData.user)
}
const signInFailure = () => {
  $('#user-message').text('Email and Password do not match')
  $('#user-message').css('color', 'red')
}
const changePasswordSuccess = function () {
  $('#gameInfo').text('Successfully Changed Password!')
}
const signOutSuccess = function () {
  $('#gameInfo').text('Successfully Signed Out!')
  $('#gameBoard').hide()
  $('#authForm').show()
  $('#restart').hide()
  $('form').trigger('reset')
  store.user = null
  console.log('store:', store)
  $('#gameInfo').css('color', 'green')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signInFailure
}
