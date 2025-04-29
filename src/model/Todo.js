const Todo = class {
  constructor(title, description, dueDate, priority, notes = '', checklist = false) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  toString() {
    return `title: ${this.title}\ndescription: ${this.description}\ndueDate: ${this.dueDate}\npriority: ${this.priority}\nnotes: ${this.notes}\nchecklist: ${this.checklist}`
  }

  /**
   * @param {boolean} value
   */
  set checklist(value) {
    this.checklist = value
  }
}

export default Todo
