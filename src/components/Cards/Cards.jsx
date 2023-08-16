import Card from '../Card/Card';
import style from './Cards.module.css'

const Cards = ({ characters, onClose }) => {
   //el componente Cards recibe el array characters y lo mapea. por cada char renderiza una Card y le pasa info por props

   return (
      <div className={style.cards}>
         {
            characters.map((char) => {
               return <Card
                  onClose={onClose}
                  id={char.id}
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
      </div>
   );
}
export default Cards;