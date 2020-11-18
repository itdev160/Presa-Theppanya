//array to hold tasks
var tasks = [];

//task 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//task constructor function
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}
//only constructor functions are capitalize (Task)
//creates new tasks elements and adds to the DOM
function addTaskElement (task) {
    //creates elements
    var listEl = document.getElementById('active-list');
    var textEl = document.getElementById('li');
    var textEl = document.getElementById(task.name);

    //set attribute
    addTaskElement.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task element to list
    listEl.appendChild(taskEl);
}

//Click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if(inputEl.value !== '') {
        //create a unique id
        var id = 'item-' + tasks.length;

        //create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        task.push(task);

        //add the task to the DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

    //click handler to complete a task
    function completeTask (event) {
    //get task element
    var taskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in tasks array and update status
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id === id) {
            task.status = taskStatus.completed;
            break;
        }
    }

    //move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//key press handler to automatically click the add task button
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//initialize the app
function init () {
    //wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();