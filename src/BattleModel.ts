import IUnit from "./IUnit";
import IBattleModel from "./IBattleModell";

export default class BattleModel implements IBattleModel {
    constructor(public self: IUnit, public enemy: IUnit) {

    }
}