import { generateId } from "../utils.js";
import ToDoLister from "./ToDo.js"

export default class List {

  constructor(data) {
    this.taskTitle = data.taskTitle
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.ToDoList = data.ToDoList || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get ToDoStuff() {
    let template = ''
    this.ToDoList.forEach(l => {
      template += l.Template
    })
    return template
  }
  //saveState() here?


  get Template() {
    return `
        <div class="col-6">
        <h1>${this.taskTitle}</h1>
        <button onclick="app.listController.deleteEntry('${this.id}')" class="btn btn-danger">Delete</button>
        <h5>${this.ToDoStuff}</h5>
        <form onsubmit="app.listController.addToDo(event, '${this.id}')">
                    <div class="form-group">
                      <label for="">To-Do</label>
                      <input type="text" name="toDoName" class="form-control" placeholder="" aria-describedby="helpId">
                      <button class="btn btn-primary" type="submit">
                        Add ToDo item
                      </button>
                    </div>
                  </form>
        </div>
    `
  }
}
