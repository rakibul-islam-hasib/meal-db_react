import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='Navbar'>
            <div className="name">
                <h1>MailDB</h1>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Mail</li>
                    <li>Contacts</li>
                    <li>Settings</li>
                    <li>See More</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;