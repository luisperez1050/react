import React, { useEffect }  from 'react';
import ThemeToggler from './ThemeToggler';
import GameItems from './GameItems';
import cardLayout, { startLayout, timerIncrement, pad, startGame, resetGame, verifyCardsMatch } from '../javascript/utilities';


const Layout = () => {

    useEffect( () => {
        startLayout(cardLayout.column, cardLayout.row);
        startGame();
        resetGame();
        verifyCardsMatch();
        timerIncrement();
        pad();
    });

    return (
        <main>
            <section className="container">
                <ThemeToggler></ThemeToggler>
                <GameItems></GameItems>

                <div className="row disabled">
                    {/* where cards are created */}
                </div>
            </section>
        </main>
    );
}

export default Layout;