export const QuantityType = {
    GRAM: 'gram',
    ML: 'ml',
    PIECE: 'piece',
    SLICE: 'slice',
    PORTION: 'portion',
    BAG: 'bag',
    BOX: 'box',
    OTHER: 'other',
} as const

export type QuantityType =
    typeof QuantityType[keyof typeof QuantityType];
