import { useState } from "react";

const SearchBar = ({ onSearch }) => {
   //el componente SearchBar crea el estado local, la f()handleChange y renderiza el input + el boton

   const [id, setId] = useState('');
   //se crea el estado local "id"



   const handleChange = (event) => {
      //la f()handleChange recibe el evento 'onChange' del input y setea el estado local con dicho value
      setId(event.target.value)
   }

   

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => { onSearch(id) }}>Agregar</button>
      </div>
   );
}
export default SearchBar;