import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import NewPlayer from './views/NewPlayer'
import Game from "./views/Game"
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list"/>
        <NewPlayer path = "/players/addplayer"/>
        <Game path="/status/game/:id"/>
      </Router>
    </div>
  );
}
export default App;