import { useState } from "react"
function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal} />
            })}
        </ul>
    )
}

function ListByLetter(props) {
    
    return (
        <>
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith('L') && <li key={animal}>{animal}</li>
            })}
        </ul>
        </>
    )
}

function SearchByLetter(props) {
    const [searchInput, setSearchInput] = useState('')
    
    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    

    return (
        <>
            <input type="text" onChange={handleInputChange} placeholder="Search by letter" />
           
            <ul>
                { props.animals
                .filter((animal) => animal.startsWith(searchInput))
                .map((animal) => (
            <li key={animal}>{animal}</li>
        ))}
            </ul>
        </>
    )

}

export function Animals() {
    const [animals, setAnimals]= useState(['Lion', 'Cow', 'Snake', 'Lizard'])
   
    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals} />
            <ListByLetter animals={animals}/>
            <SearchByLetter animals={animals} />
        </div>
    )
}