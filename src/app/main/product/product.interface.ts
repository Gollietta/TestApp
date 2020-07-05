export interface ProductInterface {
    product_id: string;
    product_name: string;
    quantity: number;
    price_usd: number;
    price_jpy: number;
    note: string;
    hidden: boolean;
    date_added: Date;
    date_updated: Date;
}
