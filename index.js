/*Needed to work properly:
Function to move to question and answer section by click on Start. - Done
Function to show each question and answers/include submit answer button - Probably an HTML form -Done
Function that shows if they are right or wrong and if wrong what the answer is - used after clicking submit button - might need to be two functions -Done
Function that moves to next question after right or wrong page -Done
Function that tallys correct answers - something like correctAnswer++ - Done
Function that counts the questons? - Done
Function that shows the results at the end:  Example: Score 7/10  -Done
Show real time stats - Current score and current queston ----???? Still haven't figured out

// Gif to use on right answer - https://media0.giphy.com/media/1xdHOCA9erNVCnZ1qE/giphy.gif?

// Gif to use on wrong answer - https://i.pinimg.com/originals/2e/71/63/2e7163f75ed5dc9f568cb31bb4073da4.gif

*/

let questionNumber = 1;

let correctNumber = 0;

const questionsAndAnswers = [
  {
    number: 1,
    text: "What are the words of House Martell?",
    answer1: "We Stand Together",
    answer2: "Unbowed, Unbent, Unbroken",
    answer3: "Growing Strong",
    answer4: "Proud to be Faithful"
  },
  {
    number: 2,
    text: "What are the words of House Stark?",
    answer1: "Ours is the Fury",
    answer2: "We Do Not Sow",
    answer3: "Winter is Coming",
    answer4: "Growing Strong"
  },
  {
    number: 3,
    text: "What are the words of House Baratheon?",
    answer1: "Righteous in Wrath",
    answer2: "As High as Honor",
    answer3: "Fire and Blood",
    answer4: "Ours is the Fury"
  },
  {
    number: 4,
    text: "What are the words of House Lannister?",
    answer1: "A Lannister always pays his debts",
    answer2: "Hear Me Roar",
    answer3: "Family, Duty, Honor",
    answer4: "We Do Not Sow"
  },
  {
    number: 5,
    text: "What are the words of House Greyjoy?",
    answer1: "We Do Not Sow",
    answer2: "The Old, The True, The Brave",
    answer3: "Honed and Ready",
    answer4: "None So Wise"
  },
  {
    number: 6,
    text: "What is the sigil of House Targaryen?",
    answer1: "A three-headed dragon, black on red",
    answer2: "A three-headed dragon, red on black",
    answer3: "A golden lion on a crimson field",
    answer4: "Gray direwolf on a ice-white field"
  },
  {
    number: 7,
    text: "What is the sigil of House Greyjoy?",
    answer1: "A golden rose on a grass-green field",
    answer2: "A leaping trout, silver, on a field of rippling blue and red",
    answer3: "A red sun pierced by a golden spear",
    answer4: "A golden kraken upon a black field"
  },
  {
    number: 8,
    text: "What is the sigil of House Martell?",
    answer1: "A red sun pierced by a golden spear",
    answer2: "A golden kraken upon a black field",
    answer3: "The moon-and-falcon, white, upon a sky blue field",
    answer4: "A crowned stag, black, on a golden field"
  },
  {
    number: 9,
    text: "What is the sigil of House Baratheon?",
    answer1: "A three-headed dragon, red on black",
    answer2: "A grey direwolf on an ice-white field",
    answer3: "A crowned stag, black, on a golden field",
    answer4: "A golden rose on a grass-green field"
  },
  {
    number: 10,
    text: "What is the sigil of House Clegane?",
    answer1: "A shoal of silver fish upon a pale green field",
    answer2: "Three dogs in the yellow of autumn grass",
    answer3: "A fox head in a circle of flowers",
    answer4: "A yellow sun and crescent moon on quartered rose and azure"
  }
];

const rightAnswers = [
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

function questionLayout(correctNumber, question, questionsDone) {
  return `
    <section role="main">
    <h2 id="question">${question.text}</h2> 
    <form>
      <fieldset>
        <label>
          <input class="answer" type="radio" name="option" checked></input>
          <div>${question.answer1}</div>
        </label>
        <label>
          <input class="answer" type="radio" name="option"></input>
          <div>${question.answer2}</div>
        </label> 
        <label>
          <input class="answer" type="radio" name="option"></input>
          <div>${question.answer3}</div>
        </label>
        <label>
          <input class="answer" type="radio" name="option"></input>
          <div>${question.answer4}</div>
        </label>
      </fieldset>  
      <button id="submitButton">Submit</button>
    </form>
  </section>
  `
  ;
}

function startQuiz() {
  $('#startButton').click(function(event) {
    nextQuestion();
  });
}

function nextQuestion() {
  const question = questionsAndAnswers[questionNumber - 1];
  const questionsDone = questionNumber - 1;
  $('#container').html(questionLayout(correctNumber, question, questionsDone));
}

function buttonForNextQuestion() {
  $('#container').on('click', '#nextButton', function(event) {
    if(questionNumber === 10) {
      finalPage(correctNumber);
    } else {
      addOneMoveToNextQuestion();
      nextQuestion();
  }
  });
}

function submitAnswer() {
  $('#container').on('click', '#submitButton', function(event) {
    event.preventDefault()
    const answer = $('input:checked').siblings('div');
    const rightAnswerPicked = checkIfCorrect(answer);
    if(rightAnswerPicked) {
      showRightAnswerPage();
    } else {
      showWrongAnswerPage();
    }
  });
}

function checkIfCorrect(answer) {
  if(answer.text() === rightAnswers[questionNumber - 1]) {
    return true;
  } else {
    return false;
  }
}

function showRightAnswerPage() {
  $('#container').html(goodJob);
  totalScore();
}

const goodJob = `
  <section role="main">
    <h2>Correct!</h2>
    <button id="nextButton">Next</button>
  </section>
`
;

function showWrongAnswerPage() {
  $('#container').html(wrongAnswer(questionNumber));
}

function totalScore() {
  correctNumber++;
}

function wrongAnswer(questionNumber) {
  return `
    <section role="main">
      <h2>Wrong! The correct answer was ${rightAnswers[questionNumber - 1]}!</h2>
      <button id="nextButton">Next</button>
    </section>
`
;
}

function addOneMoveToNextQuestion() {
  questionNumber++;
}

function finalPage(correctNumber) {
  $('#container').html(`
    <section>
      <h2>You got ${correctNumber} out of 10!</h2>
      <button id="restartButton" value="Refresh Page" onClick="history.go(0)"> Try Again? </button>
    </section>
  `);
}

function pleaseWork() {
  startQuiz();
  submitAnswer();
  buttonForNextQuestion();
}

pleaseWork();