import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {
   //el componente Card se encarga de renderizar la info que le pasan por props
   return (
      <div className={style.card}>

         <button className={style.buttonclose} onClick={() => { onClose(id) }}>X</button>
         <h2 className={style.name}>Name: {name}</h2>
         <Link to={`/detail/${id}`}>
            <img src={image} alt={name} />
         </Link>


      </div >
   );
}
export default Card;