    import React from 'react'
    import ProductCard from '../components/ProductCard'
    import { useSelector } from 'react-redux';

    const Shop = () => {
        const products = useSelector(state=>state.product)
        return (
            <div className='flex flex-col items-center justify-center mx-auto py-10 px-4 md:px-16 lg:px-24 '>
            <h2 className='text-3xl font-semibold'>SHOP</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {products.products.map((product, index) => {
                return(
                <ProductCard product={product} />
                )
            }
            )}
            </div>
        </div>
    )
    }

    export default Shop
