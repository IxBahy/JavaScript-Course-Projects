import React from 'react'
import dice_5 from './assets/dice-5.png'
export const DiceGame = () => {
    return (
        <div className='DiceGame-body'>
            <main className='DiceGame-main'>
                <section className="DiceGame-player DiceGame-player--active">
                    <h2 className="DiceGame-name" id="name--0">Player 1</h2>
                    <p className="DiceGame-score" id="score--0">43</p>
                    <div className="current">
                        <p className="current-label">Current</p>
                        <p className="current-score" id="current--0">0</p>
                    </div>
                </section>
                <section className="DiceGame-player DiceGame-player--1">
                    <h2 className="DiceGame-name" id="name--1">Player 2</h2>
                    <p className="DiceGame-score" id="score--1">24</p>
                    <div className="DiceGame-current">
                        <p className="DiceGame-current-label">Current</p>
                        <p className="DiceGame-current-score" id="current--1">0</p>
                    </div>
                </section>
                <img src={dice_5} alt="Playing dice" className="DiceGame-dice" />
                <button className="DiceGame-btn DiceGame-btn--new">🔄 New game</button>
                <button className="DiceGame-btn DiceGame-btn--roll">🎲 Roll dice</button>
                <button className="DiceGame-btn DiceGame-btn--hold">📥 Hold</button>
            </main>

        </div>
    )
}
