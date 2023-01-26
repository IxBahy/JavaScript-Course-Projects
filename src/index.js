import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalWindow } from './modalWindow/ModalWindow';
import { GuessTheNumber } from './guessTheNumber/GuessTheNumber';
import App from './App';
import { DiceGame } from './DiceGame/DiceGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/guessTheNumber' element={<GuessTheNumber />} />
        <Route exact path='/modalWindow' element={<ModalWindow />} />
        <Route exact path='/DiceGame' element={<DiceGame />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


