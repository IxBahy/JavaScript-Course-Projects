import { Button } from './components/Button';
import './css/app.css'

function App() {
  return (
    <>
      <div className='h-screen bg-slate-800 flex justify-center items-center'>
        <div className='flex justify-center flex-wrap w-1/3 text-center'>
          <Button text={'Guess the Number'} path={'/guessTheNumber'} />
          <Button text={'Modal Window'} path={'/modalWindow'} />
          <Button text={'Dice Game'} path={'/DiceGame'} />
        </div>
      </div>
    </>
  );
}

export default App;
