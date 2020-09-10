import React from 'react';

const HeaderNav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://luisperez1050.github.io/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://luisperez1050.github.io/card_game.html">Card Game</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react">React Card Game <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderNav;