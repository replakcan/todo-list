function ProjectAddButton() {
  const btn = document.createElement('button')

  btn.classList.add('project-add-btn')
  btn.textContent = 'Add Project'

  btn.addEventListener('click', () => {
    const dialog = document.querySelector('.project-dialog')
    dialog.showModal()
  })

  const sidebar = document.querySelector('.sidebar')

  sidebar.appendChild(btn)
}

export default ProjectAddButton
