import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function save() {
    localStorage.setItem("data", JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
}

export function load() {
    let data = JSON.parse(localStorage.getItem("data"))
    if (data) {
        ProxyState.lists = data.lists.map(list => new List(list))
        ProxyState.tasks = data.tasks.map(task => new Task(task))
    }
}
