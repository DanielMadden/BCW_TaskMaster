class SoundController {
    constructor() {
        this.sounds = [
            document.getElementById("click-1"),
            document.getElementById("click-2"),
            document.getElementById("click-3"),
            document.getElementById("click-4")
        ]
    }
    playSound(id) {
        id = id - 1
        this.sounds[id].play()
    }
}

export const soundController = new SoundController()