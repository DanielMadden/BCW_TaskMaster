import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor({ title, color, id }) {
    this.title = title
    this.color = color
    this.id = id || generateId();
  }

  get CalcTasks() {
    return {
      tasks: ProxyState.tasks.filter(task => task.listId == this.id).length,
      completed: ProxyState.tasks.filter(task => task.listId == this.id).filter(task => task.checked == true).length
    }
  }

  get Template() {
    return /*html*/`
    <div class="list-card col my-3 card">
        <div class="list-header row" style="background-color:${this.color}" >
        <div class="col p-0" >

          <button 
          class="list-delete-button" 
          onclick="app.modalController.confirmDelete('${this.id}')"
          data-toggle="modal" 
          data-target="#modal-confirm">
          <i class="fas fa-times"></i>
          </button>

          <h5 class="list-title text-center pt-2">${this.title}</h5>

          <p
          class="text-center p-0"
          id="${this.id}-ratio" >${this.CalcTasks.completed}/${this.CalcTasks.tasks}</p>
        </div>
        </div>

        <div class="list-body row py-3" >
          <div class="col" id="${this.id}-tasks" >
            ${this.Tasks.template}
          </div>
        </div>

        <div class="list-bottom-space row pt-5" >
      
        </div>

        <div class="list-footer row d-flex justify-content-center py-3">
          <form class="new-task-form" onsubmit="app.taskController.createTask('${this.id}')" >

            <input 
            name="new-task-name"
            class="new-task-name" 
            type="text" 
            placeholder="Add Task..."
            style="caret-color: ${this.color}"
            pattern=".{3,30}"
            maxlength="30"   
            required
            onfocusin="this.style['border-bottom']='2px solid ${this.color}'"
            onfocusout="this.style['border-bottom']='2px solid var(--light-gray)'">

            <button
            class="new-task-button"
            type="submit"
            style="color: ${this.color}"
            onmouseover="this.style['background-color']='${this.color}';this.style.color='white'"
            onmouseout="this.style['background-color']='rgb(0, 0, 0, 0)';this.style.color='${this.color}'">
              <i class="fas fa-plus"></i>
            </button>

          </form>
        </div>

      </div>
    `
  }

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
    tasks.forEach(task => template += task.Template)
    return {
      tasks: tasks,
      template: template
    }
  }

}