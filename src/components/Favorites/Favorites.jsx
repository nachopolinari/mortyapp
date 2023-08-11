import { connect } from 'react-redux';
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import { filterCards,orderCards } from '../../redux/action';

const Favorites = ({ myFavorites }) => {
    return (
        <div>

            <select name="" id="">
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            {
                myFavorites?.map(
                    (
                        { id, name, status, gender, species, origin, image, onClose }
                    ) => {
                        return (<Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />)
                    })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);