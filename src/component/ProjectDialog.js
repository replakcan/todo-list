function ProjectDialog(form) {
    const dialog = document.createElement('dialog')
    const dialogCloseBtn = document.createElement('button')
  
    dialog.classList.add('dialog')
    dialog.classList.add('project-dialog')
    dialog.appendChild(form)
  
    dialogCloseBtn.textContent = 'X'
    dialogCloseBtn.classList.add('dialog-close-btn')
    dialogCloseBtn.addEventListener('click', () => {
      dialog.close()
    })
  
    dialog.appendChild(dialogCloseBtn)
    document.body.appendChild(dialog)
  }
  
  export default ProjectDialog
  