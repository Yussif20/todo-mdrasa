import 
    {darkThemeToggleElement,appElement,inputElement,taskListElement,addTaskButton} 
        from './scripts/elements'

darkThemeToggleElement.addEventListener("click",()=>{
    appElement.classList.toggle("App--isDark")
});
const addTask = (e)=>{
    e.preventDefault();
    let taskValue = inputElement.value;
    if(!taskValue)return;
    const liElement = `
    <li class="TaskList__taskContent">
        <div class"TaskList__checkbox" tabindex="0" role="button">
            <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark" />
        </div>
        <div class="TaskList__valueContent">
            <p class="TaskList__value">
                ${taskValue}
            </p>
            <img src="./assets/icon-basket.svg" class="TaskList__deleteIcon" alt="basket-icon" />
        </div>
    </li>
    `
    taskListElement.insertAdjacentHTML("beforeend",liElement)
    inputElement.value = '';
}
addTaskButton.addEventListener("click",addTask)