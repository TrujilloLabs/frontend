// export interface Product {
//     id: string;
//     name: string;
//     price: number;
//     imageUrl: string;
//     categoryId: string;
// }


export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    priceCop: number;
    priceUsd?: number | null;
    imageUrl?: string;
    storeId: string;
    data?: string;
    subcategory: {
        id: string;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}


export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}