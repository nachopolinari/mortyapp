import Random from "../Random/Random";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ onSearch }) => {
    //el componente NavBar solo contiene a SearchBar y lo renderiza
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <Random onSearch={onSearch} />
        </div>
    )
}

export default NavBar;