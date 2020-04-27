export interface User {
    email: string
    type: Type[]
    name?: string;
    surname?: string;
    phone?: string;
    invoiceData?: string;
}

export enum Type {
    CLIENT = 'USER',
    ADMIN = 'ADMIN'
}
