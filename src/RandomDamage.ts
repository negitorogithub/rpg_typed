import IUnit from "./IUnit";
import IAction from "./IAction";

export default class ConstDamage implements IAction {
    readonly name = 'ランダムダメージ'

    constructor(readonly from: IUnit, readonly to: IUnit, readonly baseDamage: number, readonly additionalDamageRange: number) {
    }

    do() {
        console.log('押された')
        const damage = this.baseDamage + (Math.random() - 0.5) * this.additionalDamageRange
        this.to.hp = this.to.hp - damage
    }
}