import React from 'react'
import './App.css';
import BattleView from "./BattleView";
import MasterData from "./MasterData";
import BattleModel from "./BattleModel";
import BattleAgent from "./BattleAgent";

function App() {
    const battleModel = new BattleModel(MasterData.hero, MasterData.slime)
    const battleAgent = new BattleAgent([MasterData.constDamage4, MasterData.randomDamage4, MasterData.dangerousTackle8])


    return (
        <div className="App">
            <BattleView battleAgent={battleAgent} battleModel={battleModel}/>
        </div>
    );
}

export default App;
