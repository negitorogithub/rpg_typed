import IUnit from "./IUnit";
import IAction from "./IAction";

export default class ConstDamage implements IAction {
    readonly name = '固定ダメージ'

    constructor(readonly from: IUnit, readonly to: IUnit, readonly damage: number) {
    }

    do() {
        console.log('押された')
        this.to.hp = this.to.hp - this.damage
    }
}