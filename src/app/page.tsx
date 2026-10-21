import AddProductFrom from "@/components/AddProductfrom";
import Products from "@/components/Products";
import { IProducts } from "@/types/type";

export default async function Home() {

  const res = await fetch ('http://localhost:8000/products');
  const products:IProducts[] = await res.json();
  
  return (
    <div>
       <AddProductFrom/>
       <Products  products={products}/>
    </div>
  );
}
