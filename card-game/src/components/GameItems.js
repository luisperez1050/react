import React from 'react';

const GameItems = () => {
    
    return (

        <div className="game-items">
            <p>
                Flip any card and try to match the cards. <br />
                You can change the difficulty with the mode button.
            </p>
            <div id="timer" className="timer">

            </div>
            <div id="card_flips" className="card-flips">

            </div>

            <div className="buttons">
                <div className="card-options">
                    <button id="start" className="btn btn-primary">Start Game</button>
                    <button id="reset" className="btn btn-danger">Reset Game</button>
                </div>
            </div>

            <div className="points" id="points">

            </div>
        </div>

    );
}

export default GameItems;