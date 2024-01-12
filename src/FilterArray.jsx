import { recipes, people } from "./data"




function List({prof}) {

    const personsOfProf = people.filter(person => person.profession === prof)
    
    const listItems = personsOfProf.map((person) => (
        
        <li key={person.id}> {person.name}</li>
    ))
     
    return (
      <article>
       
        <h1>{prof.charAt(0).toUpperCase() + prof.slice(1)}</h1>
        <ul>{listItems}</ul>
      </article>
    );
  }


  function Recipe({ id, name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </div>
    );
  }
  
 function RecipeList(selectedRecipeName) {
  
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map(recipe =>
          <Recipe {...recipe} key={recipe.id} />
        )}
      </div>
    );
  }

export function ArrayFilter() {
    

    const chemists = people.filter(person => person.profession === 'chemist')
    const chemist = chemists.map((chemist) => <li key={chemist.name.slice(0, 3).toLocaleLowerCase()}>{chemist.name}</li>)





    return (
        <>
        <h1>Chemist</h1>
        <ul>
            {chemist}
            
        </ul>
        <List prof="chemist"/>
        <List prof="astrophysicist"/>
        <List prof="physicist" />
        <List prof= "mathematician" />

        <RecipeList selectedRecipeName={'Hummus'}/>

                </>
    )
}