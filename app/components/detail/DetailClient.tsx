"use client"

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material"
import Button from "../general/Button";
import Comment from "./Comment";
import { Product, Review } from "./types";
import Heading from "../general/Heading";
import UseCart from "@/hooks/useCart";

export type CardProductProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    inStock: boolean;

}

const DetailClient = ({ product }: { product: any }) => {
    const { productCartQty, addToBasket, cartPrdcts } = UseCart();
    const [displayButton, setDisplayButton] = useState(false)

    const [cartProduct, setCartProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        image: product.image,
        inStock: product.inStock
    });

    useEffect(() => {
        setDisplayButton(false)
        let controlDisplay: any = cartPrdcts?.findIndex(cart => cart.id == product.id)
        if (controlDisplay > -1) {
            setDisplayButton(true)
        }
    }, [cartPrdcts])


    const increaseFunc = () => {
        if (cartProduct.quantity == 10) return;
        setCartProduct(prev => ({
            ...prev,
            quantity: prev.quantity + 1
        }))
    }

    const decreaseFunc = () => {
        if (cartProduct.quantity == 1) return;
        setCartProduct(prev => ({
            ...prev,
            quantity: prev.quantity - 1
        }))
    }

    let productRating = product.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] md-3 md:mb-0">
                        <Image src={product.image} fill alt="" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <div className="text-xl md:text-2xl">
                            {product.name}
                        </div>
                        <Rating name="read-only" value={productRating} readOnly />

                        <div className="text-slate-500">
                            {product.description}
                        </div>
                        <div className="flex items-center gap-2">
                            <div>STOK DURUMU:</div>
                            {
                                product.inStock ? <div className="text-green-500">Ürün Stokta Mevcut</div> : <div className="text-red-500">Ürün Stokta Mevcut Değil</div>
                            }
                        </div>
                        <div className="text-lg md:text-2xl text-orange-600 font-bold">{product.price} ₺</div>
                        {
                            displayButton ? <>
                                <Button text="Ürün Sepete Ekli" small outline onClick={() => { }} />
                            </> : <>
                                <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cartProduct={cartProduct} />
                                <Button text="Sepete Ekle" small onClick={() => addToBasket(cartProduct)} />
                            </>
                        }
                    </div>
                </div>
                <Heading text="Yorumlar" />
                <div>
                    {product?.reviews?.map((prd: Review) => (
                        <Comment key={prd.id} prd={prd} />
                    ))}
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient