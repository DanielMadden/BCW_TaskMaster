import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { save } from "../Utils/localStorage.js"

class TaskService {
    constructor() {
        ProxyState.on("tasks", save)
    }

    createTask(data) {
        let newTask = new Task(data)
        ProxyState.tasks = [...ProxyState.tasks, newTask]
        this.sortTasks()
    }

    sortTasks() {
        ProxyState.tasks.sort((a, b) => (a.listId > b.listId) ? 1 : (a.listId === b.listId) ? 0 : -1)
    }

    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }

    checkTask(id, isChecked) {
        let task = ProxyState.tasks.find(task => task.id == id)
        let index = ProxyState.tasks.findIndex(task => task.id == id)
        task.checked = isChecked
        ProxyState.tasks[index] = task
        save()
    }

    moveTask(id, listId, direction) {
        this.sortTasks()
        if (direction == "up") {
            let listArrIndex = ProxyState.tasks.filter(task => task.listId == listId).findIndex(task => task.id == id)
            if (listArrIndex != 0) {
                let index = ProxyState.tasks.findIndex(task => task.id == id)
                let temp = ProxyState.tasks[index];
                ProxyState.tasks[index] = ProxyState.tasks[index - 1];
                ProxyState.tasks[index - 1] = temp;
            }
        }
        if (direction == "down") {
            let listArr = ProxyState.tasks.filter(task => task.listId == listId)
            let listArrIndex = listArr.findIndex(task => task.id == id)
            if (listArrIndex != listArr.length - 1) {
                let index = ProxyState.tasks.findIndex(task => task.id == id)
                let temp = ProxyState.tasks[index];
                ProxyState.tasks[index] = ProxyState.tasks[index + 1];
                ProxyState.tasks[index + 1] = temp;
            }
        }
        save()
    }
}

export const taskService = new TaskService()