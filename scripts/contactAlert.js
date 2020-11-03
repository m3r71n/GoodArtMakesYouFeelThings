const firstName = document.getElementById('firstName')
const form = document.getElementById('ContactForm')

function onSubmitFunction(event) {
  alert(firstName.value + ', thanks for the message!')
}
