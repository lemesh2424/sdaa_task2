import { Item } from "./Item";

// your code goes here
export abstract class Weapon extends Item {
    static readonly MODIFIER_CHANGE_RATE = 0.05;
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = 0;
        this.durabilityModifier = 0;
    }

    public setDurabilityModifier(durabilityModifier: number): void {
        this.durabilityModifier = durabilityModifier;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    public setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }

    public getBaseDamage(): number {
        return this.baseDamage;
    }

    public setBaseDamage(baseDamage: number): void {
        this.baseDamage = baseDamage;
    }

    public getBaseDurability(): number {
        return this.baseDurability;
    }

    public setBaseDurability(baseDurability: number): void {
        this.baseDurability = baseDurability;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(this.getDurability() * 100).toFixed(2)}%`;
    }

    public use(): string {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()} it is broken.`;
        }

        let result = `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(2)} points of damage.`;

        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

        if (this.getDurability() <= 0) {
            result += `The ${this.getName()} breaks.`
        }

        return result;
    }

    protected abstract polish(): void;
}