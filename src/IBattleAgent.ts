import {Subject} from "rxjs";

export default interface IBattleAgent {
    doActionAt: (n: number) => void
    modelSubject: Subject<any>
    getActionNameAt: (n: number) => String
}