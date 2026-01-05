import {QuantityType} from "@models/quantityType.ts";
import {Category} from "@models/category.ts";


export type FrozenItem = {
    id: string;
    name: string;
    quantity: number;
    quantityType: QuantityType;
    frozenOn: string;
    category: Category;
    notes?: string;
}

export type FrozenItemDraft = {
    name: string | null
    quantity: number | null
    quantityType: QuantityType | null
    frozenToday: boolean | null
    frozenOn: string | null
    category: Category | null
    notes?: string | null
}