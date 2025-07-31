import {QuantityType} from "@/models/QuantityType";
import {Category} from "@/models/Category";


export type FrozenItem = {
    id: number;
    name: string;
    quantity: number;
    quantityType: QuantityType;
    frozenOn: string;
    category: Category;
    notes?: string;
}