import IUnit from "./IUnit";

export default interface IAction {
    from: IUnit
    to: IUnit
    do: Function
    name: String
}