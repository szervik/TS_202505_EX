import { IGuest } from "../interfaces/IGuest";

export function isGuest(obj: any): obj is IGuest {
    return (
        typeof obj === 'object' &&
        typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.email === 'string'
    );
}