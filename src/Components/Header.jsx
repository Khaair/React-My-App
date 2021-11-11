import React from 'react';

import classes from '../Header.module.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    Header
                    <img className={classes.logo} src={logo} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;
