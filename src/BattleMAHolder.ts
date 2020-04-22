import IBattleModel from "./IBattleModell";
import IBattleAgent from "./IBattleAgent";

export default class BattleMAHolder {
    constructor(readonly battleModel: IBattleModel, readonly battleAgent: IBattleAgent) {
    }
}