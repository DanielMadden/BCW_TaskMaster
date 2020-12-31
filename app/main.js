/**
 * REQUIREMENTS
 * DONE All lists and tasks are rendered on load/reload
 * DONE Lists are displayed out in columns across the page
 * DONE Lists can be Created
 * DONE Lists and tasks each have a delete button
 * DONE Title must take in within 3-15 characters
 * DONE Color picker has minimum of 5 different colors
 * DONE Lists include a count of all tasks compared to uncompleted tasks
 * DONE Each List must have its own Task form
 * DONE Tasks can be Created
 * DONE Task title/body must be between 3-50 characters
 * DONE Tasks can be marked complete, this will persist on reload
 * DONE Forms should not submit unless the fields adhere to the requirements
 * DONE Lists can be Deleted
 * DONE Tasks can be Deleted (seperate from being marked complete)
 * DONE Users are prompted to confirm any delete (search window.confirm)
 * DONE All Data persists through local storage
 * 
 * STRETCH GOALS
 * DONE Use something like masonry to render the lists more elegantly
 * DONE Use a better popup then window.confirm for a more clean user experience (see the SweetAlertJS documentation for ideas on this)
 * DONE Play with the styling on 'completed' tasks to include a strikethrough
 * NOTE Add Toast notifications to encourage completed tasks
 * 
 * PERSONAL GOALS
 * NOTE Add Sounds
 * DONE Deleting lists pulls up modal
 * DONE Tasks have a "***" that will open a little popover
 * DONE Popover: colors the "***" and closes popover on click
 * DONE Popover: delete button
 * DONE Popover: move up
 * DONE Popover: move down
 * NOTE Popover: add subtask 
 * DONE Popover: popover itself moves with the movement of the tasks
 * NOTE Custom Checkboxes
 * NOTE Customize the color selector
 * NOTE Center title and form and make it look pretty
 */

import ColorController from "./Controllers/ColorController.js";
import ListController from "./Controllers/ListController.js";
import ModalController from "./Controllers/ModalController.js";
import PopController from "./Controllers/PopoverController.js";
import TaskController from "./Controllers/TaskController.js";
import { load } from "./Utils/localStorage.js";

load()
class App {
  listController = new ListController()
  taskController = new TaskController()
  modalController = new ModalController()
  colorController = new ColorController()
  popController = new PopController()
}

window["app"] = new App();
