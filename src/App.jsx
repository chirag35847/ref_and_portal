import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge heading={"Easy"} targetTime={1}/>
        <TimerChallenge heading={"Not Easy"} targetTime={2}/>
        <TimerChallenge heading={"Getting Difficult"} targetTime={5}/>
        <TimerChallenge heading={"Hard"} targetTime={10}/>
      </div>
    </>
  );
}

export default App;
