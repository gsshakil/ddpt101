import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'
 

const SearchBox = ({styleName, placeholder, onChange, value}) => {
    if (!styleName) {
        styleName = "";
    }
    if (!value) {
        value = "";
    }
    return (
        <div className={`search-bar right-side-icon bg-transparent ${styleName}`}>
            <div className="form-group">
                <input className="border-0" type="search" placeholder="Search..." onChange={onChange}/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
};
export default SearchBox;