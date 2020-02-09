import List from "../Models/List.js";
import _store from "../store.js";
import ToDoList from "../Models/ToDo.js";
//Public
class ListService {

  constructor() {
    console.log("List service is linked")
  }
  addList(newList) {
    newList = new List(newList)
    console.log(_store.State.lists)
    _store.State.lists.push(newList)
    _store.saveState()
  }

  addTodo(newTodo, id) {
    newTodo = new ToDoList(newTodo)
    let list = _store.State.lists.find(List => List.id === id)
    //.find goes thru a list and if true item is returned to variable
    _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
