function TodoAddButton() {
  const btn = document.createElement('button')

  btn.classList.add('todo-add-btn')
  btn.textContent = 'Add Todo'

  btn.addEventListener('click', () => {
    const dialog = document.querySelector('.todo-dialog')
    dialog.showModal()
  })

  const sidebar = document.querySelector('.sidebar')

  sidebar.appendChild(btn)
}

export default TodoAddButton
