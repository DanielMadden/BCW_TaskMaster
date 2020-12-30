import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { save } from "../Utils/localStorage.js";

//Public
class ListService {

  constructor() {
    ProxyState.on("lists", save)
  }

  createList(data) {
    let newList = new List(data)
    ProxyState.lists = [...ProxyState.lists, newList]
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }

}

export const listService = new ListService();
