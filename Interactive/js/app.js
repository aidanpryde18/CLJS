//Problem: User interaction doesn't provide desired results

//Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //New task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");; //completed-tasks

//New Task List item
var createNewTaskElement = function(taskString) {
  //Create List item
  var listItem = document.createElement("li");
  //Input checkbox
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input text
  var editInput = document.createElement("input");
  //button.Edit
  var editButton = document.createElement("button");
  //button.Delete
  var deleteButton = document.createElement("button");

  //Each element, needs modified
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;
  //Each element needs appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}
//Add a new task
var addTask = function() {
  console.log("Add Task");

  if(taskInput.value == "") {
    alert("Please Enter a List Item");
  } else {
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, completeTask);
    taskInput.value = "";
  }
}
//Edit an existing tasks
var editTask = function() {
  console.log("Edit Task");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var editButton = this;

  var containsClass = listItem.classList.contains("editMode");

    //If the class of the parent is .editMode
    if (containsClass) {
      //Switch from editMode
      //Label text become the input's value
      label.innerText = editInput.value;
      editButton.innerText = "Edit";
    } else {
    //Else switch to editMode
      //Input value becomes the label's text
      editInput.value = label.innerText;
      editButton.innerText = "Save";

    }
    //Toggle editMode on the list item
    listItem.classList.toggle("editMode");
}
//Delete an existing task
var deleteTask = function() {
  console.log("Delete Task");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //Remove the parent list item from the UL
  ul.removeChild(listItem);

}
  //Mark a task as complete
var completeTask = function() {
  console.log("Complete Task");
    //Append the task list item to the completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, incompleteTask);

}

//Mark a task as incomplete
var incompleteTask = function() {
  console.log("incomplete Task");
  //When the checkbox is unchecked
    //Append the task list item to incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, completeTask);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list items...");
  //select taskListItem children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  // bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function () {
  console.log("AJAX Request");
}
//Set the click handler to the addTask function

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {

    //bind events to list item's children (completeTask)
    bindTaskEvents(incompleteTasksHolder.children[i], completeTask)
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {

    //bind events to list item's children (completeTask)
    bindTaskEvents(completedTasksHolder.children[i], incompleteTask)
}
