const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function () {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('This is my form data: ' + formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('This is my form data: ' + formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function () {
  event.preventDefault()
  const form = event.target
  console.log('form:', form)

  const formData = getFormFields(form)
  console.log('formData:', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutfailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
