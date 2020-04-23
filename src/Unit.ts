import IUnit from "./IUnit";

export default class Unit implements IUnit {
    constructor(public maxHp: number, public hp: number, public name: string) {
    }

}