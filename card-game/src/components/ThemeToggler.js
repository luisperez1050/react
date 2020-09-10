import React, { useEffect } from 'react';
import { themeSelector } from '../javascript/utilities'

const ThemeToggler = () => {

    useEffect( () => {
        themeSelector();
    });

    return (
        <div className="title">
            <h1>Welcome to this Exciting Memory Game</h1>
            <label className="switch">
                <span className="label">Theme</span>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ThemeToggler;