const todos = [
	{
		task: "learn javascript",
		completed: false

	},
	{
		task: "learn css",
		completed: false
	},
	{
		task: "learn html",
		completed: false
	}
];

function renderTodos() {
	main.innerHTML = "";

	todos.forEach(ele => {
		createDiv(ele);
	});
}

function createDiv(obj){
	const div = document.createElement("div");
	div.setAttribute("class", "todo_container");
	div.setAttribute("id", "todo_container");
	main.appendChild(div);
	createButton(div, "✏️", "button", "update");
  	createSpan(div, obj, obj.completed && "line_through");
  	createButton(div, "🗑", "button", "delete");
}

function createButton(parent,title,classN,action){
	const button = document.createElement("button");
	button.innerHTML = title;
	button.setAttribute("class",classN);
	button.onclick = event =>
		action === "delete" ? deleteTodo(event) : updateTodo(event);
	return parent.appendChild(button);
}

function createSpan(parent,obj,classN){
	const span = document.createElement("span");
	
	span.innerHTML = obj.task;
	
	span.setAttribute("class",classN);
	
	return parent.appendChild(span);
}

function createTodo() {
	const inputVal = document.getElementById("myInput").value;

	const index = todos.findIndex(ele => ele.task === inputVal);

	if (index !== -1) {
		return alert(`Todo ${inputVal} already present on the list`);
	}

	if(inputVal === "") {
		return alert(`Please provide valid todo!`);
	}

	todos.push({task: inputVal, completed: false});

	document.getElementById("myInput").value = "";

	renderTodos();
}

function deleteTodo(e) {
	const todo = e.target.previousElementSibling.innerText;

	const index = todos.findIndex(ele => ele.task === todo);
	todos.splice(index, 1);

	return renderTodos();
}

function updateTodo(e) {
	const todo = e.target.nextElementSibling.innerText;

	const index = todos.findIndex(ele => ele.task === todo);
	todos[index].completed = !todos[index].completed;
	return renderTodos();
}