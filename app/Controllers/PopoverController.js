import { ProxyState } from "../AppState.js"
export default class PopController {
    constructor() {
    }
    show(id, listId, event) {
        if (event) {
            event.stopPropagation()
        }
        this.noDelete()
        let element = document.getElementById(`${id}-dots`).getBoundingClientRect()
        let popElement = document.getElementById(`popover`).getBoundingClientRect()
        let x = element.x - popElement.width
        let y = element.y + element.height / 2 - popElement.height / 2
        $(`#popover`).css({
            left: x,
            top: y,
        });
        this.showDots(element)
        this.color(listId)
        document.getElementById(`popover`).classList.remove("hidden")
        this.bindActions(id, listId)
    }
    showDots(element) {
        $(`#popover-dots`).css({
            left: element.x,
            top: element.y,
        });
        document.getElementById(`popover-dots`).classList.remove("hidden")
    }
    hide() {
        document.getElementById(`popover`).classList.add("hidden")
        document.getElementById(`popover-dots`).classList.add("hidden")
        this.noDelete()
    }
    color(listId) {
        let root = document.querySelector(':root')
        let color = ProxyState.lists.find(list => list.id == listId).color
        root.style.setProperty('--popover-color', color);
    }
    bindActions(id, listId) {
        document.getElementById("popover-delete").onclick = function (event) {
            window.app.taskController.deleteTask(id, listId, event)
        }
        document.getElementById("popover-up").onclick = function () {
            window.app.taskController.moveTask(id, listId, "up")
            window.app.popController.show(id, listId)
            // window.app.popController.hide()
        }
        document.getElementById("popover-down").onclick = function () {
            window.app.taskController.moveTask(id, listId, "down")
            window.app.popController.show(id, listId)
            // window.app.popController.hide()
        }
    }
    confirmDelete() {
        document.getElementById(`popover-delete`).classList.add("confirm")
    }
    noDelete() {
        document.getElementById(`popover-delete`).classList.remove("confirm")
    }
}