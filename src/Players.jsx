import { useState } from "react"

class Player {
    constructor(name) {
        this.name = name
        this.currentPlayer = null
        this.score = null
    }
}

export {Player}