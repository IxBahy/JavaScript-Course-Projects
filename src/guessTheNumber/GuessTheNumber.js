import React, { useState, useEffect } from 'react'
import '../css/style.css'
export const GuessTheNumber = () => {
    // **********************************************************
    //***************** declaring the states ********************
    // **********************************************************
    const [goal, setGoal] = useState(Math.trunc(Math.random() * 20) + 1);
    const [userGuess, setUserGuess] = useState();
    const [score, setScore] = useState(20);
    const [highScore, setHighScore] = useState(0);
    const [message, setMessage] = useState('');
    // **********************************************************
    //************** declaring the functions ********************
    // **********************************************************
    useEffect(() => {
        if (userGuess === goal) {
            guessIsEqual()
        } else if (!userGuess) {
            setMessage('input a number to Start guessing... ')
        }
        else if (userGuess > goal) {
            guessIsHigher()
        } else if (userGuess < goal) {
            guessIsLower()
        }
    }, [userGuess]);
    //page buttons
    const handleAgineButton = () => {
        setGoal(Math.trunc(Math.random() * 20) + 1)
        setScore(20)
        setMessage('input a number to Start guessing... ')
        document.getElementsByTagName('body')[0].style.backgroundColor = ''
        document.querySelector('.guess').value = ''
    }

    const handleCheckButton = () => {
        setUserGuess(Number(document.getElementsByClassName('guess')[0].value))

    }

    //comparing event results
    const guessIsEqual = () => {
        setMessage('Well Done 🎉')
        document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347'
        if (score > highScore) {
            setHighScore(score)
        }
    }
    const guessIsHigher = () => {
        setMessage('too High 📈');
        score < 1 ? scoreIsZero() : setScore(score - 1);
    }
    const guessIsLower = () => {
        setMessage('too Low 📉');
        score < 1 ? scoreIsZero() : setScore(score - 1);

    }
    const scoreIsZero = () => {
        setMessage('you lost ☹️')
        document.querySelector('.check').disabled = true
    }





    return (
        <div>
            <header>
                <h1>Guess My Number!</h1>
                <p className="between">(Between 1 and 20)</p>
                <button className="btn again" onClick={handleAgineButton}>Again!</button>
                <div className="number">?</div>
            </header>
            <main>
                <section className="left">
                    <input type="number" className="guess" />
                    <button className="btn check" onClick={handleCheckButton}>Check!</button>
                </section>
                <section className="right">
                    <p className="message">{message}</p>
                    <p className="label-score">💯 Score: <span className="score">{score}</span></p>
                    <p className="label-highscore">
                        🥇 Highscore: <span className="highscore">{highScore}</span>
                    </p>
                </section>
            </main>
        </div>

    )
}
