import { Item } from "./Item";

// your code goes here
export abstract class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);

        this.consumed = false;
        this.spoiled = spoiled;
    }

    public use(): string {
        if (!this.consumed && !this.spoiled) {
            return this.eat();
        }

        if (this.consumed) {
            return `There is nothing left of the ${this.getName()} to consume.`
        }

        let result = this.eat();

        if (this.spoiled) {
            result += '\nYou feel sick.';
        }

        return result;
    }

    protected abstract eat(): string;

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }
 }