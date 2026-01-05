export const Category = {
    MEAT: 'Meat',
    VEGGIE: 'Veggie',
    BREAD: 'Bread',
    FISH: 'Fish',
    OTHER: 'Other',
} as const

export type Category =
    typeof Category[keyof typeof Category]