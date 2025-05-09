import './reset.css'
import './styles.css'
import TodoAddButton from './component/TodoAddButton'
import TodoCard from './component/TodoCard'
import TodoDialog from './component/TodoDialog'
import TodoForm from './component/TodoForm'
import ProjectAddButton from './component/ProjectAddButton'
import ProjectContainer from './component/ProjectContainer'
import { todoArr } from './todo-array'
import { projectArr } from './project-array'
import ProjectCard from './component/ProjectCard'
import ProjectDialog from './component/ProjectDialog'
import ProjectForm from './component/ProjectForm'

document.addEventListener('DOMContentLoaded', () => {
  todoArr.map((todo) => TodoCard(todo))
  projectArr.map((project) => ProjectCard(project))
})

ProjectAddButton()
ProjectDialog(ProjectForm(projectArr))

TodoAddButton(projectArr)
TodoDialog(TodoForm(projectArr, todoArr))

ProjectContainer()