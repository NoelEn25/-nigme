const quizzcontainer = document.getElementById("quiz-container");
const mainpage = document.getElementById("main-page");
const codepage = document.getElementById("code-container");
const mathpage = document.getElementById("math-container");
const buttonhome = document.getElementById("bringback");
buttonhome.style.display = "none";
quizz = true;

function fadeOutEffect(target) {
  var fadeEffect = setInterval(function () {
    if (!target.style.opacity) {
      target.style.opacity = 1;
    }
    if (target.style.opacity > 0) {
      target.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

function fadeInEffect(target) {
  var fadeEffect = setInterval(function () {
    if (!target.style.opacity) {
      target.style.opacity = 1;
    }
    if (target.style.opacity > 0) {
      target.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

function BringBackMainPage() {

  mainpage.style.display = "block";
  quizzcontainer.style.display = "none";
  codepage.style.display = "none";
  mathpage.style.display = "none";
  buttonhome.style.display = "none";
}

function BringBackMainPageUnlock(Engime) {
  const unlockone = document.getElementById("unlock-1");
  const unlocktwo = document.getElementById("unlock-2");
  const unlockthree = document.getElementById("unlock-3");

  const who = document.getElementById("unlock-4");

  const hideword1 = document.getElementById("hidewords1");
  const hideword2 = document.getElementById("hidewords2");
  const hideword3 = document.getElementById("hidewords3");
  const hideword4 = document.getElementById("hidewords4");

  mainpage.style.display = "block";
  quizzcontainer.style.display = "none";
  codepage.style.display = "none";
  mathpage.style.display = "none";
  buttonhome.style.display = "none";
  

  if (Engime == 1) {
    hideword1.style.display = "block";
    fadeOutEffect(unlockone);
    quizz = false;
  } else if (Engime == 2) {
    hideword2.style.display = "block";
    fadeOutEffect(unlocktwo);
  } else if (Engime == 3) {
    hideword3.style.display = "block";
    fadeOutEffect(unlockthree);
  } else if (Engime == 4) {
    hideword4.style.display = "block";
    fadeOutEffect(who);
  }
}

function LaunchQuizz() {
  mainpage.style.display = "none";
  quizzcontainer.style.display = "block";
  buttonhome.style.display = "block";
}

function LaunchCode() {
  mainpage.style.display = "none";
  codepage.style.display = "block";
  buttonhome.style.display = "block";
}

function LaunchMath() {
  mainpage.style.display = "none";
  mathpage.style.display = "block";
  buttonhome.style.display = "block";
}

/*quizz*/

const quizData = [
  {
    question: "Un nénuphar doublant sa surface chaque jour couvre un étang en quarante jours. Mais en combien de temps couvrira-t-il la moitié de l'étang?",
    choices: ["39", "20", "10", "35"],
    correctChoice: 0,
    AlreadyShow: false,
  },
  {
    question: "Quel total obtient-on si, à la somme de 1000 et 40, vous y ajoutez 1000, puis 30 et une nouvelle fois 1000. Ajoutez, pour terminer, 20 puis 1000 et à nouveau 10?",
    choices: ["4090", "3100", "5000", "4100"],
    correctChoice: 3,
    AlreadyShow: false,
  },
  {
    question: "Un berger a 21 brebis. Suite à une maladie, toutes meurent sauf 7. Combien de brebis reste-t-il à ce berger?",
    choices: [
      "21",
      "14",
      "7",
      "0",
    ],
    correctChoice: 2,
    AlreadyShow: false,
  },
  {
    question: "Vous conduisez un bus dans lequel montent 18 personnes. A l'arrêt suivant descendent 5 personnes mais en montent 13. A l'arrêt suivant, descendent 21 personnes et en montent 4. Combien y-a-t-il de personnes dans le bus ?",
    choices: [
      "7",
      "8",
      "9",
      "10",
    ],
    correctChoice: 3,
    AlreadyShow: false,
  },
  {
    question: "7 personnes se rencontrent à un carrefour. Chacun serre la main aux autres tour à tour. Sachant que chaque personne ne peut pas serrer la main 2 fois, combien y aura-t-il de poignées de main ?",
    choices: [
      "34",
      "18",
      "21",
      "7",
    ],
    correctChoice: 2,
    AlreadyShow: false,
  },
  {
    question: "Si trois chats attrapent trois souris en trois minutes, combien de chats faut-il pour attraper cent souris en cent minutes ?",
    choices: [
      "3",
      "100",
      "10",
      "1",
    ],
    correctChoice: 0,
    AlreadyShow: false,
  },
  {
    question: "Dans un étang, il y a dix poissons. Deux sont morts, quatre nagent au loin. Combien reste-t-il de poissons ?",
    choices: [
      "6",
      "8",
      "4",
      "10",
    ],
    correctChoice: 3,
    AlreadyShow: false,
  },
  {
    question: "Quelle est la capitale de la finlande ?",
    choices: [
      "Stockholm",
      "Oslo",
      "Helsinki",
      "Copenhague",
    ],
    correctChoice: 2,
    AlreadyShow: false,
  },
  {
    question: "Quelle est la capitale de l'australie ?",
    choices: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Madrid",
    ],
    correctChoice: 2,
    AlreadyShow: false,
  },
  {
    question: "Quelle est la capitale du maroc ?",
    choices: [
      "Rabat",
      "Marrakech",
      "Casablanca",
      "Alger",
    ],
    correctChoice: 0,
    AlreadyShow: false,
  },
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");
const MissElement = document.getElementById("miss-container");

RandomizeQuestion();
score = 0;
NumberOfQuestionPast = 0;

quizzcontainer.style.display = "none";

function RandomizeQuestion() {
  let RandomQuest = Math.floor(Math.random() * quizData.length);
  let DataQuizz = quizData[RandomQuest];

  if (DataQuizz.AlreadyShow) {
    RandomizeQuestion();
  } else {
    currentQuestion = RandomQuest;
  }
}

function showQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.innerText = currentQuiz.question;
  choicesElement.innerHTML = "";

  if (quizz) {
  for (let i = 0; i < currentQuiz.choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.className = "choice";
    choiceButton.innerText = currentQuiz.choices[i];
    choiceButton.addEventListener("click", checkAnswer.bind(null, i));
    choicesElement.appendChild(choiceButton);
  }
}
}

function checkAnswer(choiceIndex) {
    const currentQuiz = quizData[currentQuestion];
    NumberOfQuestionPast++;
    if (choiceIndex === currentQuiz.correctChoice) {
      score++;
      currentQuiz.AlreadyShow = true;
      if (NumberOfQuestionPast === quizData.length) {
        showResult();
      } else {
        RandomizeQuestion();
        showQuestion();
      }
    } else {
      NumberOfQuestionPast = 0;
      score = 0;
      quizData.forEach((element) => (element.AlreadyShow = false));
      choicesElement.style.display = "none";
      questionElement.style.display = "none";
      MissElement.style.display = "block";
      RandomizeQuestion();
      showQuestion();
    }
}

function showResult() {
  resultElement.innerText = `${score}/${quizData.length}`;
  resultContainer.style.display = "block";
  questionElement.style.display = "none";
  choicesElement.style.display = "none";

  if (score < 1) {
    resultContainer.style.display = "none";
  }
}

function RestartQuiz() {
  MissElement.style.display = "none";
  questionElement.style.display = "block";
  choicesElement.style.display = "block";
}



showQuestion();

/*var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log(quizz);   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 3000)
}

myLoop(); */


/* code */ 

function CheckCode() {
  const value1 = document.getElementById("input-1").value;
  const value2 = document.getElementById("input-2").value;
  const value3 = document.getElementById("input-3").value;

  const CheckButton = document.getElementById("checkcode-button");

  let code1 = 2
  let code2 = 1
  let code3 = 3

function CheckButtonWhite() {
  CheckButton.style.backgroundColor = "white";
}

  if (value1 == code1 && value2 == code2 && value3 == code3) {
    BringBackMainPageUnlock(2)
  } else {
    CheckButton.style.backgroundColor = "red";
    setTimeout(CheckButtonWhite, 700);
  }

}

/* Math */ 

function CheckAnswerMath() {
  const MathButton = document.getElementById("Math-btn");
  const valueMath = document.getElementById("input-Math").value;

  let MathAnswer = 19


  function MathButtonfun() {
    MathButton.style.backgroundColor = "white";
  }

  if (valueMath == MathAnswer ) {
    BringBackMainPageUnlock(3)
  } else {
    MathButton.style.backgroundColor = "red";
    setTimeout(MathButtonfun, 700);
  }

}



