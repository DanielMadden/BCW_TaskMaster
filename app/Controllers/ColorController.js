export default class ColorController {



    contstructor() {
        document.getElementById("new-list-color").addEventListener("value", this.updateColor())
    }
    updateColor() {
        let input = document.getElementById("new-list-color")
        let color = input.value
        console.log(color)
        // document.getElementById("new-list-color").style.backgroundColor = color
    }
}