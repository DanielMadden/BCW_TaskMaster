
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {List[]} */
  lists = []
  /** @type {Task[]} */
  tasks = []
  /** @type {Color[]} */
  colors = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    // if (prop != "_listeners" && prop != "on") {
    //   // console.log("Getting ", prop)
    // }
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    // console.log("Setting ", prop)
    return true
  }
})
