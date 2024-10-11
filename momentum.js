//modal and greetings
const dialog = document.querySelector("dialog");
dialog.showModal();
const nameInput = document.getElementById("name-input");
const greet = document.getElementById("greet");
nameInput.addEventListener("keydown", e=>{
  
  if(e.key === "Enter"){

    const name = document.createElement("span");
    name.textContent = nameInput.value + "!"
    greet.appendChild(name);
    dialog.close();

   
  }
})



//quotes
const quotes = [
  "Good luck at dapat Pakak!",
  "Pop Off Ate!",
  "Reading is what?? Fundamental.",
  "Can I get an eme up in here?",
  "Shantay you stay!"
]

const quoteContainer = document.getElementById("quote");
const quoteElement = document.createElement("div");
quoteElement.textContent = `${quotes[Math.floor(Math.random()*quotes.length)]}`
quoteContainer.appendChild(quoteElement);






//time
const timeContainer = document.getElementById("time");
const timeElement = document.createElement("div");

timeContainer.appendChild(timeElement);

function updateTime(){
  const date = new Date();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  let second = date.getSeconds().toString();
  
  second = second.length < 2 ? second.padStart(2,"0") : second;
  minute = minute.length < 2 ? minute.padStart(2,"0") :minute;
  hour = hour.length < 2? hour.padStart(2,"0") : hour;
  timeElement.innerHTML = `${hour} : ${minute} : ${second}`;
  setTimeout(updateTime, 1000);
}

updateTime();










//tasks
const addTaskBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");

const addTask = () => {
  const taskInput = document.getElementById("task-input").value;
  const taskDiv = document.createElement("div");
  const taskLabel = document.createElement("label");
  taskLabel.textContent = taskInput;
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskLabel);
  tasksContainer.appendChild(taskDiv);

  checkbox.onclick = function(){
    taskLabel.classList.toggle("taskdone");
  }
  
}



addTaskBtn.addEventListener("click", addTask)