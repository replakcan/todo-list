import { capitalizeWord } from '../lib/capitalizeWord'
import { writeDataInLocalStorage } from '../lib/writeDataInLocalStorage'
import { todoArr } from '../todo-array'

function TodoCard(formData) {
  const { check, description, due_date, notes, priority, title, project } = formData

  const todoCard = document.createElement('div')

  todoCard.classList.add('todo-card')

  const titleHeading = document.createElement('h1')
  const descriptionPara = document.createElement('p')
  const dueDatePara = document.createElement('p')
  const priorityPara = document.createElement('p')
  const notesPara = document.createElement('p')
  const checkPara = document.createElement('p')
  const projectPara = document.createElement('p')

  titleHeading.textContent = `title: ${capitalizeWord(title)}`
  descriptionPara.textContent = `description: ${description}`
  dueDatePara.textContent = `due date: ${due_date}`
  priorityPara.textContent = `prioprity: ${priority}`
  notesPara.textContent = `notes: ${notes || '-'}`
  checkPara.textContent = `${check ? 'done' : 'in progress'}`
  projectPara.textContent = `project: ${project}`

  todoCard.appendChild(titleHeading)
  todoCard.appendChild(descriptionPara)
  todoCard.appendChild(dueDatePara)
  todoCard.appendChild(priorityPara)
  todoCard.appendChild(notesPara)
  todoCard.appendChild(projectPara)
  todoCard.appendChild(checkPara)

  document.querySelector('.todo-container').appendChild(todoCard)

  const removeTodoBtn = document.createElement('button')

  removeTodoBtn.classList.add('todo-remove-btn')
  removeTodoBtn.textContent = 'Remove Todo'

  removeTodoBtn.addEventListener('click', (e) => {
    let elementTitle = e.target.parentElement.children[0].textContent.slice(7).toLowerCase()

    const filteredTodos = todoArr.filter((todo) => todo.title != elementTitle)

    writeDataInLocalStorage('todos', filteredTodos)

    e.target.parentElement.remove()
  })

  todoCard.appendChild(removeTodoBtn)

  return todoCard
}

export default TodoCard
