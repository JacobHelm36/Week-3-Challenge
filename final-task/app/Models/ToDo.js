export default class ToDoList {
  constructor(data) {
    this.toDoName = data.toDoName
    console.log("todo list model")
  }
  get Template() {
    return /*html*/ `
    <div class="col-6">
    <h1>${this.toDoName}</h1>
    
    </div>`
  }
}