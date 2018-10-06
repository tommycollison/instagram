import React from 'react';
import './SearchBar.css';
import logo from './../../assets/ig_search_bar.png';
import heart from './../../assets/like.png';
import user from './../../assets/Sed-01-512.png';
import compass from './../../assets/compass-icon-22.png';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className="searchContainer">
            <div className= "searchContent">
            <img className="img logo" src={logo} alt="insta" />
            <div className="headline"><p>Instagram</p></div>
                <form>
                 <input type='search' placeholder='Search'></input>
                </form>
                <div className="icons">
                <img className="img heart" src={heart} />
                <img className="img user" src={user} />
                <img className="img compass" src={compass} />
                </div>
        </div>
        </div>
    )
}




export default SearchBar;