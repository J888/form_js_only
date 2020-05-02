let submitButton = document.getElementById('submit-button')
let firstNameInput = document.getElementById('fname')
let lastNameInput = document.getElementById('lname')
let firstNameDisplay = document.getElementById('firstNameDisplay')
let lastNameDisplay = document.getElementById('lastNameDisplay')
let submittedResultHeader = document.getElementById('submittedResultHeader')


submitButton.addEventListener('click', () => {
  let { value: first } = firstNameInput
  let { value: last } = lastNameInput

  if (!first || !last) {
    alert("don't leave anything empty")
    return;
  }

  submittedResultHeader.style.display = 'inline'
  firstNameDisplay.innerText = first
  lastNameDisplay.innerText = last
  // alert(`You submitted first name '${first}' and last name '${last}'`)
})
