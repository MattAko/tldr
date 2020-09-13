import React from 'react'

function Search(){
    return(
        <div className="Search">
            <form>
                <input type="text" val="text"></input>
                <button 
                    className = "searchButton" 
                    type="submit"
                    >Search
                </button>
            </form>
        </div>
        
    )
}

export default Search
