const darkThemeToggleElement = document.querySelector(".DarkThemeToggle");
const appElement = document.querySelector(".App");

darkThemeToggleElement.addEventListener("click",()=>{
    appElement.classList.toggle("App--isDark")
})