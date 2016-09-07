// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction

// 1: Hide spoiler
$(".spoiler span").hide();
// 2: Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")
// 3: When Button pressed
$(".spoiler button").click(function(){
	// 3.1: Show Spoiler Next to the Button Clicked
	$(this).prev().show();
	// 3.2: Get rid of button
	$(this).remove();
});



