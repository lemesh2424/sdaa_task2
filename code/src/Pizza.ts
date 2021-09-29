import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('Pizza', 1, 1, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    protected eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You eat a slice of the ${this.getName()}`;
        } else {
            return '';
        }
    }
}