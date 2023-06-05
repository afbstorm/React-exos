import PropTypes from 'prop-types';
import { useState } from 'react';
import './search.css';

const Search = (props) => {

    // Récyperer la fonction setSearch depuis videoPlayer.jsx
    const { setSearch } = props;

    // Création un state pour le champ de recherche 
    const [searchValue, setSearchValue] = useState('');

    // Fonction pour soumettre le formulaire et set le state de search
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchValue);
    };

    // Fonction pour mettre à jour le state de searchValue
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };


    return (
        <div className='search-layout'>
            <p className='search-title'>Search field</p>
            <form action="" onSubmit={handleSubmit}>
                <div className="search-container">
                    <input type="text" placeholder="search" className="search" onChange={handleInputChange}/>
                    <input type="submit" value="search" className="submit" />
                </div>
            </form>
        </div>
    )
}

Search.propTypes = {
    setSearch: PropTypes.func.isRequired,
};

export default Search;