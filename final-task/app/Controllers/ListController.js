import ListService from "../Services/ListService.js";
import _store from "../store.js"
//TODO Don't forget to render to the screen after every data change.


function _drawLists() {
  let lists = _store.State.lists
  let listElem = document.getElementById("addingLists")
  let template = ''
  console.log("draw function up")

  lists.forEach(list => {
    template += list.Template
  })
  listElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    console.log("controller linked")
    _drawLists()
    //NOTE: After the store loads, we can automatically call to draw the lists.
 
  }
  addList(event) {
    event.preventDefault();

    let form = event.target;

    let newList = {
      taskTitle: form.taskTitle.value
    }
    ListService.addList(newList)
    _drawLists();
  }

  addToDo(event, id) {
    
    event.preventDefault();
    let form = event.target;

    let newTodo = {
      toDoName: form.toDoName.value
    }
    ListService.addTodo(newTodo, id);
    _drawLists()
  }


  deleteEntry(id) {
    ListService.deleteEntry(id)
    _drawLists()
  } 

  deleteList(id) {
    ListService.deleteList(id)
    _drawLists()
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
