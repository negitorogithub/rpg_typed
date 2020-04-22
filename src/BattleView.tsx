import React from "react";
import ActionButton from "./ActionButton";
import UnitView from "./UnitView";
import BattleMAHolder from "./BattleMAHolder";


class BattleView extends React.Component<any, any> {


    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: BattleMAHolder) {
        super(props);

    }

    render(): React.ReactNode {
        return (
            <div>
                <ActionButton action={this.props.battleAgent.actions[0]}/>
                <UnitView unit={this.props.battleModel.self}/>
                <UnitView unit={this.props.battleModel.enemy} / >
            </div>
        )
    }
}


