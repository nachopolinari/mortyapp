import Random from "../Random/Random";
import SearchBar from "../SearchBar/SearchBar";
import { Link , NavLink} from "react-router-dom";

const NavBar = ({ onSearch }) => {
    //el componente NavBar solo contiene a SearchBar y lo renderiza
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <Random onSearch={onSearch} />
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
        </div>
    )
}

export default NavBar;