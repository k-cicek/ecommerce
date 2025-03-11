"use client"

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useState } from "react";

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    inStock: boolean;
    image: string;
    reviews: {
        id: string;
        userID: string;
        productID: string;
        rating: number;
        comment: string;
    }[];
};

const DetailClient = ({ product }: { product: Product }) => {
    const [cartProduct, setCartProduct] = useState({
        productID: product.id,
        quantity: 0,
        price: product.price,
    });
    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[400px] w-[200px]">
                        <Image src={product.image} fill alt="" />
                    </div>
                    <div className="w-1/2 space-y-3">
                        <div className="text-xl md:text-2xl">
                            {product.name}
                        </div>
                        <div className="text-slate-500">
                            {product.description}
                        </div>
                        <div className="flex items-center gap-2">
                            <div>STOK DURUMU:</div>
                            {
                                product.inStock ? <div className="text-green-500">Ürün Stokta Mevcut</div> : <div className="text-red-500">Ürün Stokta Mevcut Değil</div>
                            }
                        </div>
                        <Counter cartProduct={cartProduct} increaseFunc={() => { }} decreaseFunc={() => { }} />
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient