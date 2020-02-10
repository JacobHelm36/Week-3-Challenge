import List from "../Models/List.js";
import _store from "../store.js";
import ToDoList from "../Models/ToDo.js";
//Public
class ListService {

  constructor() {
    console.log(_store.State.lists)
  }
  addList(newList) {
    newList = new List(newList)
    _store.State.lists.push(newList)
    console.log(newList.id)
    _store.saveState()
    console.log(_store.State.lists, " from store")
  }

  addTodo(obj, id) {
    //how to assign a unique id?

    let newTodo = new ToDoList(obj)
    let list = _store.State.lists.find(list => list.id == id)
    list.ToDoList.push(newTodo)
    //.find goes thru a list and if true item is returned to variable
    _store.saveState()
    //check local storage function
    //list items coming up undefined on page reload?
  }

  deleteEntry(id) {
    //change your functions around, this is for the whole entry not tasks
    let listIndex = _store.State.lists.findIndex(ll => ll.id == id)
    _store.State.lists.splice(listIndex, 1)
        _store.saveState()
      }

  deleteTask(taskId, listId) {
    window.confirm("are you sure") 
    if (true) {
      debugger
      let list = _store.State.lists.find(l => l.id == listId)
      let task = list.ToDoList.findIndex(p => p.id == taskId) 
      list.ToDoList.splice(task, 1)}
      _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
