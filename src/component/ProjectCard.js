import { todoArr } from '../todo-array'
import TodoCard from './TodoCard'

function ProjectCard(project) {
  const projectCard = document.createElement('div')

  projectCard.classList.add('project-card')
  projectCard.textContent = project.project

  const projectContainer = document.querySelector('.project-container')

  projectContainer.appendChild(projectCard)

  projectCard.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('sa')

    const todoList = todoArr
    const projectTodos = todoList.filter((todo) => todo.project == projectCard.textContent)

    const todoContainer = document.querySelector('.todo-container')

    todoContainer.innerHTML = ''

    const projectHeading = document.createElement('h1')
    const projectNameSpan = document.createElement('span')

    projectNameSpan.textContent = project.project
    projectHeading.id = 'project-heading'
    projectHeading.textContent = `Showing todos of: `

    projectHeading.appendChild(projectNameSpan)

    todoContainer.appendChild(projectHeading)
    projectTodos.map((todo) => TodoCard(todo))
  })

  /* const removeProjectBtn = document.createElement('button')
  removeProjectBtn.textContent = 'X'

  removeProjectBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log(e)
    
    const projectTitle = e.target.parentElement.textContent.slice(0, -1)

    const filteredTodos = todoArr.filter(todo => todo.project != projectTitle)

    console.log(filteredTodos)
  })


  projectCard.appendChild(removeProjectBtn) */

  return projectCard
}

export default ProjectCard
