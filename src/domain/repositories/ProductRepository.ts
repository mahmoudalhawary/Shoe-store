import { Product } from '../entities/Product';

export interface ProductRepository {
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    searchProducts(query: string): Promise<Product[]>;
    filterProducts(category: string): Promise<Product[]>;
}
