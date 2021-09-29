import { Weapon } from "./Weapon";

// your code goes here
export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const maxDamage: number = this.getBaseDamage() * 1.25;

        const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;

        if (this.getBaseDamage() + newDamageModifier > maxDamage) {
            return;
        }

        this.setDamageModifier(newDamageModifier);
    }
}