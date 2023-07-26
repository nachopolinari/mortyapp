import Card from './Card';

const Cards = ({ characters }) => {
   return (<div>
      {
         characters.map((char) => {
            return <Card
               onClose={() => window.alert('Emulamos que se cierra la card')}
               key={char.id}
               name={char.name}
               status={char.status}
               species={char.species}
               gender={char.gender}
               origin={char.origin.name}
               image={char.image}
            />
         })
         //TAMBIEN SE PUEDE DESTRUCTURAR DENTRO DEL MAP:
         // characters.map(({id,name,status,species,gender,image,origin}) => {
         //    return <Card
         //       key={id}
         //       name={name}
         //       status={status}
         //       species={species}
         //       gender={gender}
         //       origin={origin.name}
         //       image={image}
         //    />
         // })

      }
   </div>);
}
export default Cards;