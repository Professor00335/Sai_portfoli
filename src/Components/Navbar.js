import React from 'react'

const Navbar = ({defaultReload}) => {
    return ( 
        <nav >
            <h1 className='navbar' href='Home'>Sai.dev</h1>
            <ul>
                <li>
                    <a href='home'>Home</a>
                </li>
                <li>
                    <a href='about'>About</a>
                </li>
                <li>
                    <a href='projects'>Projects</a>
                </li>
                <li>
                    <a href='contact'>Contact</a>
                </li>
            </ul>
        </nav>
        
     );
}
 
export default Navbar;