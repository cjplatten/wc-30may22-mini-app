import React from 'react';
import skateboarder from '../Images/skater-ghost.png';


const Header = () => {
    return (
        <header className="App-header">
        <h1 className='App-header-h1'>✨😎stay radical😎✨</h1>
         <img src={skateboarder} className="App-logo" alt="skateboarding ghost" />
       </header>
    );
}

export default Header;
