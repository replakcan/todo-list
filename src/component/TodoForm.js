import { readDataFromLocalStorage } from '../lib/readDataFromLocalStorage'
import { writeDataInLocalStorage } from '../lib/writeDataInLocalStorage'
import { todoArr } from '../todo-array'
import TodoCard from './TodoCard'

function TodoForm() {
  const todoForm = document.createElement('form')

  todoForm.id = 'todo_form'
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(todoForm)

    const data = {}

    formData.forEach((value, key) => {
      data[key] = value
    })

    todoArr.push(data)

    writeDataInLocalStorage('todos', todoArr)
    const todos = readDataFromLocalStorage('todos')

    document.querySelector('.todo-container').innerHTML = ''

    todos.map((todo) => TodoCard(todo))
    const dialog = document.querySelector('dialog')

    dialog.close()
    todoForm.reset()
  })

  const fieldsetRequired = document.createElement('fieldset')
  const legendRequired = document.createElement('legend')

  legendRequired.textContent = 'Required'

  const fieldsetOptional = document.createElement('fieldset')
  const legendOptional = document.createElement('legend')

  legendOptional.textContent = 'Optional'

  const titleDiv = document.createElement('div')
  const titleLabel = document.createElement('label')
  const titleInput = document.createElement('input')

  titleLabel.textContent = 'title: '
  titleLabel.setAttribute('for', 'title')

  titleInput.setAttribute('type', 'text')
  titleInput.setAttribute('id', 'title')
  titleInput.setAttribute('name', 'title')
  titleInput.setAttribute('autofocus', '')

  const descriptionDiv = document.createElement('div')
  const descriptionLabel = document.createElement('label')
  const descriptionInput = document.createElement('input')

  descriptionLabel.textContent = 'description: '
  descriptionLabel.setAttribute('for', 'description')

  descriptionInput.setAttribute('type', 'text')
  descriptionInput.id = 'description'
  descriptionInput.setAttribute('name', 'description')

  const dueDateDiv = document.createElement('div')
  const dueDateLabel = document.createElement('label')
  const dueDateInput = document.createElement('input')

  dueDateLabel.textContent = 'due_date: '
  dueDateLabel.setAttribute('for', 'due_date')

  dueDateInput.setAttribute('type', 'date')
  dueDateInput.id = 'due_date'
  dueDateInput.setAttribute('name', 'due_date')

  const priorityDiv = document.createElement('div')
  const priorityLabel = document.createElement('label')
  const prioritySelect = document.createElement('select')
  const option = document.createElement('option')
  const option1 = document.createElement('option')
  const option2 = document.createElement('option')

  priorityLabel.textContent = 'priorirty: '
  priorityLabel.setAttribute('for', 'priority')

  prioritySelect.setAttribute('name', 'priority')

  prioritySelect.id = 'priority'
  option.value = 'not'
  option1.value = 'normal'
  option2.value = 'acil'

  option.textContent = 'not'
  option1.textContent = 'normal'
  option2.textContent = 'acil'

  const notesDiv = document.createElement('div')
  const notesLabel = document.createElement('label')
  const notesTextarea = document.createElement('textarea')

  notesLabel.textContent = 'notes: '
  notesLabel.setAttribute('for', 'notes')

  notesTextarea.id = 'notes'
  notesTextarea.setAttribute('name', 'notes')

  const checklistDiv = document.createElement('div')
  const checklistLabel = document.createElement('label')
  const checklistInput = document.createElement('input')

  const submitBtn = document.createElement('button')

  submitBtn.setAttribute('type', 'submit')
  submitBtn.setAttribute('form', 'todo_form')
  submitBtn.textContent = 'Add Todo'

  checklistLabel.textContent = "check if it's done: "
  checklistLabel.setAttribute('for', 'check')

  checklistInput.setAttribute('type', 'radio')
  checklistInput.id = 'check'
  checklistInput.setAttribute('name', 'check')

  titleInput.setAttribute('required', '')
  descriptionInput.setAttribute('required', '')
  dueDateInput.setAttribute('required', '')
  prioritySelect.setAttribute('required', '')

  titleDiv.appendChild(titleLabel)
  titleDiv.appendChild(titleInput)

  descriptionDiv.appendChild(descriptionLabel)
  descriptionDiv.appendChild(descriptionInput)

  dueDateDiv.appendChild(dueDateLabel)
  dueDateDiv.appendChild(dueDateInput)

  priorityDiv.appendChild(priorityLabel)
  priorityDiv.appendChild(prioritySelect)
  prioritySelect.appendChild(option)
  prioritySelect.appendChild(option1)
  prioritySelect.appendChild(option2)

  notesDiv.appendChild(notesLabel)
  notesDiv.appendChild(notesTextarea)

  checklistDiv.appendChild(checklistLabel)
  checklistDiv.appendChild(checklistInput)

  fieldsetRequired.appendChild(legendRequired)

  fieldsetRequired.appendChild(titleDiv)
  fieldsetRequired.appendChild(descriptionDiv)
  fieldsetRequired.appendChild(dueDateDiv)
  fieldsetRequired.appendChild(priorityDiv)

  fieldsetOptional.appendChild(legendOptional)

  fieldsetOptional.appendChild(notesDiv)
  fieldsetOptional.appendChild(checklistDiv)

  todoForm.appendChild(fieldsetRequired)
  todoForm.appendChild(fieldsetOptional)
  todoForm.appendChild(submitBtn)

  return todoForm
}

export default TodoForm
