import { capitalizeWord } from '../lib/capitalizeWord'

function TodoCard(formData) {
  const { check, description, due_date, notes, priority, title } = formData

  const todoCard = document.createElement('div')

  todoCard.classList.add('todo-card')

  const titleHeading = document.createElement('h1')
  const descriptionPara = document.createElement('p')
  const dueDatePara = document.createElement('p')
  const priorityPara = document.createElement('p')
  const notesPara = document.createElement('p')
  const checkPara = document.createElement('p')

  titleHeading.textContent = 'title: ' + capitalizeWord(title)
  descriptionPara.textContent = 'description: ' + description
  dueDatePara.textContent = 'due date: ' + due_date
  priorityPara.textContent = 'prioprity: ' + priority
  notesPara.textContent = 'notes: ' + notes
  checkPara.textContent = `${check ? 'done' : 'in progress'}`

  todoCard.appendChild(titleHeading)
  todoCard.appendChild(descriptionPara)
  todoCard.appendChild(dueDatePara)
  todoCard.appendChild(priorityPara)
  todoCard.appendChild(notesPara)
  todoCard.appendChild(checkPara)

  document.querySelector('.todo-container').appendChild(todoCard)

  return todoCard
}

export default TodoCard
