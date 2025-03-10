"use client"

import PageContainer from "../containers/PageContainer";

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
    return (
        <div className="my-10">
            <PageContainer>
                {product?.name}
            </PageContainer>
        </div>
    )
}

export default DetailClient