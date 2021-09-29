import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

// your code goes here
export class Inventory {
    private readonly items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort((first: Item, second: Item) => comparator.compare(first, second));
            return;
        }

        this.items.sort((first: Item, second: Item) => first.compareTo(second));
    }

    public toString(): string {
        return this.items.map((item) => item.toString()).join(', ');
    }

    public addItem(item: Item) {
        this.items.push(item);
    }
}