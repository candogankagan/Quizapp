const quizData = [
  {
    question: 'Who has the most Championship?',
    a: 'Micheal Jordan',
    b: 'Kobe Bryant',
    c: 'Bill Russel',
    d: 'Wilt Chamberlain',
    correct: 'c',
  },
  {
    question: 'Who has the most All-Star MVP?',
    a: 'Micheal Jordan',
    b: 'Kobe Bryant',
    c: 'LeBron James',
    d: 'Kevin Durant',
    correct: 'b',
  },
  {
    question: 'Who has the most NBA Playoff wins?',
    a: 'Micheal Jordan',
    b: 'Kobe Bryant',
    c: 'LeBron James',
    d: 'Wilt Chamberlain',
    correct: 'c',
  },
  {
    question: 'Who has the most points scored in a game?',
    a: 'Micheal Jordan',
    b: 'Kobe Bryant',
    c: 'LeBron James',
    d: 'Wilt Chamberlain',
    correct: 'd',
  },
  {
    question: 'Who is the GOAT?',
    a: 'Micheal Jordan',
    b: 'Kobe Bryant',
    c: 'LeBron James',
    d: 'Wilt Chamberlain',
    correct: 'a',
  },
];

const questionHead = document.getElementById('questionLabel');

const answerEls = document.querySelectorAll('input');
const a_text = document.getElementById('q_a');
const b_text = document.getElementById('q_b');
const c_text = document.getElementById('q_c');
const d_text = document.getElementById('q_d');
const questionButton = document.querySelector('button');

let currentQuiz = 0;
let correctAnswers = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  questionHead.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function answerSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

questionButton.addEventListener('click', () => {
  answer = answerSelected();

  if (quizData[currentQuiz].correct === answer) {
    correctAnswers++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(
      'div.container'
    ).innerHTML = `<h2>You answered correctly at ${correctAnswers}/5 questions.</h2>
                    
    <button onclick="location.reload()">Reload</button>`;
  }
});
