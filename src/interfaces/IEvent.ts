export interface IEvent<T> {
    id: number;
    name: string;
    date: Date;
    place: string;
    guests: Map<string, T>;
    type: string;
}