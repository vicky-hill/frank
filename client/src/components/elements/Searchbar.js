import React from 'react';
import { connect } from 'react-redux'

function Searchbar({  }) {

    return (
        <div className='searchbar'>
            <i className="fas fa-search searchbar__icon" />
            <input className="searchbar__input" type="text" placeholder="Search" /> 
        </div>
    )
}

export default Searchbar;

