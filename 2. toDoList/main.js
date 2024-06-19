const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (tasksCount) => {
    countValue.innerHTML = tasksCount;
};

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(() => {
            error.style.display = "block"
        }, 200);
        return;
    }

    const task = `<div class="tasks">
    <input type="checkbox" class="task-check"/>
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
<i class="fa-solid fa-trash"></i>
    </button>
    </div>`;

    tasksContainer.insertAdjacentHTML("beforeend", task);

    const deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach(button => {
        button.onclick = () => {
            button.parentElement.remove();
            taskCount -=1;
            displayCount(taskCount);
        };
    });
    const editButtons = document.querySelectorAll(".edit")
    editButtons.forEach(editBtn => {
        editBtn.onclick = (e) => {
            let targetElement = e.target;
            if(!(e.target.className == "edit")) {
                targetElement = e.target.parentElement;
            }
            newTaskInput.value = targetElement.previousElementSibling?.innerHTML;
            targetElement.parentNode.remove();
            taskCount -=1;
            displayCount(taskCount);
        }
    })
    const tasksCheck = document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkBox) => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if(checkBox.checked){
                taskCount-=1;
            } else {
                taskCount +=1;
            }
            displayCount(taskCount);
        }
    })
    taskCount +=1;
    displayCount(taskCount);
    newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask)

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    ewTaskInput.value = "";
}