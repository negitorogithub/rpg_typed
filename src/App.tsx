import React from 'react';
import './App.css';
import BattleView from "./BattleView";
import MasterData from "./MasterData";
import BattleModel from "./BattleModel";

function App() {
    const battleModel = new BattleModel(MasterData.hero, MasterData.slime)

    return (
        <div className="App">
            <BattleView self={MasterData.hero} enemy={MasterData.slime}/>
        </div>
    );
}

export default App;
