import React from 'react'
import '../../App.css';

function Header(){
    return(
        <header style = {headerStyle}>
            <h1>the tl;dr</h1>
        </header>
    )
}

const headerStyle = {
    background: '#eee',
    textAlign: 'left',
    color: 'black',
    fontSize: '40px',
    fontFamily: 'transat bold',
    display: 'flex',
    alignSelf: "flex-end"
}

export default Header;
