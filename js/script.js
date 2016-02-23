$(document).ready(function(){ 
var startPage = $('#startPageDiv');
var startButton = $('#startGameButton');
var blueButton = $('#blue').click(answerFeedback);
var greenButton = $('#green').click(answerFeedback);
var redButton = $('#red').click(answerFeedback);
var orangeButton = $('#orange').click(answerFeedback);
var questionOne = $('#questionOneDiv');
var correct = $('#answerCorrect').click(nextQuestion);
var wrong = $('#answerWrong').click(nextQuestion);
var gradeOverlay = $('#gradeDivOverlay');
var countDisplay = $('#countDisplayHeader');
var finalScoreDisplay = $('#finalScoreHeader');
var tryAgain = $('#tryAgainButton');
var finalScoreBox = $('#finalScoreDiv');
var questions = [{text:'Which color is blue?', answer:'blue'}, 
				{text:'Which color is green?', answer:'green'},
				{text:'Which color is red?', answer:'red'},
				{text:'Which color is orange?', answer:'orange'},
				{text:'What color is the sky?', answer:'blue'}];
var questionHeader = $('#questionHeader');
var userGrades = [];
var finalScore = 0;
var count = 0;
	startButton.click(startGame);
	gradeOverlay.click(nextQuestion);
	tryAgain.click(startGame);

	function startGame() {
		console.log('Game Started');
		resetVariables();
		startPage.hide();
		questionOne.show();
		displayQuestionNumber();
	}
	// function answerFeedback(e){
	// 	console.log('You clicked the ' + $(this).attr("value") + ' button');
	// 	if ($(this).attr("value") === "blue") {
	// 		console.log('Correct!');
	// 	}
	// 	else {
	// 		console.log('Wrong!');
	// 	}
	// }
	function answerFeedback(e){
		gradeOverlay.show();
		if ($(this).attr("value") === questions[count].answer) {
			correct.show();
			userGrades.push(1);
		}
		else {
			wrong.show();
			userGrades.push(0);
		}
	}
	function nextQuestion(e) {
		gradeOverlay.hide();
		correct.hide();
		wrong.hide();
		if ((count+1) < questions.length) {
			count++;
			questionHeader.text(questions[count].text);	
			displayQuestionNumber();
		}
		else {
			getFinalScore();
			console.log(finalScore);
			gradeOverlay.show();
			finalScoreDisplay.text(finalScore + ' of ' + questions.length)
			finalScoreBox.show();
		}
	}
	function displayQuestionNumber() {
		countDisplay.show()
		countDisplay.html((count+1) + ' of 5');
	}
	function getFinalScore() {
		for (var i=0; i<userGrades.length; i++) {
			finalScore += userGrades[i];
		}
	}
	function resetVariables() {
		count = 0;
		userGrades = [];
		finalScore = 0;
		gradeOverlay.hide();
		finalScoreBox.hide();
		questionHeader.text(questions[count].text);	

	}
	// var finalScore = userGrades.reduce(add, 0);

	// function add(a,b) {
	// 	return a+b;
	// }


});
