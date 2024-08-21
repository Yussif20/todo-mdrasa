import 
    {darkThemeToggleElement,appElement,inputElement,taskListElement,addTaskButton} 
        from './scripts/elements'

darkThemeToggleElement.addEventListener("click",()=>{
    appElement.classList.toggle("App--isDark")
});

const fetchData = (key)=>{
    const data = localStorage.getItem(key)
    return data? JSON.parse(data) : false;
}

const addTask = (e)=>{
    e.preventDefault();
    let taskValue = inputElement.value;
    if(!taskValue)return;

    const task = {
        value : taskValue,
        isCompleted : false,
    }
    const tasks = fetchData("tasks") || [];

    tasks.push(task);
    saveToDB("tasks",tasks);

    let taskList = ``;
    tasks.forEach((task) =>{
        taskList +=`
    <li class="TaskList__taskContent ${task.isCompleted ? "TaskList_taskContent--isActive" :""}">
        <div class"TaskList__checkbox" tabindex="0" role="button">
            <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark" />
        </div>
        <div class="TaskList__valueContent">
            <p class="TaskList__value">
                ${task.value}
            </p>
            <img src="./assets/icon-basket.svg" class="TaskList__deleteIcon" alt="basket-icon" />
        </div>
    </li>
    `
    })
    taskListElement.innerHTML = taskList;
    inputElement.value = '';
}

const saveToDB = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}
addTaskButton.addEventListener("click",addTask)