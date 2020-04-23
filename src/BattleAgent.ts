import IAction from "./IAction";
import IBattleAgent from "./IBattleAgent";
import {Subject} from "rxjs";

export default class BattleAgent implements IBattleAgent {
    public modelSubject = new Subject()

    constructor(private actionsListeners: Array<IAction>) {
        console.log('バトルエージェント生成')
    }

    doActionAt(n: number): void {
        this.modelSubject.next()
        this.actionsListeners[n].do()
    }

    getActionNameAt(n: number): String {
        return this.actionsListeners[n].name;
    }


}