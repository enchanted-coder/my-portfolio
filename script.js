const projectList = document.getElementById("project-list");
const projectDetails = document.getElementById("project-details");
const projectTitle = projectDetails.querySelector("h2");
const projectDescription = projectDetails.querySelector("#project-description");
const projectLink = projectDetails.querySelector("#project-link");

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