import { Avatar } from "./Image.jsx";
import './Card.css'

function Card({children}) {
    return (
        <div className="card">{children}</div>
    )
}

export function CardProfile({el}) {   
    return (       
        <>
          <Card>
           {el}
          </Card>     
       </>        
    )
}