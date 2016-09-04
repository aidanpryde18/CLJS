
var quizList = [
	['How many states are in the United States?', 50, 0],
	['How many legs does an insect have?', 6, 0],
	['How many continents are there?', 7, 0]
];

var correctList = '<p><h2>You got these questions correct:</h2><ol>';
var incorrectList = '<p><h2>You got these questions incorrect:</h2><ol>';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function ask(list) {
	for (var i = 0; i<list.length; i++) {
		list[i][2] = prompt(list[i][0]);
	}
}

function output(list) {
	var correctCounter = 0;	
	// Runs through each question in the Array 
	for (var i = 0; i<list.length; i++) {

		// Ask the Question
		list[i][2] = parseInt(prompt(list[i][0]));
		
		// Check the response
		if (list[i][1] === list[i][2]) {
			correctCounter++;
			correctList += '<li>' + list[i][0] + '</li>';
		} else {
			incorrectList += '<li>' + list[i][0] + '</li>';
		}
	}
	correctList += '</ol></p>'
	incorrectList += '</ol></p>'
	// Prints a sentence with the number of correct responses.
	print('<p>You got ' + correctCounter + ' question(s) right.</p>');
	// Prints the list of correct questions
	print(correctList);
	//Prints the list of incorrect questions
	print(incorrectList);
}

//ask(quizList);
output(quizList);

