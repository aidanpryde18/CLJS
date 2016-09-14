//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes properly
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var lastEvent;
var context = $canvas[0].getContext("2d");
var mouseDown = false;

function changeColor() {
  //Update the new color span
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")" )
};


//When clicking on control list items
$(".controls").on("click", "li", function(){

  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked elements
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show or hide color selector
  changeColor();
  $("#colorSelect").toggle();
});
//When color sliders change
$("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});
//On mouse event on canvas,
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
