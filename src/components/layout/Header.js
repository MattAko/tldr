import React from 'react'
import '../../App.css';

function Header(){
    return(
        <header style = {headerStyle}>
            <h1>The TLDR </h1>
            <h2 style = {{fontStyle: 'italic'}}>We find the info so you don't have to!</h2>
            
        </header>

    )
}

const headerStyle = {
    background: '#eee',
    textAlign: 'center',
    margin: '0px',
    padding: '10px 0px',
    color: 'black'
}

export default Header;
