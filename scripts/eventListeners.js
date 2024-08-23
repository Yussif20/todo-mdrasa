import { addTaskButton, darkThemeToggleElement, getCheckbox, getDeleteIcons, taskListElement, taskListLink } from "./elements"
import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils"

export const initTaskListeners = ()=>{
    getDeleteIcons().forEach((icon,index)=>{
        icon.addEventListener("click",(e)=>deleteTask(e,index))
    })

    getCheckbox().forEach((box,index)=>{
      box.addEventListener("click",(e)=>toggleTask(e,index))
      box.addEventListener("keydown",(e)=>{
        e.key === "Enter" && toggleTask(e,index)
      })
    })
}
export const initListeners = ()=>{
    taskListLink.addEventListener("click",()=>{
        taskListElement.classList.toggle("TaskList__list--hideCompleted");
        taskListLink.classList.toggle("TaskList__link--isActive")
      })
    darkThemeToggleElement.addEventListener("click",toggleDarkMode);
    
    addTaskButton.addEventListener("click",addTask);
    
} 
