import ProductCard from './components/productCard/ProductCard';
import { products } from '@/data/data';

const Shoping = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shoping;
