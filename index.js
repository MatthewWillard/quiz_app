'use strict';

let questionNumber = 1;

let score = 0;

const questionsAndAnswers = [
  {
    number: 1,
    question: "What are the words of House Martell?",
    answer1: "We Stand Together",
    answer2: "Unbowed, Unbent, Unbroken",
    answer3: "Growing Strong",
    answer4: "Proud to be Faithful"
  },
  {
    number: 2,
    question: "What are the words of House Stark?",
    answer1: "Ours is the Fury",
    answer2: "We Do Not Sow",
    answer3: "Winter is Coming",
    answer4: "Growing Strong"
  },
  {
    number: 3,
    question: "What are the words of House Baratheon?",
    answer1: "Righteous in Wrath",
    answer2: "As High as Honor",
    answer3: "Fire and Blood",
    answer4: "Ours is the Fury"
  },
  {
    number: 4,
    question: "What are the words of House Lannister?",
    answer1: "A Lannister always pays his debts",
    answer2: "Hear Me Roar",
    answer3: "Family, Duty, Honor",
    answer4: "We Do Not Sow"
  },
  {
    number: 5,
    question: "What are the words of House Greyjoy?",
    answer1: "We Do Not Sow",
    answer2: "The Old, The True, The Brave",
    answer3: "Honed and Ready",
    answer4: "None So Wise"
  },
  {
    number: 6,
    question: "What is the sigil of House Targaryen?",
    answer1: "A three-headed dragon, black on red",
    answer2: "A three-headed dragon, red on black",
    answer3: "A golden lion on a crimson field",
    answer4: "Gray direwolf on a ice-white field"
  },
  {
    number: 7,
    question: "What is the sigil of House Greyjoy?",
    answer1: "A golden rose on a grass-green field",
    answer2: "A leaping trout, silver, on a field of rippling blue and red",
    answer3: "A red sun pierced by a golden spear",
    answer4: "A golden kraken upon a black field"
  },
  {
    number: 8,
    quesiton: "What is the sigil of House Martell?",
    answer1: "A red sun pierced by a golden spear",
    answer2: "A golden kraken upon a black field",
    answer3: "The moon-and-falcon, white, upon a sky blue field",
    answer4: "A crowned stag, black, on a golden field	"
  },
  {
    number: 9,
    question: "What is the sigil of House Baratheon?",
    answer1: "A three-headed dragon, red on black",
    answer2: "A grey direwolf on an ice-white field",
    answer3: "A crowned stag, black, on a golden field",
    answer4: "A golden rose on a grass-green field"
  },
  {
    number: 10,
    question: "What is the sigil of House Clegane?",
    answer1: "A shoal of silver fish upon a pale green field",
    answer2: "Three dogs in the yellow of autumn grass",
    answer3: "A fox head in a circle of flowers",
    answer4: "A yellow sun and crescent moon on quartered rose and azure"
  }
];

const answers = [
  "Unbowed, Unbent, Unbroken",
  "Winter is Coming",
  "Ours is the Fury",
  "Hear Me Roar",
  "We Do Not Sow",
  "A three-headed dragon, red on black",
  "A golden kraken upon a black field",
  "A red sun pierced by a golden spear",
  "A crowned stag, black, on a golden field",
  "Three dogs in the yellow of autumn grass"
];

/*function startButton() {
    $("#js-start-button").click(function(event) {
        questionTemplate();
    });
}

function next() {

    const question = questionSet[questionNum - 1];
  
    const questionsAnswered = questionNum - 1;
  
    $('#container').html(questionTemplate());
*/}

function startQuiz() {
    $().on('click', '#js-start-button', function(event) {
        questionTemplate()
    });
}

function questionTemplate() {
    return `
    <section>
    <h1>${questionsAndAnswers.question}</h1>
    <form>
        <fieldset>
            <label>
                <input class="answer" type="radio" name="option"></input>
                <span>${questionsAndAnswers.answer1}</span>
            </label>
            <label>
                <input class="answer" type="radio" name="option"></input>
                <span>${questionsAndAnswers.answer2}</span>
            </label>
            <label>
                <input class="answer" type="radio" name="option"></input>
                <span>${questionsAndAnswers.answer3}</span>
            </label>
            <label>
                <input class="answer" type="radio" name="option"></input>
                <span>${questionsAndAnswers.answer4}</span>
            </label>
        </fieldset>
        <button id="submit">Submit</button>
    </form>
    `;
}

function runItAll() {
    startButton();
}

runItAll();

/*Needed:
Function to move to question and answer section by click on Start. 
Function to show each question and answers/include submit answer button - Probably an HTML form
Function that shows if they are right or wrong and if wrong what the answer is - used after clicking submit button - might need to be two functions
Function that moves to next question after right or wrong page
Function that tallys correct answers - something like correctAnswer++
Function that shows the results at the end:  Example: Score 7/10 
*/