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