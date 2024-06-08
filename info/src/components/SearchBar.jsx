import React, { useState } from "react";

const SearchBar = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm(''); 
    };
    return(<>
    <div>
        <input type="text" value={searchTerm} 
        onChange={(e) =>{
            setSearchTerm(e.target.value) 
        }} placeholder=" search by name" />
        <button onClick={handleSearch}>search</button>
    </div>
    </>)
}
export default SearchBar;