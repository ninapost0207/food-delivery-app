import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

export function Product ({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const BtnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const BtnClasses = ['py-2 px-4 border', BtnBgClassName]

    return (
        <div 
        className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={ product.image} className='w-1/6' alt={product.title} />
            <p>{ product.title }</p>
            <p className='font-bold'>{product.price}</p>
            <button 
            
            className={BtnClasses.join(' ')}
            onClick={() => setDetails(!details)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>
                    {product.description}
                </p>
            </div>}
        </div>
    )
}