import IAction from "./IAction";

export default class ActionServer {
    static requestAction(action: IAction) {
        action.do()
    }
}