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
var questions = [{text:'Which of the following is NOT a codename for a prior version of Mac OS X?', buttonOne: 'Puma', buttonTwo: 'Jaguar', buttonThree: 'Bobcat', buttonFour: 'Kodiak', answer:'red'},
                 {text:'Which of the following was the first Legend of Zelda game to be released for Nintendo 64?', buttonOne: 'Majoras Mask', buttonTwo: 'Ocarina of Time', buttonThree: 'A Link to the Past', buttonFour: 'The Adventure of Link', answer:'green'},
				{text:'The Bootstrap web development framework was originally developed by employees of which social networking company?',  buttonOne: 'Facebook', buttonTwo: 'Twitter', buttonThree: 'Instagram', buttonFour: 'LinkedIn', answer:'green'},
				{text:'At what age does the Star Wars character, Yoda, die?', buttonOne: '1000', buttonTwo: '500', buttonThree: '800', buttonFour: '900', answer:'orange'},
				{text:'What does HTTP stand for?', buttonOne: 'Hypertext Transfer Protocol', buttonTwo: 'Highspeed Text Transfer Permission', buttonThree: 'Hypermedia Transfer Protocol', buttonFour: 'Hypertext Transient Protocol', answer:'blue'}];
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
      getButtons();
			displayQuestionNumber();
		}
		else {
			getFinalScore();
			console.log(finalScore);
			gradeOverlay.show();
			finalScoreDisplay.text('Score: ' + finalScore + ' of ' + questions.length)
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
    getButtons();
	}
  function getButtons() {
    $('#blue').text(questions[count].buttonOne);
    $('#green').text(questions[count].buttonTwo);
    $('#red').text(questions[count].buttonThree);
    $('#orange').text(questions[count].buttonFour);
    }
});
