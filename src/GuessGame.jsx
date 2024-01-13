import { useEffect, useState } from "react"
import './App.css'

function PickAHand() {
   const [result, setResult] = useState(null)
   const [scoreP1, setScore] = useState(0)
   const [selectedHand, selectHand] = useState(null)
   const [count, setCount] = useState(0)

   const addPoint = () => {
        if (result != null && selectedHand != null && result === selectedHand) {
                setScore((prevScore) => prevScore + 1)    
        }             
   }  
  
    const isThisHand = (txt) => {
       const rndmResult = Math.random() > .5 ? `Left Hand` : `Right Hand`
       selectHand(txt)
       setResult(rndmResult)
       setCount((count) => count + 1)
    }
    useEffect(() => {
        addPoint()
    }, [result, selectedHand])

    return (
        <>
            <h2>Pick A Hand Any Hand</h2>
            <button onClick={() => isThisHand('Left Hand')}>Left Hand</button>
            <button onClick={() => isThisHand('Right Hand')}>Right Hand</button>
            <p>You picked {selectedHand}</p>
            <p>Answer: {result}</p>
            <p>Score: {scoreP1}</p>
            <p>Total Rounds played: {count}</p>
        </>
    )
}

export {PickAHand}