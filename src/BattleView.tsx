import React from "react";
import ActionButton from "./ActionButton";
import UnitView from "./UnitView";
import BattleMAHolder from "./BattleMAHolder";

export default class BattleView extends React.Component<any, any> {


    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: BattleMAHolder) {
        super(props);
        this.state = ({
            battleAgent: props.battleAgent,
            battleModel: props.battleModel,
            a: 3
        })
        this.state.battleAgent.modelSubject.subscribe(() => {
            console.log('サブスクライブ完了')
            this.setState(this.state.battleModel)
            this.setState({a: this.state.a + 1})
            this.forceUpdate()
            console.log(this.state);
        })
    }


    render(): React.ReactNode {
        return (
            <div>
                <ActionButton func={this.props.battleAgent.doActionAt.bind(this.props.battleAgent, 0)}
                              name={this.props.battleAgent.getActionNameAt(0)}/>
                <ActionButton func={this.props.battleAgent.doActionAt.bind(this.props.battleAgent, 1)}
                              name={this.props.battleAgent.getActionNameAt(1)}/>
                <ActionButton func={this.props.battleAgent.doActionAt.bind(this.props.battleAgent, 2)}
                              name={this.props.battleAgent.getActionNameAt(2)}/>
                <UnitView unit={this.state.battleModel.self}/>
                <UnitView unit={this.state.battleModel.enemy}/>
                <p>
                    {this.state.a}
                </p>
            </div>
        )
    }
}


