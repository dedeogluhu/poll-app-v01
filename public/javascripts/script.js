let addChoiceButton = document.querySelector('#addChoiceBtn');
let submitButton = document.querySelector('#submit');
let addChoiceInput = document.querySelector('#choice');
let form = document.querySelector('.form');
let questionInput = document.querySelector('#question');
let addedChoices = document.querySelector('#choices-added');

form.addEventListener('submit', (event) => { event.preventDefault(); });
addChoiceButton.addEventListener('click', addChoice);
submitButton.addEventListener('click', postQuestion);

let choices = []

function addChoice() {
    let choice = addChoiceInput.value
    choices.push(choice);
    let element = document.createElement('span');
    element.innerHTML = choice;
    element.classList.add('choice');
    addedChoices.appendChild(element);
    addChoiceInput.value = '';
    addChoiceInput.focus();
}

function postQuestion() {
    axios.post('http://localhost:8800/', {
        question: questionInput.value,
        choices
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    questionInput.value = '';
    choices = []
}