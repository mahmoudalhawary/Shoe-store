import React, { useEffect, useState } from 'react';
import { Product } from '../../../domain/entities/Product';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepositoryImpl';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const productRepository = new ProductRepositoryImpl();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productRepository.getAllProducts();
                setProducts(data);
            } catch (error) {
                setError('Failed to load products. Please try again later.');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-500">{error}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative pb-[100%]">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm text-gray-500">Available Sizes:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {product.sizes.map((size) => (
                                        <span key={size} className="px-2 py-1 text-xs border border-gray-200 rounded">
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
