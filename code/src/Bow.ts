// your code goes here
import { Weapon } from "./Weapon";

// your code goes here
export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const newDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

        if (this.getBaseDurability() + newDurabilityModifier > 1) {
            return;
        }

        this.setDurabilityModifier(newDurabilityModifier);
    }
}