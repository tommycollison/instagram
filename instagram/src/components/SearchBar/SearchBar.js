import React from 'react';
import './SearchBar.css'
import logo from './../../assets/ig_search_bar.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className="searchContainer">
            <div className= "searchContent">
            <img className="img" src={logo} alt="insta" /><h2>|</h2>
            <h1>Instagram</h1>
                <form>
                 <input type='search' placeholder='Search'></input>
                </form>
                <div className="icons">
                {/* <FontAwesomeIcon icon="compass" />
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="user" /> */}
                </div>
        </div>
        </div>
    )
}




export default SearchBar;