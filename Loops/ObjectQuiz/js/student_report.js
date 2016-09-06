var message = '';
var student;
var question = 'Search student records: Type a name [Jody] (or type "quit" to end)';
var response;

function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

while (true) {
	response = prompt(question);
	if (response === null || response.toLowerCase() === 'quit'){
		break;
	}

	for (var i = 0; i < students.length; i++ ) {
	student = students[i];

		if (response === student.name) {
			message += '<h2>Student: ' + student.name + '</h2>';
			message += '<p>Track: ' + student.track + '</p>';
			message += '<p>Points: ' + student.points + '</p>';
			message += '<p>Achievements: ' + student.achievements + '</p>';
		}
	print(message);	
	}
}






