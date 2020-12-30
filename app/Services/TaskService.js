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
}

export const taskService = new TaskService()