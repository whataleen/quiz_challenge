let questionCount = 0;
let score = 0;
let amountWalkAway = 0;
let ans;
let timedOut = 0;
let rand;
let record = [];
let status = 0;
let isGameOver = false;

let quiz = document.querySelector("#quiz");
let quizQandA = document.querySelector("#quizQandA");
let question = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let resultDiv = document.querySelector("#resultDiv");
resultDiv.style.display = "none";

let scoresDiv = document.querySelector("#scoresDiv");
scoresDiv.style.display = "none";
let scorsList = document.querySelector("#scorsList");

let result = document.querySelector("#result");
let replay = document.querySelector("#goBack");
let button1 = document.querySelector("#idButton1");
let button2 = document.querySelector("#idButton2");
let button3 = document.querySelector("#idButton3");
let button4 = document.querySelector("#idButton4");

let quizResult = document.querySelector("#quizResult");
quizResult.innerHTML = "";

let tracker;
let countDown;
let secsInputRoundOne = 60;
let secondsRound = secsInputRoundOne;
let timer;
let killTimer = 0;

function saveScore() {
	quiz.style.display = "none";
	resultDiv.style.display = "none";
	scoresDiv.style.display = "flex";

	let name = document.querySelector("#scoreInput").value;

	if (!name || name == '') {
		return;
	}

	var scores = JSON.parse(localStorage.getItem("scores"));
	if (scores) {
		scores.push({
			name: name,
			score: score
		});
	} else {
		scores = [{
			name: name,
			score: score
		}]
	}

	let innerHtml = '';

	for (let i = 0; i < scores.length; i++) {
		innerHtml += '<p class="score-item mb-2 px-2">' + (i + 1) + '. ' + scores[i].name + ' - ' + scores[i].score + '</p>';
	}

	scorsList.innerHTML = innerHtml;
	localStorage.setItem("scores", JSON.stringify(scores));
}

function clearScore() {
	var scores = [];
	localStorage.setItem("scores", JSON.stringify(scores));
	scorsList.innerHTML = '';
}

function setQuestion(qCount, rand) {
	let ques = arrayQuestions[rand];
	question.innerHTML = ques.questions;
	option1.innerHTML = "1. " + ques.optionA;
	option2.innerHTML = "2. " + ques.optionB;
	option3.innerHTML = "3. " + ques.optionC;
	option4.innerHTML = "4. " + ques.optionD;
}

function getQuestion(qCount, rand) {
	setQuestion(qCount, rand);
}

function setCorrect() {
	quizResult.style.display = "block";
	quizResult.innerHTML = "Correct";
	score++;
	setTimeout(function () {
		quizResult.innerHTML = "";
		quizResult.style.display = "none";
	}, 1000);
}

function setWrong() {
	quizResult.style.display = "block";
	quizResult.innerHTML = "Wrong";
	secondsRound = secondsRound - 5;
	setTimeout(function () {
		quizResult.innerHTML = "";
		quizResult.style.display = "none";
	}, 1000);
}

replay.addEventListener("click", replayGame);

function replayGame() {
	window.location.reload();
}

function gameOver() {
	isGameOver = true;
	quiz.style.display = "none";
	resultDiv.style.display = "flex";
	scoresDiv.style.display = "none";
	result.innerHTML = "Your result score is " + score;
}

function randomIndexGenerator() {
	while (status == 0) {
		rand = Math.floor(Math.random() * arrayQuestions.length);
		if (rand !== arrayQuestions.length) {

			for (let i = 0; i < record.length; i++) {
				if (rand === record[i]) {
					break;
				} else if (i == record.length - 1) {
					record[questionCount] = rand;
					status = 1;
				}
			}
		}
	}
	status = 0;

	return rand;
}


function $(id) {
	return document.getElementById(id);
}

function startTimerRound(elem) {
	timer = $(elem);
	timer.innerHTML = "Time: " + secondsRound;

	secondsRound--;
	if (secondsRound > 0 && !isGameOver) {
		countDown = setTimeout('startTimerRound("' + elem + '")', 1000);
	} else {
		if (!isGameOver) {
			gameOver();
		}
	}
}

option1.addEventListener("click", optionSelect);
option2.addEventListener("click", optionSelect);
option3.addEventListener("click", optionSelect);
option4.addEventListener("click", optionSelect);

function optionSelect(e) {
	nextQuestion();
	ans = parseInt(e.target.id.replace("option", ""), 10);
}

function nextQuestion() {
	if (questionCount > 9) {
		gameOver();
		return;
	}

	if (ans == arrayQuestions[rand].correctAnswer) {
		setCorrect();
		getQuestion(++questionCount, randomIndexGenerator());
	} else {
		setWrong();
		getQuestion(++questionCount, randomIndexGenerator());
	}
}

replay.addEventListener("click", replayGame);

function replayGame() {

	location.href = "../index.html";
}

rand = Math.floor(Math.random() * arrayQuestions.length);

while (rand == arrayQuestions.length) {
	rand = Math.floor(Math.random() * arrayQuestions.length);
}

record[0] = rand;

window.onload = startTimerRound("timer");
window.onload = getQuestion(questionCount, rand);
