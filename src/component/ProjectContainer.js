function ProjectContainer() {
  const projectContainer = document.createElement('div')

  projectContainer.classList.add('project-container')

  const sidebar = document.querySelector('.sidebar')

  sidebar.appendChild(projectContainer)

  return projectContainer
}

export default ProjectContainer
