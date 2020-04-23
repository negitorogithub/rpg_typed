import IUnit from "./IUnit";
import IAction from "./IAction";

export default class ConstDamage implements IAction {
    readonly name = '捨て身タックル'

    constructor(readonly from: IUnit, readonly to: IUnit, readonly baseDamage: number, readonly reflectedDamageRatio: number) {
    }

    do() {
        console.log('押された')
        this.to.hp = this.to.hp - this.baseDamage
        this.from.hp = this.from.hp - this.baseDamage * this.reflectedDamageRatio
    }
}