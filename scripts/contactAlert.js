const firstName = document.getElementById('firstName')
const form = document.getElementById('ContactForm')

function onSubmitFunction(event) {
  alert(firstName.value + ' Thanks for the message!')
}
