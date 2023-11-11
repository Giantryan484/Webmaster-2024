import React from 'react';

import './Header.css'; // Make sure to create this CSS file

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <button className="logo-button">Logo</button>
            </div>
            <div className="header-right">
                <button className="nav-button">Home</button>
                <button className="nav-button">Info</button>
                <button className="nav-button">SlideShow</button>
                <button className="nav-button">Explorer</button>
                <button className="nav-button">Resources</button>
            </div>
        </div>
    // <div className="header">
    //     <div className="header-left">
    //         <Link to="/" className="logo-button">Logo</Link>
    //     </div>
    //     <div className="header-right">
    //         <Link to="/" className="nav-button">Home</Link>
    //         <Link to="/info" className="nav-button">Info</Link>
    //         <Link to="/slideshow" className="nav-button">SlideShow</Link>
    //         <Link to="/explorer" className="nav-button">Explorer</Link>
    //         <Link to="/resources" className="nav-button">Resources</Link>
    //     </div>
    // </div>
    );
};

export default Header;
