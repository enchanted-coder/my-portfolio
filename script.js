const projectList = document.getElementById("project-list");
const projectDetails = document.getElementById("project-details");
const projectTitle = projectDetails.querySelector("h2");
const projectDescription = projectDetails.querySelector("#project-description");
const projectLink = projectDetails.querySelector("#project-link");

const toggleSwitch = document.getElementById("toggle");
const body = document.body;

toggleSwitch.addEventListener("change", switchTheme);

// theme switcher
function switchTheme() {
    if (toggleSwitch.checked) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

const setDarkTheme = () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    projectDetails.classList.remove("light-mode");
    projectDetails.classList.add("dark-mode");
}

const setLightTheme = () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    projectDetails.classList.remove("dark-mode");
    projectDetails.classList.add("light-mode");
}

// display projects in the navigation
function displayProjects() {
    projects.forEach((project, index) => {
        const projectItem = document.createElement("li");
        projectItem.textContent - project.title;
        projectItem.addEventListener("click", () => showProjectDetails(index));
        projectList.appendChild(projectItem);
    });
}

// display details of selected project
function showProjectDetails(index){
    const selectedProject = project[index];
    projectTitle.textContent = selectedProject.title;
    projectDescription.textContent = selectedProject.description;
    projectLink.href = selectedProject.link;
}

// function to initialize page
function init() {
    displayProjects();
    showProjectDetails(0);
}

init();