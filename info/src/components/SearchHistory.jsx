import React from "react";

const SearchHistory = ({searchTerms}) =>{
    return(
        <>
               <div>
                <h2>Search History</h2>
                <ul>
                    {searchTerms.map((term, index) => (
                        <li key={index}>{term}</li>
                    ))}
                </ul>
                </div> 
        </>
    )
}
export default SearchHistory