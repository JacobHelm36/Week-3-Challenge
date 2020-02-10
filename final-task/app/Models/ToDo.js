import { generateId } from "../utils.js"

export default class ToDoList {
  constructor(data) {
    this.toDoName = data.toDoName
    this.id = data.id || generateId()
  }
  get Template() {
    return /*html*/ `
    <div class="col-6">
    <h3>${this.toDoName}</h3>
    <button onclick ="app.listController.deleteList('${this.id}')" class="btn btn-danger">XX</button>
    
    </div>`
  }
}