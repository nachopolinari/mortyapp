const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         <img src={image} alt={name} />
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>

      </div>
   );
}
export default Card;