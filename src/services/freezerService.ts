import type {FrozenItem, FrozenItemDraft} from "@models/frozenItem.ts";
import {parseDateToISO} from "@/utils/dateUtils.ts";
import {format} from "date-fns";
import { LocalStorage, uid } from 'quasar';
import {ref, readonly} from "vue";

const STORAGE_KEY = 'freezer';

const _items = ref<FrozenItem[]>(LocalStorage.getItem<FrozenItem[]>(STORAGE_KEY) || []);

export const freezerService = {
    items: readonly(_items),

    mapFrozenItem(draft: FrozenItemDraft): FrozenItem {
        const frozenDateValid = draft.frozenToday === true ||
            (draft.frozenOn !== null && parseDateToISO(draft.frozenOn) !== null);

        if (
            !draft.name ||
            !draft.quantity ||
            !draft.quantityType ||
            !draft.category ||
            !frozenDateValid
        ) {
            throw new Error('Invalid form data')
        }

        return {
            id: uid(),
            name: draft.name,
            quantity: draft.quantity,
            quantityType: draft.quantityType,
            category: draft.category,
            frozenOn: draft.frozenToday
                ? format(new Date(), 'yyyy-MM-dd')
                : parseDateToISO(draft.frozenOn!)!,
            notes: draft.notes ?? undefined,
        }
    },

    async getAllItems(): Promise<void> {
        const data = LocalStorage.getItem<FrozenItem[]>(STORAGE_KEY) || [];
        _items.value = data;
    },

    async freezeItem(item: FrozenItemDraft): Promise<void> {
        const newItem: FrozenItem = this.mapFrozenItem(item);

        _items.value = [..._items.value, newItem];

        LocalStorage.setItem(STORAGE_KEY, _items.value);
    },

    async removeItem(id: string): Promise<void> {
        _items.value = _items.value.filter(i => i.id !== id);
        LocalStorage.set(STORAGE_KEY, _items.value);
    }
}