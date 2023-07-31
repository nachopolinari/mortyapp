const Random = ({onSearch}) => {

    const addRandomCharacter = () => {
        const randomId = Math.floor(Math.random() * 826) + 1; // ID aleatorio entre 1 y 671
        onSearch(randomId);
      };

    

    return (
        <div>
            <button onClick={addRandomCharacter}>Agregar Random</button>
        </div>
    )
};

export default Random;