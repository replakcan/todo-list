import './reset.css'
import './styles.css'
import TodoAddButton from './component/TodoAddButton'
import TodoCard from './component/TodoCard'
import TodoDialog from './component/TodoDialog'
import TodoForm from './component/TodoForm'
import { readDataFromLocalStorage } from './lib/readDataFromLocalStorage'

document.addEventListener('DOMContentLoaded', () => {
  readDataFromLocalStorage('todos').map((todo) => TodoCard(todo))
})

TodoDialog(TodoForm())
TodoAddButton()

