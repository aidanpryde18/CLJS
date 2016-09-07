// Problem: It looks gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate nav

//Create a select and append to #menu div
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");
	//Options value is HREF
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	}
	//Options value is HREF
	$option.val($anchor.attr("href"));
	//Options text is link text
	$option.text($anchor.text());
	//append Options to select
	$select.append($option);
});
	
	

//Bild change listener to the select
$select.change(function(){
	window.location = $select.val();
});
//Modify CSS to hide links on small resolution and show button
//Also hides select on wide resolutions and show links




