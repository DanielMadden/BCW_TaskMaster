import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
import { save } from "../Utils/localStorage.js"
import { soundController } from "./SoundController.js"

function _drawTasks(listId) {
    let template = ""
    let tasks = ProxyState.tasks.filter(task => task.listId == listId)
    tasks.forEach(task => template += task.Template)
    document.getElementById(`${listId}-tasks`).innerHTML = template
    // #region Inneficient Method
    // ProxyState.lists.forEach(list => {
    //     let template = ""
    //     list.Items.tasks.forEach(task => {
    //         template += task.Template
    //     })
    //     // console.log(template)
    //     document.getElementById(`${list.id}-tasks`).innerHTML = template
    // })
    // #endregion
}

function _drawRatio(listId) {
    let list = ProxyState.lists.find(list => list.id == listId)
    document.getElementById(`${listId}-ratio`).innerText = `${list.CalcTasks.completed}/${list.CalcTasks.tasks}`
}

export default class TaskController {

    createTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let data = {
            title: form["new-task-name"].value,
            listId: listId
        }
        taskService.createTask(data)
        form.reset()
        _drawTasks(listId)
        _drawRatio(listId)
        soundController.playSound(1)
    }

    deleteTask(id, listId, event) {
        event.stopPropagation()
        if (document.getElementById("popover-delete").classList.contains("confirm")) {
            taskService.deleteTask(id)
            _drawTasks(listId)
            _drawRatio(listId)
            window.app.popController.hide()
            soundController.playSound(3)
        } else {
            window.app.popController.confirmDelete()
            soundController.playSound(4)
        }
    }

    checkTask(id, listId) {
        taskService.checkTask(id, document.getElementById(`${id}-checkbox`).checked)
        soundController.playSound(4)
        _drawRatio(listId)
    }

    moveTask(id, listId, direction) {
        soundController.playSound(1)
        taskService.moveTask(id, listId, direction)
        _drawTasks(listId)
    }
}