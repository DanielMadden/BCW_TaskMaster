export default class Color {
  constructor(color) {
    this.color = color
  }

  get Template() {
    return /*html*/`
    <div 
      class="new-list-color-button d-flex justify-content-center align-items-center"
      onclick="app.colorController.pickColor('${this.color}', event)" 
      style="background-color: ${this.color}">
    <i class="fas fa-plus"></i>
    </div>
    `
  }
}