import { ProxyState } from "../AppState.js"
import { colorService } from "../Services/ColorService.js"
import { soundController } from "./SoundController.js"

function _drawColors() {
    let template = ""
    ProxyState.colors.forEach(color => template += color.Template)
    document.getElementById("new-list-colors").innerHTML = template
}

let _defaultColor = "#ff4747"

export default class ColorController {

    constructor() {
        this.pickColor(_defaultColor)
        _drawColors()
    }
    showColors(event) {
        event.stopPropagation()
        soundController.playSound(2)
        document.getElementById("new-list-color-popup").classList.remove("hidden")
        document.getElementById("new-list-color-choice").classList.add("no-click")
    }

    hideColors() {
        document.getElementById("new-list-color-popup").classList.add("hidden")
        document.getElementById("new-list-color-choice").classList.remove("no-click")
    }

    pickColor(color, event) {
        if (event) {
            event.preventDefault()
            soundController.playSound(4)
        }
        document.querySelector(":root").style.setProperty('--new-list-color', color);
        document.getElementById("new-list-color").value = color
    }
}