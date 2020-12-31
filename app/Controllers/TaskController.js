import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
import { save } from "../Utils/localStorage.js"

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
    }

    deleteTask(id, listId, event) {
        event.stopPropagation()
        if (document.getElementById("popover-delete").classList.contains("confirm")) {
            taskService.deleteTask(id)
            _drawTasks(listId)
            _drawRatio(listId)
            window.app.popController.hide()
        } else {
            window.app.popController.confirmDelete()
        }
    }

    checkTask(id, listId) {
        taskService.checkTask(id, document.getElementById(`${id}-checkbox`).checked)
        _drawRatio(listId)
    }

    moveTask(id, listId, direction) {
        taskService.moveTask(id, listId, direction)
        _drawTasks(listId)
    }
}