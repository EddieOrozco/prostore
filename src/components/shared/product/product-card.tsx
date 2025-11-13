import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import ProductPrice from "./produc-price";

const ProductCard = ({product}: {product:any;}) => {
    return ( 
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/product/${product.slug}`}>
                    <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    width={300} 
                    height={300} 
                    priority={true} />
                </Link>
            </CardHeader>
            <Card className="p-4">
                <div className="text-sm">{product.brand}</div>
                <Link 
                    href={`/product/${product.slug}`} 
                    className="text-blue-600 hover:underline">
                    <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                </Link>
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ) : (
                        <p className="text-destructive">Out of Stock</p>
                    )}
                </div>
            </Card>
        </Card>
     );
}
 
export default ProductCard;