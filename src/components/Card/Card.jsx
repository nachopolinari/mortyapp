import { Link } from "react-router-dom";
import style from './Card.module.css';
import { addFav, removeFav } from "../../redux/action";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

const Card = ({ id, name, status, gender, species, origin, image, onClose, addFav, removeFav, myFavorites }) => {
   //el componente Card se encarga de renderizar la info que le pasan por props

   const  [isFav, setIsFav]  = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, gender, species, origin, image, onClose });
      setIsFav(!isFav)
      //ver min 50 de code review de react redux - ejercicio 4
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         {
            (
               <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            )
         }

         <button className={style.buttonclose} onClick={() => { onClose(id) }}>X</button>
         <h2 className={style.name}>Name: {name}</h2>
         <Link to={`/detail/${id}`}>
            <img src={image} alt={name} />
         </Link>


      </div >
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

};

export default connect(mapStateToProps, mapDispatchToProps)(Card);