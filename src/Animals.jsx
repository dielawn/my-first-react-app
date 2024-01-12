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
                .filter((animal) => animal.toLowerCase().startsWith(searchInput))
                .map((animal) => (
            <li key={animal}>{animal}</li>
        ))}
            </ul>
        </>
    )

}

    //conditional 
function Lists(props) {

    return (
        <>
        {!props.animals ? (
            <div>Loading...</div>
        ) : props.animals.length > 0 ? (
            <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>
            })}
        </ul>
        ) : (
            <div>There are no animals listed!</div>
        )}
        

        </>
    )
}

function Item({ name, isPacked}) {
   return <li className="item">{isPacked? <del> {name}✔</del> : name}</li>    
}
function PackingList() {
    return (
        <section>
            <h1>Sally Rides's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helment with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    )
}

function Item1({ name, importance }) {
    let isImportant = importance > 0
    return <li className="item">{isImportant? <em>{name}  Importance: {importance}</em>  : name}</li>    
  }

  function Drink({ name }) {

    const drinks = {
        tea: {
            
            plantPart: 'Leaf',
            caffeine: '15-70 mg/cup',
            age: '4,000+ years'
        },
        coffee: {
            
            plantPart: 'Bean',
            caffeine: '80-185 mg/cup',
            age: '1,000+ years'
        }
  }
  const info = drinks[name] 
  return (
    <section>
                  <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                  <dl>
                    <dt>Part of plant</dt>
                    <dd>{info.plantPart}</dd>
                    <dt>Caffeine content</dt>
                    <dd>{info.caffeine}</dd>
                    <dt>Age</dt>
                    <dd>{info.age}</dd>
                  </dl>
                </section>
  )
   
  }
  
function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  
  
  export default function PackingList2() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item1 
            importance={9} 
            name="Space suit" 
          />
          <Item1 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item1 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  

export function Animals() {
    const [animals, setAnimals]= useState(['Lion', 'Cow', 'Snake', 'Lizard'])
   
    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals} />
            <ListByLetter animals={animals}/>
            <SearchByLetter animals={animals} />
            <Lists  animals={animals}/>
            <PackingList />
            <PackingList2 />
            <DrinkList />
        </div>
    )
}