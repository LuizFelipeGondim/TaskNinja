const checkbox = document.getElementById("switch-checkbox");

const blackColor = "#1F1F20";
const lightBlackColor = "#2C2C2C";
const grayColor = "#9C98A6";
const lightGrayColor = "#F0F0F7";
const whiteColor = "#FFFFFF"   

const titles = document.querySelectorAll("h1");
const tasks = document.querySelectorAll(".task-container__task");
const taskTitles = document.querySelectorAll(".task-container__title");
const taskContents = document.querySelectorAll(".task-container__content");

function setDarkMode() {
    document.body.style.backgroundColor = blackColor;

    titles.forEach( (item) => {
        item.style.color = whiteColor;
    })

    tasks.forEach( (item) => {
        item.style.backgroundColor = lightBlackColor;
    })

    taskTitles.forEach( (item) => {
        item.style.color = whiteColor;
    })

    taskContents.forEach( (item) => {
        item.style.color = lightGrayColor;
    })

    localStorage.setItem("@dark-mode", "enabled");
}

function setLightMode() {
    document.body.style.backgroundColor = lightGrayColor;

    titles.forEach( (item) => {
        item.style.color = blackColor;
    })

    tasks.forEach( (item) => {
        item.style.backgroundColor = whiteColor;
    })

    taskTitles.forEach( (item) => {
        item.style.color = blackColor;
    })

    taskContents.forEach( (item) => {
        item.style.color = grayColor;
    })

    localStorage.removeItem("@dark-mode");
}

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        setDarkMode();
    } else {
        setLightMode();
    }
})

if (localStorage.getItem("@dark-mode") === "enabled") {
    checkbox.checked = true;
    setDarkMode();
}