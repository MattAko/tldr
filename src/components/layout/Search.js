import React from 'react'

function Search(){
    return(
        <div className="Search">
            <form>
                <input type="text" val="text" placeholder="Find me the tl;dr"></input>
                <button 
                    className = "searchButton" 
                    type="submit"
                    onClick=""
                    >Search
                </button>
            </form>
        </div>
        
    )
}

export default Search
