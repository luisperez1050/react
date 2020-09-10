import React from 'react';
import ThemeToggler from './ThemeToggler';
import GameItems from './GameItems';


const Layout = () => {
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