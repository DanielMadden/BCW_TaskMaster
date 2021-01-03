import { soundController } from "./SoundController.js"

export default class ModalController {

    confirmDelete(id) {
        soundController.playSound(2)
        document.getElementById("modal-button-confirm").onclick = function () {
            window.app.listController.deleteList(id)
            window.app.soundController.playSound(3)
        }
    }

}