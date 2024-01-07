import { useState } from "react"
import { Player } from "./Players"

// class Game {
//     constructor() {
//         this.player1 = new Player('p1')
//         this.player2 = new Player('p2')
//         this.currentPlayer = null
//     }
//     switchPlayers(){
        
//         if (this.currentPlayer === null) {
//             this.player1.currentPlayer = true;
//             this.player2.currentPlayer = false;
//             this.currentPlayer = this.player1
//         } else {
//             this.player1.currentPlayer = !this.player1.currentPlayer
//             this.player2.currentPlayer = !this.player2.currentPlayer
//             const isPlayer1 = this.player1.currentPlayer
//             isPlayer1? this.currentPlayer = this.player1 : this.currentPlayer = this.player2
//         }
        
//     }
// }
// const newGame = new Game()

// newGame.switchPlayers()
// console.log(newGame.currentPlayer)
// newGame.switchPlayers()
// console.log(newGame.currentPlayer)
// newGame.switchPlayers()
// console.log(newGame.currentPlayer)

function PickAHand() {
   const [result, setResult] = useState(null)

    const isThisHand = () => {
       const rndmResult = Math.random() > .5 ? `Left Hand!` : `Right Hand`
       setResult(rndmResult)
    }
 

    return (
        <>
            <h2>Pick A Hand Any Hand</h2>
            <button onClick={() => isThisHand()}>Left Hand</button>
            <button onClick={() => isThisHand()}>Right Hand</button>
            <p>{result}</p>
        </>
    )
}

export {PickAHand}