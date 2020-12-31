import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ title, id, listId, checked }) {
        this.title = title
        this.listId = listId
        this.id = id || generateId()
        this.checked = checked || false
    }

    get Template() {
        return /*html*/`
            <div class="list-task" id="${this.id}" >
              <input 
              id="${this.id}-checkbox"
              class="task-checkbox" 
              type="checkbox"
              onclick="app.taskController.checkTask('${this.id}', '${this.listId}')"
              ${this.checked ? "checked" : ""}>
              <span class="task-name">${this.title}</span>
              <button
                id="${this.id}-dots"
                class="task-dot-button"
                onclick="app.popController.show('${this.id}', '${this.listId}', event)">
              <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
        `
    }

    get Popover() {
        return /*html*/`
        <div>
        <button
        class="popover-delete-button"
        >
        <i class="far fa-trash-alt"></i>
        </button>
        </div>
        `
    }
}

{/* <button
    class="task-delete-button"
    onclick="app.taskController.deleteTask('${this.id}', '${this.listId}')" >
    <i class="far fa-trash-alt"></i>
</button> */}

{/* <a
    id="${this.id}-dots"
    class="task-dot-button"
    tabindex="0"
    onfocus="app.popController.show('${this.id}', '${this.listId}')"
    onfocusout="app.popController.hide()">
    <i class="fas fa-ellipsis-h"></i>
</a> */}