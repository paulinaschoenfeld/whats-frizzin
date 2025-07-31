import type {FrozenItem} from "../models/FrozenItem.ts";
import {QuantityType} from "../models/QuantityType.ts";
import {Category} from "../models/Category.ts";

export const frozenItems: FrozenItem[] = [
    {
        id: 1,
        name: 'Chicken breast',
        quantity: 500,
        quantityType: QuantityType.GRAM,
        frozenOn: '2024-07-10',
        category: Category.MEAT,
        notes: 'For curry night 🍛',
    },
    {
        id: 2,
        name: 'Veggie mix',
        quantity: 1,
        quantityType: QuantityType.BAG,
        frozenOn: '2024-07-20',
        category: Category.VEGGIE,
        notes: '',
    },
    {
        id: 3,
        name: 'Sourdough slices',
        quantity: 4,
        quantityType: QuantityType.SLICE,
        frozenOn: '2024-07-05',
        category: Category.BREAD,
        notes: 'Great for quick toasts in the morning',
    },
    {
        id: 4,
        name: 'Bigos',
        quantity: 1,
        quantityType: QuantityType.BOX,
        frozenOn: '2024-06-30',
        category: Category.OTHER,
        notes: 'Leftovers from family dinner 🍽️',
    },
    {
        id: 5,
        name: 'Pierogi ruskie',
        quantity: 10,
        quantityType: QuantityType.PIECE,
        frozenOn: '2024-07-15',
        category: Category.OTHER,
        notes: 'Bonus: don’t eat them all at once 😅',
    },
]