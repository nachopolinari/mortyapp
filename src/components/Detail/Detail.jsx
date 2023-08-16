import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Detail.module.css'

const Detail = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]); //se queda escuchando cambios en el ID

    return (//se renderiza condicionalmente porq esta info la esta buscando haciendo una peticion asincrona. por eso el "&&"
        <div>
            <h1>Name: "{character.name && character.name}"</h1>
            <img src={character.image && character.image} alt="" />
            <h2>Status: {character.status && character.status}</h2>
            <h3>Species: {character.species && character.species}</h3>
            <h4>Gender: {character.gender && character.gender}</h4>
            <h5>Origin: {character.origin?.name && character.origin?.name /*el conditional chaining te permite acceder de manera segura a propiedades de un objeto (en este caso, el nombre del origen de un personaje) sin causar errores si el valor no está presente o es null/undefined. Esto ayuda a que el programa funcione sin problemas incluso si algunos datos están incompletos. */}</h5>
            <Link to='/home'>
                <button>Volver</button>
            </Link>

        </div>
    )
};

export default Detail;