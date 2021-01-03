import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { soundController } from "./SoundController.js";

function _drawLists() {
  let template = ""
  ProxyState.lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template
}

export default class ListController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    _drawLists();
    // #region TEST LISTS
    // listService.createList({
    //   title: "Red",
    //   color: "#ff4747"
    // })
    // listService.createList({
    //   title: "Orange",
    //   color: "#ffac47"
    // })
    // listService.createList({
    //   title: "Yellow",
    //   color: "#ffda47"
    // })
    // listService.createList({
    //   title: "Grass",
    //   color: "#87ff47"
    // })
    // listService.createList({
    //   title: "Mint",
    //   color: "#47ffa9"
    // })

    // listService.createList({
    //   title: "Sky",
    //   color: "#47daff"
    // })
    // listService.createList({
    //   title: "Blue",
    //   color: "#4791ff"
    // })
    // listService.createList({
    //   title: "Purple",
    //   color: "#9d47ff"
    // })
    // listService.createList({
    //   title: "Pink",
    //   color: "#ff47ce"
    // })
    // #endregion
  }

  createList(event) {
    event.preventDefault()
    let form = event.target
    let lastColor = form["new-color"].value
    // console.log(form)
    let data = {
      title: form["new-title"].value,
      color: form["new-color"].value
    }
    listService.createList(data)
    // console.log(data)
    form.reset()
    form["new-color"].value = lastColor
    soundController.playSound(1)
  }

  deleteList(id) {
    listService.deleteList(id)
  }
}
