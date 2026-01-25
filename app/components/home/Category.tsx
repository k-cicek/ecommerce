import getCategories from "@/app/actions/getCategories"
import CategoryClient from "./CategoryClient";

const Category = async () => {
    const categories = await getCategories();
    return (
        <CategoryClient categories={categories} />
    )
}

export default Category