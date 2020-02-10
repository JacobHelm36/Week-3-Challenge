import { generateId } from "../utils.js"

export default class ToDoList {
  constructor(data) {
    this.toDoName = data.toDoName
    this.listId = data.listId
    this.id = data.id || generateId()
  }
  //search for making and unmaking your template
  get Template() {
    return /*html*/ `
    <div class="col-6">
    <h3>${this.toDoName}</h3>
    <button onclick ="app.listController.deleteTask('${this.id}', '${this.listId}')" class="btn btn-danger">XX</button>
    
    </div>`
  }
}