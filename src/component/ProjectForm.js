import { readDataFromLocalStorage } from '../lib/readDataFromLocalStorage'
import { writeDataInLocalStorage } from '../lib/writeDataInLocalStorage'
import { projectArr } from '../project-array'
import ProjectCard from './ProjectCard'

function ProjectForm() {
  const projectForm = document.createElement('form')

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(projectForm)

    const data = {}

    formData.forEach((value, key) => {
      data[key] = value
    })

    projectArr.push(data)

    writeDataInLocalStorage('projects', projectArr)
    const projects = readDataFromLocalStorage('projects')

    document.querySelector('.project-container').innerHTML = ''

    projects.map((project) => ProjectCard(project))
    const dialog = document.querySelector('.project-dialog')

    dialog.close()
    projectForm.reset()
  })
  const projectLabel = document.createElement('label')
  const projectInput = document.createElement('input')

  projectLabel.setAttribute('for', 'project')
  projectLabel.textContent = 'Project Name: '

  projectInput.id = 'project'
  projectInput.setAttribute('type', 'text')
  projectInput.setAttribute('name', 'project')
  projectInput.setAttribute('autofocus', '')

  projectForm.appendChild(projectLabel)
  projectForm.appendChild(projectInput)

  return projectForm
}

export default ProjectForm
