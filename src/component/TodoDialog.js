function TodoDialog(form) {
  const dialog = document.createElement('dialog')
  const dialogCloseBtn = document.createElement('button')

  dialog.classList.add('dialog')
  dialog.classList.add('todo-dialog')
  dialog.appendChild(form)

  dialogCloseBtn.textContent = 'X'
  dialogCloseBtn.classList.add('dialog-close-btn')
  dialogCloseBtn.addEventListener('click', () => {
    dialog.close()
  })

  dialog.appendChild(dialogCloseBtn)
  document.body.appendChild(dialog)
}

export default TodoDialog
