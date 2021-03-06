import React from 'react';
import {NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Icon from '../shared/Icon';

export default ({user, loginPrompt, logout, isLoggingIn, loginError, environmentName}) => {

    const logoutClicked = (e) => {
        e.preventDefault();
        logout();
    };

    const loginClicked = (e) => {
        e.preventDefault();
        loginPrompt();
    };

    if (user) {
        return (
            <NavDropdown eventKey={3} title={<span><Icon icon="user" /> {user.name}</span>} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.3} onClick={logoutClicked}>
                    <Icon icon="sign-out"/> Logout
                </MenuItem>
            </NavDropdown>
        );
    }
    else {
        const navIcon = isLoggingIn ? 'spinner  fa-spin' : loginError? 'exclamation-triangle' : 'sign-in';
        const navText = isLoggingIn ? 'Logging in' : loginError? 'Error logging in!' :'Login';
        return (
            <NavItem eventKey={2} href="#" onClick={loginClicked}>
                <Icon icon={navIcon} /> {navText} <small>{environmentName}</small>
            </NavItem>
        );
    }
};
