import IUnit from "./IUnit";

export default class Unit implements IUnit {
    constructor(readonly hp: number, readonly name: string) {
    }
}