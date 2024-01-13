import { scientists } from "./data"
import { getImageUrl } from './utils.js';
import { CardProfile } from "./Card.jsx";

export function Profile() {
    
        return (
            <>
           { scientists.map((scientist) => (
           <CardProfile key={scientist.imgId} el={
            <section  >
                <h2>{scientist.name}</h2>
                <img src={getImageUrl(scientist.imgId)} alt={scientist.name} width={70} height={70} />
                <ul>
                    <li>
                        <b>Profession: </b> 
                        {scientist.profession}
                    </li>
                    <li>
                        <b>Awards: {scientist.awards.length} </b> 
                        {scientist.awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {scientist.discoveries}
                    </li>
                </ul>
               
            </section>
            } />

         ))}
         </>
        )   
}