import IBattleAgent from "./IBattleAgent";

export default class BattleAgent implements IBattleAgent {
    actionsListeners: Array<(n: number) => {}> = [];

}