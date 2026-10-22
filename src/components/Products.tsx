import { IProducts } from '@/types/type';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import EditProductDialog from './EditProductDialog';
import { DeleteProductDialog } from './DeleteProductDialog';

const Products = ({products}:{products:IProducts[]}) => {
   
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

                          <EditProductDialog product={product}/>
                          <DeleteProductDialog id={product._id}/>
                    </CardContent>
                </Card>)
            }
        </div>
    );
};

export default Products;