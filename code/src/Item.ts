import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;
    protected value: number;
    protected name: string;
    protected weight: number;

    public compareTo(other: Item): number {
        if (this.value !== other.value) {
            return this.value > other.value ? 1 : -1;
        }

        const lowerName = this.name.toLowerCase();
        const otherLoweName = other.name.toLowerCase();

        if (lowerName !== otherLoweName) {
            return lowerName > otherLoweName ? 1 : -1;
        }
    }

    constructor(name: string, value: number, weight: number) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;

        id++;
    }

    static get numberOfItems(): number {
        return id;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public setName(name: string): void {
        this.name = name;
    }

    static reset(): void {
        id = 0;
    }

    abstract use(): void;
}
