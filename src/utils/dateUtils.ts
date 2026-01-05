import { parse, isValid, format } from 'date-fns';

export const parseDateToISO = (date: string): string | null => {
    if (!date) return null;

    const parsed = parse(date, 'dd.MM.yyyy', new Date());

    if (!isValid(parsed)) {
        return null;
    }

    return format(parsed, 'yyyy-MM-dd');
};

export const isoToDate = (iso: string): string => {
    if (!iso) return '';

    const date = new Date(iso);

    if (!isValid(date)) {
        return 'Wrong date!';
    }

    return format(date, 'dd.MM.yyyy');
};