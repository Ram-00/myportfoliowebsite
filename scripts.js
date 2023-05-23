// script.js

// Sample project data (replace with your own data)
const projects = [
  {
    title: "Project 1",
    description: "This is the description for Project 1.",
    link: "https://example.com/project1"
  },
  {
    title: "Project 2",
    description: "This is the description for Project 2.",
    link: "https://example.com/project2"
  },
  // Add more project objects as needed
];

// Function to populate the projects section
function populateProjects() {
  const projectsContainer = document.getElementById("projects");

  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(link);

    projectsContainer.appendChild(projectDiv);
  });
}

// Call the function to populate the projects section
populateProjects();
