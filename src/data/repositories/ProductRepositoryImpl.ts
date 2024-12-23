import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';

export class ProductRepositoryImpl implements ProductRepository {
    private apiBaseUrl = '/api/products'; // Replace with your actual API URL

    async getAllProducts(): Promise<Product[]> {
        const response = await fetch(this.apiBaseUrl);
        return response.json();
    }

    async getProductById(id: string): Promise<Product> {
        const response = await fetch(`${this.apiBaseUrl}/${id}`);
        return response.json();
    }

    async searchProducts(query: string): Promise<Product[]> {
        const response = await fetch(`${this.apiBaseUrl}/search?q=${query}`);
        return response.json();
    }

    async filterProducts(category: string): Promise<Product[]> {
        const response = await fetch(`${this.apiBaseUrl}/category/${category}`);
        return response.json();
    }
}
