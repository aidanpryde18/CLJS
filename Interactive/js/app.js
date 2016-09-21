//Problem: User interaction doesn't provide desired results

//Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //New task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");; //completed-tasks

//Add a new task
var addTask = function() {
  console.log("Add Task");
  //When button is pressed
  //Create a new list item with the text from #new-task:
  //Input checkbox
  //label
  //input checkbox
  //button.Edit
  //button.Delete
  //Each element, needs modified and appended
}
//Edit an existing tasks
var editTask = function() {
  console.log("Edit Task");
  //When the edit button is pressed
    //If the class of the parent is .editMode
      //Switch from editMode
      //Label test become the input's value
    //Else switch to editMode
      //Input value becomes the label's text

    //Toggle editMode on the parent
}
//Delete an existing task
var deleteTask = function() {
  console.log("Delete Task");
  //When the delete button is pressed
    //Remove the parent list item from the UL
}
  //Mark a task as complete
var completeTask = function() {
  console.log("Complete Task");
  //When the checkbox is checked
    //Append the task list item to the completed-tasks
}

//Mark a task as incomplete
var incompleteTask = function() {
  console.log("incomplete Task");
  //When the checkbox is unchecked
    //Append the task list item to incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  comsole.log("Bind list items...");
  //select its children
  //bind editTask to edit button
  //bind deleteTask to delete button
  // bind checkBoxEventHandler to checkbox
}
//Set the click handler to the addTask function
addButton.onclick = addTask;

//Cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {

    //bind events to list item's children (completeTask)
    bindTaskEvents(incompleteTasksHolder.children[i], completeTask)
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {

    //bind events to list item's children (completeTask)
    bindTaskEvents(completedTasksHolder.children[i], incompleteTask)
}
