import React, { useState, useRef, useEffect } from 'react'
import dice_1 from './assets/dice-1.png'
import dice_2 from './assets/dice-2.png'
import dice_3 from './assets/dice-3.png'
import dice_4 from './assets/dice-4.png'
import dice_5 from './assets/dice-5.png'
import dice_6 from './assets/dice-6.png'
export const DiceGame = () => {
    const diceImages = {
        1: dice_1,
        2: dice_2,
        3: dice_3,
        4: dice_4,
        5: dice_5,
        6: dice_6
    }
    // declaring states
    const [dice, setDice] = useState(0);
    const [firstPlayerFinalScore, setFirstPlayerFinalScore] = useState(0);
    const [secondPlayerFinalScore, setSecondPlayerFinalScore] = useState(0);
    const [firstPlayerCurrentScore, setFirstPlayerCurrentScore] = useState(0);
    const [secondPlayerCurrentScore, setSecondPlayerCurrentScore] = useState(0);
    const [isFirstPlayerActive, setIsFirstPlayerActive] = useState(true);
    // declaring the refrences
    const firstPlayer = useRef(null)
    const secondPlayer = useRef(null)
    const diceImage = useRef(null)
    const btnDiceRoll = useRef(null)
    const btnCurrentScoreHold = useRef(null)
    useEffect(() => {
        if (dice === 0) {
            diceImage.current.classList.toggle('hidden')
        }
        if (dice === 1) {
            onDiceEqualsOne()
        } else {
            updateCurrentScore()
        }
        didPlayerWin()
    }, [dice]);

    // functions

    const onDiceRoll = () => {
        if (dice === 0) {
            diceImage.current.classList.toggle('hidden')
        }
        setDice(Math.trunc(Math.random() * 6) + 1)

    }

    const onDiceEqualsOne = () => {
        resetCurrentScore()
        switchActivePlayer()
        setIsFirstPlayerActive(!isFirstPlayerActive)
        setTimeout(() => {
            setDice(0)
        }, 200);

    }

    const updateCurrentScore = () => {
        isFirstPlayerActive ? setFirstPlayerCurrentScore(firstPlayerCurrentScore + dice) : setSecondPlayerCurrentScore(secondPlayerCurrentScore + dice)
    }

    const resetCurrentScore = () => {
        setFirstPlayerCurrentScore(0)
        setSecondPlayerCurrentScore(0)
    }

    const switchActivePlayer = () => {
        firstPlayer.current.classList.toggle('DiceGame-player--active');
        secondPlayer.current.classList.toggle('DiceGame-player--active');
    }
    const onCurrentScoreHold = () => {
        isFirstPlayerActive ? updateFirstPlayerScore()
            : updateSecondPlayerScore()
        setDice(0)

    }
    const updateFirstPlayerScore = () => {
        setIsFirstPlayerActive(!isFirstPlayerActive)
        setFirstPlayerFinalScore(firstPlayerCurrentScore + firstPlayerFinalScore)
        setFirstPlayerCurrentScore(0)
        switchActivePlayer()
    }

    const updateSecondPlayerScore = () => {
        setIsFirstPlayerActive(!isFirstPlayerActive)
        setSecondPlayerFinalScore(secondPlayerCurrentScore + secondPlayerFinalScore)
        setSecondPlayerCurrentScore(0)
        switchActivePlayer()
    }

    const didPlayerWin = () => {
        if (firstPlayerFinalScore >= 100) {
            firstPlayer.current.classList.add('DiceGame-player--winner')
            freezGame()
        } else if (secondPlayerFinalScore >= 100) {
            secondPlayer.current.classList.add('DiceGame-player--winner')
            freezGame()
        }
    }

    const freezGame = () => {
        btnDiceRoll.current.disabled = true
        btnCurrentScoreHold.current.disabled = true
    }
    const unfreezGame = () => {
        btnDiceRoll.current.disabled = false
        btnCurrentScoreHold.current.disabled = false
    }
    const resetGame = () => {
        unfreezGame()
        setFirstPlayerFinalScore(0)
        setSecondPlayerFinalScore(0)
        setFirstPlayerCurrentScore(0)
        setSecondPlayerCurrentScore(0)
        setIsFirstPlayerActive(true)
        setDice(0)
        firstPlayer.current.classList.remove('DiceGame-player--winner')
        secondPlayer.current.classList.remove('DiceGame-player--winner')
        firstPlayer.current.classList.add('DiceGame-player--active')
        secondPlayer.current.classList.remove('DiceGame-player--active')

    }


    return (
        <div className='DiceGame-body'>
            <main className='DiceGame-main'>
                <section className="DiceGame-player DiceGame-player--active" ref={firstPlayer}>
                    <h2 className="DiceGame-name" id="name--0">Player 1</h2>
                    <p className="DiceGame-score" id="score--0">{firstPlayerFinalScore}</p>
                    <div className="DiceGame-current">
                        <p className="DiceGame-current-label">Current</p>
                        <p className="DiceGame-current-score" id="current--0">{firstPlayerCurrentScore}</p>
                    </div>
                </section>
                <section className="DiceGame-player DiceGame-player--1" ref={secondPlayer}>
                    <h2 className="DiceGame-name" id="name--1">Player 2</h2>
                    <p className="DiceGame-score" id="score--1">{secondPlayerFinalScore}</p>
                    <div className="DiceGame-current">
                        <p className="DiceGame-current-label">Current</p>
                        <p className="DiceGame-current-score" id="current--1">{secondPlayerCurrentScore}</p>
                    </div>
                </section>
                <img src={dice !== 0 ? diceImages[`${dice}`] : ''} alt="Playing dice" className="DiceGame-dice hidden" ref={diceImage} />
                <button className="DiceGame-btn DiceGame-btn--new" onClick={resetGame} >🔄 New game</button>
                <button className="DiceGame-btn DiceGame-btn--roll" ref={btnDiceRoll} onClick={onDiceRoll} >🎲 Roll dice</button>
                <button className="DiceGame-btn DiceGame-btn--hold" ref={btnCurrentScoreHold} onClick={onCurrentScoreHold}>📥 Hold</button>
            </main>

        </div>
    )
}
