import Unit from "./Unit";
import ConstDamage from "./ConstDamage";
import RandomDamage from "./RandomDamage";
import DangerousTackle from "./DangerousTackle";

export default class MasterData {
    static readonly hero = new Unit(128, 128, 'ああああ')
    static readonly slime = new Unit(10, 10, 'スライム')
    static readonly constDamage4 = new ConstDamage(MasterData.hero, MasterData.slime, 4)
    static readonly randomDamage4 = new RandomDamage(MasterData.hero, MasterData.slime, 4, 4)
    static readonly dangerousTackle8 = new DangerousTackle(MasterData.hero, MasterData.slime, 8, 0.2)
}
