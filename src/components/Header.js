import React from 'react'


function Header({onDarkModeClick, expression}) {

    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {expression ? "Dark" : "Light"} Mode
        </button>
      </header>)

}

export default Header