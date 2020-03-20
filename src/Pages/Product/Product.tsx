import React from 'react'
import Chrome from '../../modules/chrome/Chrome'
import CatalogService from '../../Service/CatalogService'
import { Product } from '../../types/dataTypes'

interface ProductPageProps {
    products: Product[]
}

export const ProductPage: React.FC<{}> = React.memo(() => {
    const [products, setProducts] = React.useState<Product[]>([]);
    React.useEffect(() => {
        CatalogService.fetchProducts().then(res => {
            setProducts(res)
        })
    }, []);

    return (
        <Chrome selectedId={'products'}>
            {products.map((product, index) => (
                <div key={index}>{product.name}</div>
            ))}
        </Chrome>
    )
})
