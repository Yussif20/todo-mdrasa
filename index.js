import 
    {darkThemeToggleElement,appElement,inputElement,taskListElement,addTaskButton , getDeleteIcons} 
        from './scripts/elements'

const fetchData = (key)=>{
    const data = localStorage.getItem(key)
    return data? JSON.parse(data) : false;
}


const renderTasks = (tasks)=>{
    let taskList = ``;
    tasks.forEach((task) => {
        taskList += `<li class="TaskList__taskContent${task.isCompleted ? " TaskList__taskContent--isActive" : ""}">
          <div class='TaskList__checkbox' tabindex="0" role="button">
            <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
          </div>
          <div class='TaskList__valueContent'>
            <p class='TaskList__value'>
              ${task.value}
            </p>
            <img src="./assets/icon-basket.svg"
                 class='TaskList__deleteIcon'
                 alt="basket-icon"
            />
          </div>
        </li>`;
      });
    taskListElement.innerHTML = taskList;
    inputElement.value = '';
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
    renderTasks(tasks);
    initTaskListeners();  
}

const deleteTask = (e,index)=>{
    const answer = confirm("هل أنت متأكد من حذف المهمة؟");
    if(answer === false) return ;

    const tasks = fetchData("tasks")
    tasks.splice(index,1);
    saveToDB("tasks",tasks);
    renderTasks(tasks)
}
const initTaskListeners = ()=>{
    getDeleteIcons().forEach((icon,index)=>{
        icon.addEventListener("click",(e)=>deleteTask(e,index))
    })
}


const saveToDB = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}

addTaskButton.addEventListener("click",addTask);

const toggleDarkMode = ()=>{
    appElement.classList.toggle("App--isDark");
    saveToDB("darkModeFlag",appElement.classList.contains("App--isDark"))

}

darkThemeToggleElement.addEventListener("click",toggleDarkMode);



const initDataOnStartup =()=>{
    fetchData("darkModeFlag")&&toggleDarkMode();
}

initDataOnStartup();