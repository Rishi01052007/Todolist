# Ex03 To-Do List using JavaScript
## Date:18.03.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
INDEX.HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Colorful To-Do App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">
  <h2>📝 My To-Do List</h2>
  <p class="subtitle">Organize Your Tasks Efficiently</p>

  <!-- Stats -->
  <div class="stats">
    <p>Total: <span id="total">0</span></p>
    <p>Completed: <span id="completed">0</span></p>
    <p>Pending: <span id="pending">0</span></p>

    <div class="progress-bar">
      <div id="progress"></div>
    </div>
  </div>

  <!-- Input -->
  <div class="input-box">
    <input type="text" id="taskInput" placeholder="Enter a new task...">
    <button onclick="addTask()">+ Add</button>
  </div>

  <!-- Task List -->
  <ul id="taskList"></ul>
</div>

<script src="script.js"></script>
</body>
</html>

```
STYLE.CSS

```
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e1e2f, #3a0ca3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* App Card */
.app {
  background: #f5f5f5;
  padding: 25px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 0 25px red;
  text-align: center;
}

/* Title */
h2 {
  margin: 0;
}

.subtitle {
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
}

/* Stats Box */
.stats {
  background: #eaeaea;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  text-align: left;
}

.stats p {
  margin: 5px 0;
}

/* Progress Bar */
.progress-bar {
  background: #ccc;
  height: 8px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
}

#progress {
  height: 100%;
  width: 0%;
  background: red;
}

/* Input */
.input-box {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid red;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: darkred;
}

/* Tasks */
ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

li {
  background: #ddd;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.delete-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
}

```
SCRIPT.JS

```
function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = text;

  span.onclick = function () {
    span.classList.toggle("completed");
    updateStats();
  };

  let del = document.createElement("button");
  del.textContent = "X";
  del.className = "delete-btn";

  del.onclick = function () {
    li.remove();
    updateStats();
  };

  li.appendChild(span);
  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  updateStats();
}

function updateStats() {
  let tasks = document.querySelectorAll("#taskList li");
  let total = tasks.length;
  let completed = document.querySelectorAll(".completed").length;
  let pending = total - completed;

  document.getElementById("total").textContent = total;
  document.getElementById("completed").textContent = completed;
  document.getElementById("pending").textContent = pending;

  let progress = total === 0 ? 0 : (completed / total) * 100;
  document.getElementById("progress").style.width = progress + "%";
}

```


## OUTPUT

![alt text](<Screenshot 2026-03-18 133751.png>)


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
