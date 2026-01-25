import getProductsId from '@/app/actions/getProductsId';
import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react'

type DetailProps = {
    productId?: string;
}

const Detail = async ({ params }: { params: DetailProps }) => {
    const { productId } = await params;
    const product = await getProductsId({ productId });

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <DetailClient product={product} />
        </div>
    )
}

export default Detail