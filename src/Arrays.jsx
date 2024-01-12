const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ]



  export function CreateList() {
    const listPeople =  people.map((person) => <li key={person.slice(0, 3)}>{person}</li>)
    return (
        <ul>
            {listPeople}
        </ul>
    )
  }