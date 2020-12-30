export default class ModalController {

    confirmDelete(id) {
        document.getElementById("modal-button-confirm").onclick = function () {
            window.app.listController.deleteList(id)
        }
    }

}