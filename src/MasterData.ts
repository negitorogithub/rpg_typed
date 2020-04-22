import Unit from "./Unit";
import ConstDamage from "./ConstDamage";

export default class MasterData {
    static readonly hero = new Unit(128, 'ああああ')
    static readonly slime = new Unit(10, 'スライム')
    static readonly constDamage4 = new ConstDamage(MasterData.hero, MasterData.slime, 4)
}
