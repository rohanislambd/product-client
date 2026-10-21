import { IProducts } from '@/types/type';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const Products = ({products}:{products:IProducts[]}) => {
    console.log(products);
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5'>
            {
                products.map((product:IProducts) =>  <Card key={product._id}>
                    <CardContent>
                        <Image
                         className="h-90 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={product.image}
                          alt='product'
                          height={400}
                          width={400}
                        />

        
                          <h1>{product.name}</h1>
                          <p>{product.price}</p>
                    </CardContent>
                </Card>)
            }
        </div>
    );
};

export default Products;