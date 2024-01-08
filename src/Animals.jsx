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

export function Animals() {
    const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
   
    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals} />
            <ListByLetter animals={animals}/>
        </div>
    )
}