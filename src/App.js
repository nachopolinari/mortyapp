import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar';
import { useState } from 'react';
import axios from 'axios';

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {

   const [characters, setCharacters] = useState([])

   // const onSearch = (id) => {
   //    setCharacters([...characters, example])
   // }



   function onSearch(id) {
      //la f()onSearch recibe un id, con axios busca este id en la api de rick&morty y la data que recibe si tiene data.name agrega esa data al array characters, si no muestra el alert
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.name) {

            const isCharacterExist = characters.some((character) => character.id === data.id)
            if(!isCharacterExist){
            setCharacters((oldChars) => [...oldChars, data]);
         }else{window.alert('!El personaje ya fue agregado')}
      }
         else {
            window.alert('¡No hay personajes con este ID!');
         }

      });
   };

   const onClose = (id) => {
      //la f()onClose recibe un id, se encarga de filtrar todo el estado local characters que es un array y retorna todo igual excepto el character que tiene ese id. de esta forma lo elimina de dicho array
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
