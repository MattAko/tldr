import React, {Component} from 'react';
import PropTypes from 'prop-types'


function Search(props){

    /*
    useEffect(()=>{
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('/api', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
 /*
    function onSubmit(e){
        e.preventDefault();
        console.log("Pressed")
        useEffect(()=>{
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React Hooks POST Request Example' })
            };
            fetch('/api', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
    
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, []);
    } */

    const keyword = props.searchTerm;
    console.log(keyword);
    return(
        <div className="Search">
            <form onSubmit={props.postToBackEnd}>
                <input type="text" name="text" placeholder="Find me the tl;dr"></input>
                <button 
                    className="searchButton" 
                    type="submit"
                    onClick={makePost}
                    >Search
                </button>
            </form>
        </div>      
    )

    function makePost(e){
        e.preventDefault();
        console.log("Button was pressed");
    }    
}

// Prop Types
Search.propTypes = {
    searchTerm: PropTypes.object.isRequired
}

export default Search

