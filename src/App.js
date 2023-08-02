import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form/Form';

function App() {

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   //en pathname guardo donde esta parado el usuario (localhost:3000/)

   // const onSearch = (id) => {
   //    setCharacters([...characters, example])
   // }



   function onSearch(id) {
      //la f()onSearch recibe un id, con axios busca este id en la api de rick&morty y la data que recibe si tiene data.name agrega esa data al array characters, si no muestra el alert
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

         if (data.name) {

            const isCharacterExist = characters.some((character) => character.id === data.id)
            if (!isCharacterExist) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else { window.alert('!El personaje ya fue agregado') }
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
         {pathname !== '/' && <NavBar onSearch={onSearch} />}
         {/*si el usuario esta parado (pathname) en una ruta diferente a '/' , renderizo Navbar;  si no, NO*/}

         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='*' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            {/*<Route path='*' element={<NotFound />} />*/}
         </Routes>


      </div>
   );
}

export default App;
