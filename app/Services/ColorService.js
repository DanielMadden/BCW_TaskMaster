import { ProxyState } from "../AppState.js"
import Color from "../Models/Color.js"

class ColorService {
  constructor() {
    let colors = [
      "#ff4747",
      "#ffac47",
      "#ffda47",
      "#87ff47",
      "#47ffa9",
      "#47daff",
      "#4791ff",
      "#9d47ff",
      "#ff47ce"
    ]
    ProxyState.colors = colors.map(color => new Color(color))
  }

  pickColor() {

  }
}

export const colorService = new ColorService()