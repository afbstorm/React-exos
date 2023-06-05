import PropTypes from 'prop-types';
import { useState } from 'react';

const Search = (props) => {

    const { setSearch } = props;

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchValue);
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };


    return (
        <>
            <p>Search field</p>
            <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="search" className="search" onChange={handleInputChange}/>
            <input type="submit" value="search" className="submit" />
            </form>
        </>
    )
}

Search.propTypes = {
    setSearch: PropTypes.func.isRequired,
};

export default Search;