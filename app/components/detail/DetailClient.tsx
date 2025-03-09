"use client"

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
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export default DetailClient