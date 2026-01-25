import { Product } from "@prisma/client";

interface ManageClientProps {
    products: Product[];
}

const ManageClient = ({ products }: ManageClientProps) => {
    return (
        <div>ManageClient</div>
    )
}

export default ManageClient