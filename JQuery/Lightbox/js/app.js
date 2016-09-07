// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
// Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
// Add an overlay to page
$("body").append($overlay);


// 1: Capture the click event on a link to an image
$("#imageGallery a").click(function( event ){
	// Keep click from navigating away from main page
	event.preventDefault();
	// Create imageLocation variable
	var imageLocation = $(this).attr("href");
	// 1.2: Update the overlay with the image linked in the link
	$image.attr("src", imageLocation);
	// 1.1: Show the overlay
	$overlay.show();
	
	
	// 1.3: Get child's alt attribute
	var $captionText = $(this).children("img").attr("alt");
	// Use alt attrib to set caption on overlay
	$caption.text($captionText);
});	

// 3. When overlay is clicked, hide overlay
$overlay.click(function() {
	$overlay.hide();
});
