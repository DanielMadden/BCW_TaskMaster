

export default class PopController {
    constructor() {
    }
    show(id, listId) {
        let element = document.getElementById(`${id}-dots`).getBoundingClientRect()
        let popElement = document.getElementById(`popover`).getBoundingClientRect()
        let x = element.x + element.width / 2 - popElement.width / 2
        let y = element.y + 20
        $(`#popover`).css({
            left: x,
            top: y,
            opacity: 1
        });
        this.bindActions(id, listId)
        setTimeout(this.prepHide, 100)
    }

    prepHide() {
        document.getElementById("main").onclick = function () {
            window.app.popController.hide()
        }
    }

    hide() {
        document.getElementById(`popover`).style.opacity = "0"
        document.getElementById(`popover-delete`).classList.remove("confirm")
        document.getElementById("main").onclick = function () {
        }
    }

    bindActions(id, listId) {
        console.log("binding actions...")
        console.log()
        document.getElementById("popover-delete").onclick = function () {
            window.app.taskController.deleteTask(id, listId)
        }
    }
}