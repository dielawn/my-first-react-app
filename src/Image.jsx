import './Image.css'
import {getImageUrl} from'./utils.js'

function Avatar({person, size=100}) {
    return (
        <img
          className="avatar"
          src={getImageUrl(person.imageId)}
          alt={person.name}
          width={size}
          height={size}
        />
    )
}

function Profile() {
    return (
       <>
       <Avatar
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={60}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
       </>
    )
}

export {
    Profile,
    Avatar
}
